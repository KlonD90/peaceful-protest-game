import {
    SWAT_MODE_HIDE,
    SWAT_MODE_HUNT,
    PADDY_WAGON_MODE_LEAVE,
} from '../constants.js';

import Star from "./Star.js"

const SQUAD_DENSITY = 35;
const SQUAD_DISCIPLINE = 0.4;
const TURN_FREQUENCY = 10;

class SWATSquad {
    // TODO: prefab???? ? ?
    constructor({ game, gameObject, count, speed, group }) {
        this.game = game;
        this.gameObject = gameObject

        this.speed = {
            current: speed.value,
            ...speed
        };

        this.mode = SWAT_MODE_HIDE;
        this.moveTarget = null;
        this.updateIndex = 0;

        this.sprites = [];
        for (let i = 0; i < count; i++) {
            const swatSprite = this.game.add.sprite(-100, -100, 'omon', 0);
            swatSprite.anchor.set(0.5);
            swatSprite.visible = false;
            swatSprite.mz = this

            this.game.physics.arcade.enable(swatSprite);

            this.sprites.push(swatSprite);
            group.add(swatSprite);
            const fpsAnimation = 5;
            swatSprite.animations.add('walk', [1, 2], fpsAnimation, true);
            swatSprite.animations.play('walk');
        }
    }

    update() {
        if (this.mode === SWAT_MODE_HUNT) {
            const lastSprite = this.sprites[this.sprites.length - 1];
            const firstSprite = this.sprites[0];

            if (
                this.game.math.fuzzyEqual(
                    this.game.math.distanceSq(firstSprite.x, firstSprite.y, this.moveTargets[0].x, this.moveTargets[0].y),
                    0,
                    firstSprite.width*2
                )
            ) {
                this.moveTargets[0].callback && this.moveTargets[0].callback()
                this.moveTargets.shift()
                this.moveTargets.length === 0 ? this.setMode(SWAT_MODE_HIDE) : this.update()
            } else {
                const [moveTarget, ...rest] = this.moveTargets
                // change direction once in a while
                if (this.updateIndex % TURN_FREQUENCY === 0) {
                    const angle = this.game.math.angleBetweenPoints(firstSprite, moveTarget) +
                        (this.updateIndex === 0 ? 1 : -1) * this.game.rnd.realInRange(0, SQUAD_DISCIPLINE);
                    this.game.physics.arcade.velocityFromRotation(angle, this.speed.current, firstSprite.body.velocity);
                    firstSprite.rotation = angle-(Math.PI/2);
                }

                for (let i = 1; i < this.sprites.length; i++) {
                    const swatSprite = this.sprites[i];
                    const angleToTarget = this.game.math.angleBetweenPoints(swatSprite, this.sprites[i - 1]);
                    this.game.physics.arcade.velocityFromRotation(angleToTarget, this.speed.current, swatSprite.body.velocity);
                    swatSprite.rotation = angleToTarget-(Math.PI/2);
                }

                if (this.updateIndex === 2 * TURN_FREQUENCY - 1) {
                    this.updateIndex = 0;
                } else {
                    this.updateIndex++;
                }
            }
        }
    }

    setMode(mode, props = {}) {
        switch (mode) {
            case SWAT_MODE_HIDE: {
                if (this.mode === SWAT_MODE_HUNT) {
                    for (let i = 0; i < this.sprites.length; i++) {
                        for (let j = 0; j < this.sprites[i].children.length; j++) {
                            this.sprites[i].getChildAt(j).mz.kill();
                        }
                        this.sprites[i].removeChildren();
                        this.sprites[i].visible = false;
                        this.sprites[i].body.stop();
                    }
                    this.updateIndex = 0;
                    this.moveTargets = [];
                }
                break;
            }
            case SWAT_MODE_HUNT: {
                if (this.mode === SWAT_MODE_HIDE) {
                    const { start, targets } = props;
                    const { x, y } = start

                    this.moveTargets = targets;
                    const [moveTarget, ...rest] = targets

                    const directionSign = moveTarget.x > x ? -1 : 1;
                    for (let i = 0; i < this.sprites.length; i++) {
                        const swatSprite = this.sprites[i];
                        swatSprite.x = x + i * directionSign * SQUAD_DENSITY;
                        swatSprite.y = y;
                        swatSprite.visible = true;
                    }
                }
                break;
            }
        }

        this.mode = mode;
    }

    onArrest (protester) {
        if (Math.random() < 0.3)
        {
            this.gameObject.mz.tweet.rTweet({type: 'omon'}, {visible: 5000, fadeIn: 500, fadeOut: 500});
        }
      if (protester instanceof Star) {
        console.log("Arrested star")
        this.gameObject.mz.tweet.rTweet({type: 'star_'+protester.name+'_arrest'}, {visible: 5000, fadeIn: 500, fadeOut: 500});
        const paddyWagon = this.gameObject.mz.arrays.wagons[0];
        const callback = () => {
            this.gameObject.mz.tweet.rTweet({type: 'star_'+protester.name+'_bus'}, {visible: 5000, fadeIn: 500, fadeOut: 500});
            this.gameObject.handleLeaveWagon(paddyWagon, -300, 0);
            for (let i = 0; i < this.sprites.length; i++) {
                for (let j = 0; j < this.sprites[i].children.length; j++) {
                    this.sprites[i].getChildAt(j).mz.kill();
                }
                this.sprites[i].removeChildren();
                this.sprites[i].visible = false;
                this.sprites[i].body.stop();
            }
            this.moveTargets = [{x: 0, y: 200}];
        };
        this.moveTargets.unshift({x: paddyWagon.body.x + paddyWagon.body.width, y: paddyWagon.body.y + paddyWagon.body.height, callback })
      }
    }
}

function pickRandomElementFromArray (array) {
  if (array.length === 0) return undefined
  let index = Math.floor(Math.random()*array.length)
  if (index >= array.length) index = 0
  return array[index]
}

export default SWATSquad;
