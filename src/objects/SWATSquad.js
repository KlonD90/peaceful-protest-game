import {
    SWAT_MODE_HIDE,
    SWAT_MODE_HUNT,
    PADDY_WAGON_MODE_LEAVE,
} from '../constants.js';

import Star from "./Star.js"

const SQUAD_DENSITY = 40;
const SQUAD_DISCIPLINE = 0.4;
const TURN_FREQUENCY = 30;

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
            const swatSprite = this.game.add.sprite(-100, -100, 'swat', 0);
            swatSprite.anchor.set(0.5);
            swatSprite.visible = false;
            swatSprite.mz = this

            this.game.physics.arcade.enable(swatSprite);

            this.sprites.push(swatSprite);
            group.add(swatSprite);
        }
    }

    update() {
        if (this.mode === SWAT_MODE_HUNT) {
            const lastSprite = this.sprites[this.sprites.length - 1];

            if (
                this.game.math.fuzzyEqual(
                    this.game.math.distanceSq(lastSprite.x, lastSprite.y, this.moveTargets[0].x, this.moveTargets[0].y),
                    0,
                    lastSprite.width
                )
            ) {
                this.moveTargets[0].callback && this.moveTargets[0].callback()
                this.moveTargets.shift()
                this.moveTargets.length === 0 ? this.setMode(SWAT_MODE_HIDE) : this.update()
            } else {
                const [moveTarget, ...rest] = this.moveTargets
                // change direction once in a while
                if (this.updateIndex % TURN_FREQUENCY === 0) {
                    const firstSprite = this.sprites[0];
                    const angle = this.game.math.angleBetweenPoints(firstSprite, moveTarget) +
                        (this.updateIndex === 0 ? 1 : -1) * this.game.rnd.realInRange(0, SQUAD_DISCIPLINE);
                    this.game.physics.arcade.velocityFromRotation(angle, this.speed.current, firstSprite.body.velocity);
                }

                for (let i = 1; i < this.sprites.length; i++) {
                    const swatSprite = this.sprites[i];
                    const angleToTarget = this.game.math.angleBetweenPoints(swatSprite, this.sprites[i - 1]);
                    this.game.physics.arcade.velocityFromRotation(angleToTarget, this.speed.current, swatSprite.body.velocity);
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
      if (protester instanceof Star) {
        console.log("Arrested star")
        const paddyWagon = pickRandomElementFromArray(this.gameObject.mz.levelObjects.paddyWagon)
        const callback = () => paddyWagon.setState(PADDY_WAGON_MODE_LEAVE)
        this.moveTargets.unshift({ ...paddyWagon.sprite.body.center, callback })
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
