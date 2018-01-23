import {
    SWAT_MODE_HIDE,
    SWAT_MODE_HUNT,
    PADDY_WAGON_MODE_LEAVE,
} from '../constants.js';

import Star from "./Star.js"

const SQUAD_DENSITY = 50;
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
            const swatSprite = this.game.add.sprite(-100, -100, 'ALL_IMAGES','omon-0',);
            swatSprite.anchor.set(0.5);
            swatSprite.visible = false;
            swatSprite.mz = this
            swatSprite.moveTargets = [];

            this.game.physics.arcade.enable(swatSprite);

            this.sprites.push(swatSprite);
            group.add(swatSprite);
            const fpsAnimation = 5;
            swatSprite.animations.add('walk', ['omon-1', 'omon-2'], fpsAnimation, true);
            swatSprite.animations.play('walk');
        }
    }

    update() {
        if (this.mode === SWAT_MODE_HUNT) {

            for (let i =0; i<this.sprites.length; i++)
            {
                const sprite = this.sprites[i];
                if (sprite.moveTargets.length)
                {
                    if (
                        this.game.math.fuzzyEqual(
                            this.game.math.distanceSq(sprite.x, sprite.y, sprite.moveTargets[0].x, sprite.moveTargets[0].y),
                            0,
                            5
                        )
                    ) {
                        sprite.moveTargets[0].callback && sprite.moveTargets[0].callback()
                        sprite.moveTargets.shift()
                        if (sprite.moveTargets.length === 0){
                            sprite.visible = false;
                            this.checkHide();
                        }
                    } else {
                        const [moveTarget, ...rest] = sprite.moveTargets;
                        const angle = this.game.math.angleBetweenPoints(sprite, moveTarget);
                        this.game.physics.arcade.velocityFromRotation(angle, this.speed.current, sprite.body.velocity);
                        sprite.rotation = angle-(Math.PI/2);
                    }
                }

            }
        }
    }

    checkHide(){
        let l = 0;
        for (let i =0; i<this.sprites.length; i++)
        {
            l += this.sprites[i].moveTargets.length;
        }
        if (l === 0)
        {
            this.setMode(SWAT_MODE_HIDE);
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
                    this.resetMoveTargets();
                }
                break;
            }
            case SWAT_MODE_HUNT: {
                if (this.mode === SWAT_MODE_HIDE) {
                    const { start, targets } = props;
                    const { x, y } = start


                    const [moveTarget, ...rest] = targets

                    this.resetMoveTargets();
                    for (let t of targets)
                    {
                        this.pushMoveTarget(t);
                    }

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

    pushMoveTarget(target){
        for (let i = 0; i < this.sprites.length; i++) {
            this.sprites[i].moveTargets.push(target);
        }
    }
    unshiftMoveTarget(target){
        for (let i = 0; i < this.sprites.length; i++) {
            this.sprites[i].moveTargets.unshift(target);
        }
    }

    resetMoveTargets(){
        for (let i = 0; i < this.sprites.length; i++) {
            this.sprites[i].moveTargets = [];
        }
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
        this.gameObject.mz.tweet.rTweet({type: 'star_'+protester.name+'_bus'}, {visible: 5000, fadeIn: 500, fadeOut: 500});
        this.resetMoveTargets();
        this.pushMoveTarget({x: paddyWagon.body.x + paddyWagon.body.width, y: paddyWagon.body.y + paddyWagon.body.height});
        // this.moveTargets.unshift({x: paddyWagon.body.x + paddyWagon.body.width, y: paddyWagon.body.y + paddyWagon.body.height, callback })
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
