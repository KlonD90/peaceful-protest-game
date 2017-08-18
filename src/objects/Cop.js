import Prefab from './Prefab.js';
import FOV from './FOV.js';
import {
    COP_MODE_WANDER,
    COP_MODE_PURSUE,
    COP_MODE_CONVOY,
    FOV_MODE_CAPTURE,
    FOV_MODE_NORMAL
} from '../constants.js';

class Cop extends Prefab {
    constructor({ game, x, y, fov, speed, spriteName }) {
        super({ game, x, y, speed, spriteKey: 'cop', spriteName });

        this.FOV = new FOV({
            game: this.game,
            radius: fov.distance,
            angle: fov.angle
        });
        fov.group.add(this.FOV.graphics);

        this.audioPunches = [
            this.game.add.audio('punch01'),
            this.game.add.audio('punch02')
        ];

        this.target = null;
        this.attractionPoint = null;
        this.attractionStrength = 0;
        this.returnCoords = null;
    }

    update() {
        this.speed.current = this.speed.value;
        if (this.mode === COP_MODE_PURSUE) {
            this.speed.current *= this.speed.running;
        }
        if (this.mode === COP_MODE_CONVOY && !this.target.alive) {
            this.setMode(COP_MODE_WANDER, { coords: this.returnCoords });
        }

        super.update();

        this.FOV.update({
            x: this.sprite.x,
            y: this.sprite.y,
            angle: this.sprite.body.angle,
            mode: this.mode === COP_MODE_PURSUE ? FOV_MODE_CAPTURE : FOV_MODE_NORMAL
        });
    }

    setMode(mode, props = {}) {
        switch (mode) {
            case COP_MODE_WANDER: {
                const { coords } = props;
                // clean up previous state
                if (this.mode === COP_MODE_PURSUE) {
                    this.target = null;
                } else if (this.mode === COP_MODE_CONVOY) {
                    this.target = null;
                    this.returnCoords = null;
                    this.FOV.revive();
                }
                if (coords) {
                    this.sprite.body.onMoveComplete.add(this.wander, this);
                    this.setMoveTarget(coords);
                } else {
                    this.wander(coords);
                }
                break;
            }
            case COP_MODE_PURSUE: {
                const { target } = props;
                // clean up previous state
                if (this.mode === COP_MODE_WANDER) {
                    this.stopWandering();
                }
                this.target = target;
                this.setMoveTarget(target);
                break;
            }
            case COP_MODE_CONVOY: {
                const { jailCoords } = props;
                this.FOV.kill();
                this.returnCoords = { x: this.sprite.x, y: this.sprite.y };
                this.setMoveTarget(jailCoords);

                if (this.mode !== COP_MODE_CONVOY) {
                    this.audioPunches[this.game.rnd.between(0, 1)].play();
                }
                break;
            }
        }

        super.setMode(mode);
    }

    wander() {
        this.sprite.body.onMoveComplete.remove(this.wander, this);
        const nextAction = this.attractionStrength > 0 ? 1 : this.game.rnd.between(0, 2);
        if (nextAction !== 0) {
            this.sprite.body.onMoveComplete.add(this.wander, this);
            this.setMoveTarget(this.getNextCoords());
        } else {
            this.stayingTimer.stop(true);
            this.stayingTimer.add(this.game.rnd.between(1000, 3000), this.wander, this);
            this.stayingTimer.start();
        }
    }

    getNextCoords() {
        let bounds;
        const rnd = this.game.rnd.frac();
        if (
            this.attractionStrength === 1 ||
            this.attractionStrength > 0 && rnd <= this.attractionStrength
        ) {
            bounds = {
                top: Math.min(this.sprite.y, this.attractionPoint.y),
                right: Math.max(this.sprite.x, this.attractionPoint.x),
                bottom: Math.max(this.sprite.y, this.attractionPoint.y),
                left: Math.min(this.sprite.x, this.attractionPoint.x)
            };
        }
        return super.getNextCoords(bounds);
    }

    kill() {
        this.stopWandering();
        this.FOV.kill();

        super.kill();
    }
}

export default Cop;
