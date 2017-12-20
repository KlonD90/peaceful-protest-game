import Prefab from './Prefab.js';
import FOV from './FOV.js';
import {
    COP_MODE_ENTER,
    COP_MODE_WANDER,
    COP_MODE_PURSUE,
    COP_MODE_CONVOY,
    COP_MODE_FIGHT,
    COP_MODE_STUN,
    FOV_MODE_CAPTURE,
    FOV_MODE_NORMAL,
} from '../constants.js';

class Cop extends Prefab {
    constructor({ alive, fov, x = 0, y = 0, ...prefabOptions }) {
        super({ x, y, spriteKey: 'cop_sprite', ...prefabOptions });

        this.FOV = new FOV({
            game: this.game,
            radius: fov.distance,
            angle: fov.angle
        });
        fov.group.add(this.FOV.graphics);

        this.target = null;
        this.attractionPoint = null;
        this.attractionStrength = 0;
        this.returnCoords = null;

        this.sprite.body.immovable = true;
        this.sprite.body.setSize(37, 37);
        this.stunTimer = this.game.time.create(false);


        if (!alive) {
            this.kill();
        }
    }

    update() {
        let newSpeed = this.speed.value;
        if (this.mode === COP_MODE_PURSUE || this.mode === COP_MODE_ENTER) {
            newSpeed *= this.speed.running;
        }
        this.setSpeed(newSpeed);

        super.update()

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
                } else if (this.mode === COP_MODE_CONVOY || this.mode === COP_MODE_FIGHT || this.mode === COP_MODE_STUN) {
                    this.target = null;
                    this.returnCoords = null;
                    this.FOV.revive();
                }
                if (coords) {
                    this.moveTo(coords, { callback: () => this.wander() });
                } else {
                    this.wander();
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
                this.moveTo(target, {phasing: true});
                break;
            }
            case COP_MODE_CONVOY: {
                const { jailCoords } = props;
                this.FOV.kill();
                this.returnCoords = { x: this.sprite.x, y: this.sprite.y };
                this.moveTo(jailCoords, {callback: () => this.handleCovoyEnd(), phasing: true})
                break;
            }
            case COP_MODE_ENTER: {
                const { coords } = props;
                this.moveTo(coords[0]);

                const callback = () => {
                    this.FOV.revive();
                    this.setMode(COP_MODE_WANDER);
                }
                this.moveTo(coords[1], { callback, reset: false })
                break;
            }
            case COP_MODE_FIGHT: {
                this.stopWandering();
                this.jailTarget = this.moveTargets;
                // this.FOV.kill();
                this.moveTo(null);
                break;
            }
            case COP_MODE_STUN: {
                this.stopWandering();
                this.stunTimer.stop();
                this.stunTimer.removeAll();
                if (this.stunTween)
                    this.stunTween.stop();
                this.stunTween = this.game.add.tween(this.viewSprite);
                this.stunTween.to( { alpha: 0 }, 500, Phaser.Easing.Linear.None, true, 0, 500, true);
                this.stunTween.start();
                this.stunTimer.add(5000, this.handleRecoverStun, this);
                this.stunTimer.start();
                break;
            }
        }

        super.setMode(mode);
    }

    handleRecoverStun(){
        this.stunTimer.removeAll();
        this.stunTimer.stop();
        this.stunTween.stop();
        this.viewSprite.alpha = 1;
        this.setMode(COP_MODE_WANDER);
    }

    handleCovoyEnd() {
        for (let i = 0; i < this.sprite.children.length; i++) {
            if (this.sprite.getChildAt(i) !== this.viewSprite)
                this.sprite.getChildAt(i).mz.kill();
        }

        this.setMode(COP_MODE_WANDER, { coords: this.returnCoords });
    }

    handleFightWin() {

    }

    wander() {
        const nextAction = this.attractionStrength > 0 ? 1 : this.game.rnd.between(0, 2);
        if (nextAction !== 0) {
            this.moveTo(this.getNextCoords(), { callback: () => this.wander() });
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
        const coords = super.getNextCoords(bounds);
        console.log(coords);
        return coords;
    }

    revive(rtl) {
        const offset = 100;
        const wagon = this.GameObject.pickRandomWagon();
        const x = Math.round(wagon.body.center.x)+offset;
        const y = wagon.y + wagon.body.height + 30;
        this.sprite.x = x;
        this.sprite.y = y;
        this.sprite.body.reset(x, y);
        this.sprite.body.enable = true;

        // const entranceX = this.game.rnd.between(1, Math.floor(this.game.world.width / 100) - 1) * 100;
        this.FOV.revive();

        super.revive();
        this.setMode(COP_MODE_WANDER);
    }

    kill() {
        this.target = null;

        this.stopWandering();
        this.FOV.kill();
        this.sprite.body.enable = false;

        super.kill();
    }
}

export default Cop;
