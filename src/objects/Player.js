import Protester from './Protester.js';
import SlotManager from './SlotManager';

import {
    PROTESTER_MODE_ARRESTED,
    PLAYER_MODE_FIGHT,
    PLAYER_MODE_STUN,
    PLAYER_MODE_NORMAL
} from '../constants.js';
import HelpInfo from "./HelpInfo";
import ProgressBar from './ProgressBar';

const TAP_RUNNING_DELTA = 200;
class Player extends Protester {
    constructor({
        fovGroup,
        radius,
        cheering,
        stamina,
        staminaCooldown,
        powerUp,
        powerDown,
        slots,
        ...protesterOptions,
    }) {
        super({
            atlasKey:'humans',
            spriteKey: 'player_sprite',
            spriteName: 'player',
            ...protesterOptions,
        });

        this.fightCount = 0;

        this.sprite.inputEnabled = true;
        this.sprite.input.priorityID = 1;

        this.sprite.body.collideWorldBounds = true;
        this.sprite.body.mass = 7;
        this.sprite.body.setSize(37, 37);

        this.direction = 0;

        this.power = 1;
        // this.powerUpValue = powerUp;
        // this.powerDownValue = powerDown;
        // this.powerTimer = this.game.time.create(false);
        // this.powerTimer.loop(2000, this.powerDown, this);
        // this.powerTimer.start();

        this.cheering = cheering;

        this.stamina = stamina;
        this.maxStamina = stamina;
        this.cooldownTimer = this.game.time.create(false);
        this.noPosterTimer = this.game.time.create(false);
        this.staminaCooldown = staminaCooldown * 1000;

        this.tapStartTimestamp = Date.now();
        this.tapDelta = Infinity;

        this.fightProgressBar = new ProgressBar({game: this.game, width: 44, radius: 5, color: 0x5479ef});
        this.sprite.addChild(this.fightProgressBar.graphics);

        this.staminaBar = new ProgressBar({game: this.game, width: 44, radius: 5, color: 0xe3ad92});
        this.sprite.addChild(this.staminaBar.graphics);

        this.cooldownBar = new ProgressBar({game: this.game, width: 44, radius: 5, color: 0xf0526f});
        this.sprite.addChild(this.cooldownBar.graphics);

        this.audioScream = this.game.add.audio('scream03');

        this.showPoster = false;
        this.isFrozen = false;
        this.isGoing = false;
        this.stunTimer = this.game.time.create(false);

        this.isWalking = false;
        this.isRunning = false;


        this.slots = new SlotManager(this.sprite, this, slots || [
            { x: -30, y: 0 },
            { x: -30, y: 30},
            { x: -30, y: -30},
            { x: -30, y: -60},
        ]);

        this.radius = {
            initial: radius,
            graphic: 0,
            actual: 0,
            actualSq: 0,
            tween: {}
        };
        this.resetRadius();

        this.circleGraphics = this.game.add.graphics(0, 0);
        fovGroup.add(this.circleGraphics);

        // events
        this.game.onResume.add(this.handleGameResume, this);

        this.keys = {
            up: this.game.input.keyboard.addKey(Phaser.Keyboard.UP),
            down: this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN),
            left: this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
            right: this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
            space: this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),
            shift: this.game.input.keyboard.addKey(Phaser.Keyboard.SHIFT)
        };

        
        this.sprite.smoothed = true;
        // this.sprite.body.setCircle(20);

        var n = "player_sprite";
        const fpsAnimation = 3;
        this.viewSprite.animations.add('walk', [n + "-1", n + "-2"], fpsAnimation, true);
        this.viewSprite.animations.add('run', [n + "-1", n + "-2"], fpsAnimation*this.speed.running, true);
        this.viewSprite.animations.add('walkPoster', [n + "-5", n + "-6"], fpsAnimation, true);
        this.viewSprite.animations.add('runPoster', [n + "-5", n + "-6"], fpsAnimation*this.speed.running, true);
        this.viewSprite.animations.add('stop', [n + "-0", n + "-0"], fpsAnimation, true);
        this.viewSprite.animations.add('stopPoster', [n + "-3", n + "-3"], fpsAnimation, true);


        //this.changeAnimations("player_sprite",3);
        this.fightBar = 0;

        this.canRun = true;


        Player.instance = this;
        window.Player = this;
    }



    update() {
        this.resetRadius();
        this.slots.update()

        super.update()

        this.circleGraphics.clear();

        if (this.mode === PROTESTER_MODE_ARRESTED || this.isFrozen || this.mode === PLAYER_MODE_STUN) {
            this.updateAnimation();
            this.hideProgressBars();
            return;
        }

        if (this.mode === PLAYER_MODE_FIGHT)
        {
            // this.updateAnimation();
            if (this.keys.space.justDown)
            {
                this.fightBar+=1;
                this.viewSprite.frame = this.viewSprite.frame === 3 ? 4 : 3;
            }
            this.updateFightBar();
            return;
        }



        this.circleGraphics
            // .lineStyle(1, 0x33ff33, 1)
            .beginFill(0x0db14b, 0.3)
            .drawCircle(this.sprite.x, this.sprite.y, this.radius.graphic * 2)
            .endFill();

        let newSpeed = this.speed.value;

        const areMovingKeysDown = this.keys.up.isDown ||
            this.keys.down.isDown ||
            this.keys.left.isDown ||
            this.keys.right.isDown;

        if (!this.cooldownTimer.running) {
            if (
                areMovingKeysDown && this.keys.shift.isDown ||
                this.tapDelta < TAP_RUNNING_DELTA
            ) {
                if (this.GameObject.mz.advices.shift !== null)
                {
                    this.GameObject.mz.advices.shift.hide();
                    this.GameObject.mz.advices.shift = null;
                }
                if (this.stamina > 0) {
                    this.stamina -= 1;
                    newSpeed *= this.speed.running;
                } else {
                    this.cooldownTimer.add(this.staminaCooldown, () => {
                        this.cooldownTimer.stop(true);
                        this.stamina = this.maxStamina;
                    });
                    this.cooldownTimer.start();
                }
            } else if (this.stamina < this.maxStamina) {
                this.stamina += 1;
            }
        }

        if (this.stamina < this.maxStamina) {
            if (this.cooldownTimer.running)
            {
                this.updateCooldownBar(this.cooldownTimer.ms / this.staminaCooldown);
            }
            else
            {
                const percentBar = this.stamina / this.maxStamina;
                this.updateStaminaBar(percentBar)
            }
        } else {
            this.hideProgressBars();
        }

        if (this.showPoster) {
            newSpeed *= this.speed.withPoster;
        }

        this.setSpeed(newSpeed);
        this.viewSprite.angle = this.direction - 90;

        if (areMovingKeysDown) {
            if (this.GameObject.mz.advices.move)
            {
                this.GameObject.mz.advices.move.hide();
                this.GameObject.mz.advices.move = null;
            }
            this.moveTo(null);
            const angles = [];

            if (this.keys.up.isDown) {
                angles.push(-90);
            }
            if (this.keys.down.isDown) {
                angles.push(90);
            }
            if (this.keys.left.isDown) {
                if (this.keys.up.isDown) {
                    angles.push(-180);
                } else {
                    angles.push(180);
                }
            }
            if (this.keys.right.isDown) {
                angles.push(0);
            }
            const angle = angles.reduce((value, sum) => sum + value, 0) / angles.length;
            this.direction = angle;
            this.game.physics.arcade.velocityFromAngle(
                angle,
                this.speed.current,
                this.sprite.body.velocity
            );
            console.log('direction', this.direction);
            // this.sprite.frame = 2;
            this.resetClickSpeed(true);
        } else if (
            this.keys.up.justUp ||
            this.keys.down.justUp ||
            this.keys.left.justUp ||
            this.keys.right.justUp
        ) {
            this.isGoing = false;
            this.stop();
        }

        if (this.keys.space.justDown && this.mode !== PLAYER_MODE_FIGHT && !this.noPosterTimer.running) {
            this.togglePoster();


        }
        this.updateAnimation();

    }

    handleGameResume() {
        this.moveTo(null);
    }

    setMode(mode, props = {}) {
        console.log('player mode', mode);
        switch (mode) {
            case PROTESTER_MODE_ARRESTED: {
                this.sprite.body.immovable = true;
                this.togglePoster(false);

                this.sprite.body.collideWorldBounds = false;

                this.cooldownTimer.stop(true);
                break;
            }
            case PLAYER_MODE_FIGHT: {
                const target = props.target;
                const arrested = target.mz.getArrestedSprite();

                this.moveTo(null);
                if (arrested)
                {
                    this.viewSprite.angle = Math.atan2((target.y+arrested.y) - this.sprite.y, (target.x+arrested.x) - this.sprite.x) * 180 / Math.PI - 90;
                }
                this.showPoster = false;
                this.fightBar = 10;
                this.GameObject.mz.timers.fight.stop();
                this.GameObject.mz.timers.fight.removeAll();
                this.GameObject.mz.timers.fight.loop(Math.max(400 - (this.fightCount*20), 160), this.handleTickFight, this);
                this.GameObject.mz.timers.fight.add(5000, this.handleFightLose, this);
                this.GameObject.mz.timers.fight.start();
                this.sprite.body.immovable = true;
                this.viewSprite.animations.stop(null, true);
                // HelpInfo.show('space_fight')
                this.GameObject.mz.objects.fightAdvice.visible = true;
                console.log(this.GameObject.mz.timers.fight);
                break;
            }
            case PLAYER_MODE_STUN: {
                // HelpInfo.hide('space_fight')
                this.GameObject.mz.objects.fightAdvice.visible = false;
                this.showPoster = false;
                this.GameObject.mz.timers.fight.stop();
                this.GameObject.mz.timers.fight.removeAll();
                this.sprite.body.immovable = true;
                this.stunTimer.stop();
                this.stunTimer.removeAll();
                this.stunTimer.add(5000, this.handleRecoverStun, this);
                if (this.stunTween)
                    this.stunTween.stop();
                // this.stunTimer.loop(100, this.handleAlphaTick, this);
                this.stunTween = this.game.add.tween(this.viewSprite)
                this.stunTween.to( { alpha: 0 }, 500, Phaser.Easing.Linear.None, true, 0, 500, true);
                this.stunTween.start();
                this.stunTimer.start();
                break;
            }
            case PLAYER_MODE_NORMAL: {
                // HelpInfo.hide('space_fight')
                this.GameObject.mz.objects.fightAdvice.visible = false;
                this.showPoster = false;
                this.stunTimer.removeAll();
                this.stunTimer.stop();
                if (this.stunTween)
                    this.stunTween.stop();
                this.viewSprite.alpha = 1;
                this.sprite.body.immovable = false;
                this.sprite.body.enable = true;
                break;
            }
            default: {
                this.sprite.body.immovable = false;
                break;
            }
        }

        super.setMode(mode, props);
    }

    handleAlphaTick(){
    }

    handleRecoverStun(){
        this.setMode(PLAYER_MODE_NORMAL);
    }

    togglePoster(on = !this.showPoster) {
        if (on === this.showPoster) {
            return;
        }

        if (this.GameObject.mz.advices.space !== null)
        {
            this.GameObject.mz.advices.space.hide();
            this.GameObject.mz.advices.space = null;
        }

        // play sound
        if (on) {
            this.audioScream.play('', 0, 0.1);
        }

        this.showPoster = on;
    }

    // powerUp(value = this.powerUpValue) {
    //     if (value !== 0) {
    //         this.powerChange(value);
    //     }
    // }
    //
    // powerDown(value = this.powerDownValue) {
    //     const power = Math.max(1, this.power - value);
    //     if (power !== this.power) {
    //         this.powerChange(-value);
    //     }
    // }
    //
    // powerChange(value) {
    //     this.power += value;
    //
    //     this.posterSprite.scale.set(this.power);
    // }

    resetClickSpeed(discard) {
        if (discard) {
            this.tapDelta = Infinity;
        } else {
            const now = Date.now();
            this.tapDelta = now - this.tapStartTimestamp;
            this.tapStartTimestamp = now;
        }
    }

    resetRadius() {
        let newRadius = this.showPoster ? this.radius.initial : 0;
        newRadius *= this.power;

        if (newRadius === this.radius.actual) {
            return;
        }

        if (this.radius.tween.isRunning) {
            this.radius.tween.stop();
        }

        if (this.game.math.fuzzyEqual(newRadius, this.radius.graphic, 1)) {
            this.radius.graphic = newRadius;
        } else {
            this.radius.tween = this.game.add.tween(this.radius);
            this.radius.tween.to({ graphic: newRadius }, 500, Phaser.Easing.Exponential.Out);
            this.radius.tween.start();
        }

        this.radius.actual = newRadius;
        this.radius.actualSq = this.radius.actual ** 2;
    }

    freeze() {
        if (this.sprite.alive) {
            this.moveTo(null);
        }

        this.isFrozen = true;
    }

    kill() {
        this.game.onResume.removeAll();
        // this.powerTimer.stop(true);

        super.kill();
    }

    screenAttack(){

    }

    updateFightBar(){
        this.staminaBar.update(0);
        this.cooldownBar.update(0);
        const percent = this.fightBar/20;
        this.fightProgressBar.update(percent);
        if (percent >= 1)
        {
            this.handleFightWin();
        }
    }

    updateStaminaBar(percent){
        this.fightProgressBar.update(0);
        this.cooldownBar.update(0);
        this.staminaBar.update(percent);
    }

    updateCooldownBar(percent){
        this.staminaBar.update(0);
        this.fightProgressBar.update(0);
        this.cooldownBar.update(percent);
    }

    hideProgressBars(){
        this.staminaBar.update(0);
        this.fightProgressBar.update(0);
        this.cooldownBar.update(0);
    }

    handleTickFight(){
        this.fightBar--;
        if (this.fightBar < 0)
            this.fightBar = 0;
    }

    handleFightWin(){
        this.clearTimers();
        this.hideProgressBars();
        this.setMode(PLAYER_MODE_NORMAL);
        this.fightCount++;
        this.noPosterTimer.add(1000, () => {
            this.noPosterTimer.stop(true);
        });
        this.noPosterTimer.start();
        this.GameObject.fightWin();
        // this.game.winCop();
    }

    handleFightLose(){
        this.clearTimers();
        this.hideProgressBars();
        this.setMode(PLAYER_MODE_STUN);
        this.GameObject.fightLose();
    }



    clearTimers(){
        this.GameObject.mz.timers.fight.removeAll();
        this.GameObject.mz.timers.fight.stop();
    }
}

export default Player;
