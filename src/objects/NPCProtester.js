import Protester from './Protester.js';
import Player from './Player.js'
import {
    PROTESTER_MODE_WANDER,
    PROTESTER_MODE_ARRESTED,
    PROTESTER_MODE_LEAVE,
    PROTESTER_MODE_FOLLOW,
    PROTESTER_MODE_NOD,
} from '../constants.js';

class NPCProtester extends Protester {
    constructor({
        game,
        x,
        y,
        group,
        speed,
        spriteKey,
        spriteName,
        mood,
        moodDown,
        moodUp,
        dropPoster,
        onLeft,
        onDropPoster,
        GameObject
    }) {
        super({ game, x, y, speed, spriteKey, spriteName, onDropPoster, GameObject });

        this.group = group;
        this.group.add(this.sprite);

        this.progressBar = this.game.add.graphics();
        this.sprite.addChild(this.progressBar);

        this.leavingTimer = this.game.time.create(false);

        this.mood = mood;
        this.initialMood = mood;
        this.moodUpValue = moodUp;
        this.moodDownValue = moodDown;

        this.dropPoster = dropPoster;

        this.isBeingCheeredUp = false;

        this.onLeft = onLeft;

        this.isFollower = false;
        this.isFollowing = false;
        this.isNOD = !this.isFollower && Math.random() < 1;
        this.nodDone = false;
        this.slot = null;

        // initially dead
        this.kill();
    }

    update() {
        if (
            this.mood === 0 &&
            !this.leavingTimer.running &&
            this.mode === PROTESTER_MODE_WANDER
        ) {
            this.leavingTimer.add(this.game.rnd.between(1000, 5000), this.leave, this);
            this.leavingTimer.start();
        } else if (this.mood > 0 && this.leavingTimer.running) {
            this.leavingTimer.stop(true);
        }
        if (this.mood > 0 && this.mode  === PROTESTER_MODE_LEAVE && !this.nodDone) {
            this.setMode(PROTESTER_MODE_WANDER);
        }

        if (this.mode === PROTESTER_MODE_NOD && this.nodDone)
        {
            this.setMode(PROTESTER_MODE_LEAVE);
        }

        if (!this.isFollowing)
        {
            if (this.isBeingCheeredUp) {
                if (this.isNOD)
                {
                    if (!this.nodDone && this.mode != PROTESTER_MODE_NOD)
                        this.setMode(PROTESTER_MODE_NOD);
                }
                else
                {
                    this.updateProgressBar(this.mood);
                    this.moodUp(this.moodUpValue);
                }
            } else if (this.mood < 0.75) {
                this.moodDown(this.moodDownValue);
                this.updateProgressBar(0);
            }
        }

        this.showPoster = this.mode !== PROTESTER_MODE_ARRESTED && this.mood >= 0.75 && !this.isNOD;

        if (this.showPoster && this.isFollower && !this.isFollowing)
        {
            this.isFollowing = true;
            const slot = Player.instance.slots.take(this);
            if (slot) {
                this.setMode(PROTESTER_MODE_FOLLOW, {slot})
            }
        }

        this.sprite.tint = 0xffffff;
        if (this.mood >= 0.75) {
            const tintSaturation = (this.mood - 0.75) / (1 - 0.75) * 0.25;
            this.sprite.tint = Phaser.Color.RGBArrayToHex([
                1 - tintSaturation,
                1,
                1 - tintSaturation
            ]);
        } else if (this.mood <= 0.25) {
            const tintSaturation = (1 - this.mood / 0.25) * 0.25;
            this.sprite.tint = Phaser.Color.RGBArrayToHex([
                1,
                1 - tintSaturation,
                1 - tintSaturation
            ]);
        }

        super.update();
    }

    handleLeft() {
        this.onLeft();
        this.kill();
    }

    setMode(mode, props = {}) {
        console.log(mode);
        switch (mode) {
            case PROTESTER_MODE_WANDER: {
                // clean up previous state
                if (this.mode === PROTESTER_MODE_LEAVE) {
                    this.moveTo(null);
                }

                const { coords } = props;
                if (coords) {
                    this.moveTo(coords, { callback: () => this.wander() });
                } else {
                    this.wander();
                }
                break;
            }
            case PROTESTER_MODE_FOLLOW: {
                if (this.mode === PROTESTER_MODE_WANDER) {
                    this.stopWandering();
                }
                const { slot } = props;
                this.following = slot
                this.moveTo(slot, { shouldStop: () => false });
                break;
            }
            case PROTESTER_MODE_ARRESTED: {
                // clean up previous state
                this.dismissSlotsTaken()
                if (this.mode === PROTESTER_MODE_WANDER) {
                    this.stopWandering();
                }
                break;
            }
            case PROTESTER_MODE_NOD: {
                if (this.mode === PROTESTER_MODE_WANDER) {
                    this.stopWandering();
                }
                console.log(this.GameObject);
                this.moveTo(
                    this.GameObject.mz.objects.player.sprite,
                    {
                        callback: () => {
                            this.nodDone = true;
                            this.GameObject.screenAttack();
                            this.moveTo(null);
                        },
                        shouldStop: (prefab, target) => {
                            const fuzzyEqual = prefab.game.math.fuzzyEqual
                            const prefabCenter = prefab.sprite.body.center
                            return Math.abs(target.x - prefabCenter.x) + Math.abs(target.y - prefabCenter.y) < 20;
                        }
                    }
                );
                break;
            }
            case PROTESTER_MODE_LEAVE: {
                // clean up previous state
                if (this.mode === PROTESTER_MODE_WANDER) {
                    this.stopWandering();
                }

                const x = this.sprite.x < this.game.world.width / 2 ? -100 : this.game.world.width + 100
                const y = this.sprite.y

                this.moveTo({ x, y }, { callback: () => this.handleLeft(), shouldStop: (prefab, target) =>  {
                    const prefabCenter = prefab.sprite.body.center
                    return Math.abs(target.x - prefabCenter.x) + Math.abs(target.y - prefabCenter.y) < 5;
                }});
                break;
            }
        }


        console.log(this)
        super.setMode(mode, props);
    }

    doNod(){
        // this.moveTo({
        //     ...this.getNextCoords(),
        //     callback: this.wander.bind(this)
        // });
    }

    wander() {
        const nextAction = this.game.rnd.between(0, 10);
        if (nextAction === 0) {
            this.moveTo(this.getNextCoords(), { callback: () => this.wander() });
        } else {
            this.stayingTimer.stop(true);
            this.stayingTimer.add(this.game.rnd.between(3000, 6000), this.wander, this);
            this.stayingTimer.start();
        }
    }

    leave() {
        this.setMode(PROTESTER_MODE_LEAVE);
        this.leavingTimer.stop(true);
    }

    toggleCheering(on = !this.isBeingCheeredUp) {
        if (on === this.isBeingCheeredUp) {
            return;
        }

        this.isBeingCheeredUp = on;
    }

    moodUp(value) {
        this.mood = Math.min(this.mood + value, 1);
    }

    moodDown(value) {
        this.mood = Math.max(this.mood - value, 0);
    }


    revive({ x, y, nextCoords, mood = this.initialMood }) {
        this.sprite.x = x;
        this.sprite.y = y;
        this.sprite.body.reset(x, y);

        this.posterSprite.revive();

        this.mood = mood;

        super.revive();

        this.setMode(PROTESTER_MODE_WANDER, { coords: nextCoords });
    }

    kill() {
        this.group.add(this.sprite);
        this.stopWandering();

        super.kill();
    }

    dismissSlotsTaken() {
      if (!this.following) return
      this.following.dismiss()
      this.following = null
    }
}

export default NPCProtester;
