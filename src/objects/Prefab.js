import {
    FIELD_OFFSET
} from '../constants.js';

class Prefab {
    constructor({ game, x, y, speed, spriteKey, spriteName, props, GameObject, moveTo }) {
        this.props = props;
        this.game = game;
        this.GameObject = GameObject;

        this.speed = {
            current: speed.value,
            ...speed
        };

        this.viewSprite = this.game.add.sprite(x, y, spriteKey, 0)
        this.sprite = this.game.add.sprite(x, y);
        this.sprite.mz = this;
        this.sprite.name = spriteName;
        this.sprite.anchor.set(0.5);
        this.sprite.addChild(this.viewSprite);

        this.game.physics.arcade.enable(this.sprite);
        this.sprite.body.reset(this.sprite.x, this.sprite.y);
        this.viewSprite.x = -(this.viewSprite.width / 2);
        this.viewSprite.y = -(this.viewSprite.height / 2);

        console.log(this.viewSprite);

        this.stayingTimer = this.game.time.create(false);

        this.mode = null;
        this.moveTo = moveTo
    }

    update() {
        // const moveTarget = this.moveTarget[0]
        // if (!moveTarget) return void this.sprite.body.stop();
        // if (moveTarget.update(this)) return
        //
        // if (this.mode === 'leave')
        // {
        //     console.log('leave', moveTarget, this);
        // }
        //
        // this.moveTarget.shift()
        // this.update()
    }

    setMode(mode) {
        this.mode = mode;
    }

    setSpeed(value) {
        if (this.speed.current === value) {
            return;
        }
        this.speed.current = value;
    }

    setVelocity(target) {
        const rotationToTarget = this.game.math.angleBetweenPoints(this.sprite.body.center, target);
        this.game.physics.arcade.velocityFromRotation(rotationToTarget, this.speed.current, this.sprite.body.velocity);
        this.viewSprite.rotation = rotationToTarget-(Math.PI/2);
        console.log('rotation to target', rotationToTarget);
    }


    // moveTo(target, { callback, shouldStop, reset = true } = {}) {
    //   if (reset) {
    //     const targets = this.moveTarget;
    //     this.moveTarget = [];
    //     targets.forEach(target => target.forceStop(this))
    //   }
    //
    //   if (target) {
    //     const newTarget = new MoveTarget({ target, callback, shouldStop })
    //     this.moveTarget.push(newTarget)
    //     newTarget.update(this)
    //   }
    //   else
    //   {
    //       this.sprite.body.stop();
    //   }
    // }

    getNextCoords(bounds) {
        const directions = [];
        if (!bounds) {
            bounds = {
                top: this.sprite.y - this.sprite.top + FIELD_OFFSET.top,
                right: this.game.world.width - (this.sprite.right - this.sprite.x),
                bottom: this.game.world.height - (this.sprite.bottom - this.sprite.y),
                left: this.sprite.x - this.sprite.left
            };
        }

        if (this.sprite.x > bounds.left) {
            directions.push('left');
        }
        if (this.sprite.x < bounds.right) {
            directions.push('right');
        }
        if (this.sprite.y > bounds.top) {
            directions.push('top');
        }
        if (this.sprite.y < bounds.bottom) {
            directions.push('bottom');
        }

        const direction = this.game.rnd.between(0, directions.length - 1);
        let x = this.sprite.x;
        let y = this.sprite.y;
        switch (directions[direction]) {
            case 'left':
                x = this.game.rnd.between(bounds.left, this.sprite.x - 1);
                break;
            case 'right':
                x = this.game.rnd.between(this.sprite.x + 1, bounds.right);
                break;
            case 'top':
                y = this.game.rnd.between(bounds.top, this.sprite.y - 1);
                break;
            case 'bottom':
                y = this.game.rnd.between(this.sprite.y + 1, bounds.bottom);
                break;
        }
        return { x: Math.round(x), y: Math.round(y) };
    }

    updateProgressBar(percent, color = 0x00ff00) {
        const y = -30;
        const width = 25;
        const height = 5;
        this.progressBar.clear();
        percent = this.game.math.clamp(percent, 0, 1);
        if (percent !== 0) {
            this.progressBar.lineStyle(1, color, 1);
            this.progressBar.drawRect(-width / 2, y - height / 2, width, height);
            this.progressBar.lineStyle(height, color, 1);
            this.progressBar.moveTo(-width / 2, y);
            this.progressBar.lineTo(Math.round(width * (-0.5 + percent)), y);
        }
    }

    stop() {
        // this.sprite.animations.stop(null, true);
        this.sprite.body.stop();
    }

    stopWandering() {
        this.moveTo(null);
        this.stayingTimer.stop(true);
    }

    revive() {
        this.sprite.revive(1);
    }

    kill() {
        this.mode = null;
        this.moveTo(null);

        this.sprite.kill();
    }
}

export default Prefab;
