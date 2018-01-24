import Player from './../objects/Player.js';
import NPCProtester from './../objects/NPCProtester.js';
import Cop from './../objects/Cop.js';
import Journalist from './../objects/Journalist.js';
import Star from './../objects/Star.js'
import SWATSquad from '../objects/SWATSquad.js';
import Shield from '../objects/Shield.js';
import DroppedPoster from '../objects/DroppedPoster.js';
import GameInterface from '../objects/GameInterface.js';
import PauseMenu from './../objects/PauseMenu.js';
import EndMenu from './../objects/EndMenu.js';
import Collider from "../Collider/Collider.js"
import HelpInfo from '../objects/HelpInfo.js';
import Camera from '../objects/Camera';
import Tweet from '../objects/Tweets/';
import modalShow from '../modal/';
import levels from '../levels';
import CirclePool from '../objects/CirclePool';

//import Debuger from '../debug.js';


import levelObjects, {reset as levelObjectReset} from "../levelObjects.js"

import {
    FIELD_OFFSET,
    END_GAME_PLAYER_KILLED,
    END_GAME_TIME_OUT,
    END_GAME_PROTEST_RATE,
    END_GAME_WIN,
    COP_MODE_WANDER,
    COP_MODE_PURSUE,
    COP_MODE_CONVOY,
    COP_MODE_ENTER,
    SWAT_MODE_HIDE,
    SWAT_MODE_HUNT,
    SHIELD_MODE_DRIVE,
    PROTESTER_MODE_ARRESTED,
    JOURNALIST_MODE_SHOOTING,
    JOURNALIST_MODE_WANDER,
    PLAYER_MODE_FIGHT,
    PLAYER_MODE_STUN,
    PROTESTER_MODE_FOLLOW
} from '../constants.js';

import {
    getFormattedTime,
    lineIntersection
} from '../utils.js';
import {
    COP_MODE_FIGHT, COP_MODE_STUN, JOURNALIST_MODE_ARRESTED, JOURNALIST_MODE_FOLLOW, PROTESTER_MODE_NOD,
    PROTESTER_MODE_WANDER
} from "../constants";
import ManuallyBehavior from "../objects/Tweets/ManuallyBehavior";


class Game {
    init(level) {
        // FIXME: debug
        window.game = this

        this.mz = {
            level,
            garbageLevel: 0,
            gameEnded: false,
            screenAttacked: false,
            score: 0,
            timePassed: 0, // s
            protesters: {
                alive: 0,
                arrested: 0,
                revived: 0,
                left: 0,
                toRevive: level.protesters.count.start,
                meanMood: level.protesters.mood
            },
            cops: {
                alive: 0
            },
            postersToRevive: [],
            events: {
                keys: {},
                fieldClickHandler: null,
            },
            timers: {
                swat: null,
                screen: null,
                resize: null,
                fight: null,
                twits: null,
                gameTime: null
            },
            objects: {
                star: null,
                player: null,
                swat: null,
                shield: null,
                bgTile: null,
                garbage_01: null,
                garbage_02: null,
                garbage_03: null,
                interface: null,
                audio: {},
                pauseMenu: null,
                endMenu: null,
                screenAttack: null,
                mask: null,
                fightAdvice: null
            },
            arrays: {
                protesters: [],
                cops: [],
                press: [],
                borders: [],
                droppedPosters: [],
                wagons: [],
                enterWagons: [],
                awaitWagons: [],
                leftWagons: [],
            },
            groups: {
                d: null,
                cars: null,
                droppedPosters: null,
                copsFOV: null,
                pressFOV: null,
                playerFOV: null,
                npcProtesters: null,
                levelObjects: null,
                player: null,
                circles: null
            },
            zoomLevel: -1,
            advices: {
                move: null,
                space: null,
                shift: null,
                agitate: null,
                press: null,
                arrest: null,
                fight: null,
                people: null,
                omon: null,
                star: null,
                nod: null,
                cops: null
            },
            showedAdvice: {
                move: false,
                arrest: false,
                nod: false,
                omon: false,
                shift: false,
                cops: false
            },
            circles: {
                npc: null,
                cop: null,
                press: null
            },
            tweet: null,
            limitScore: level.scoreWin,
            starScore: level.star.score,
            pressScore: level.press.score,
            pressJailed: false,
            musicStage: 'start'
        };
        this.mz.score = 0;
    }

    create() {
       // this.debuger = new Debuger(this.game);
        this.collider = new Collider({ game: this.game, gameObject: this, scale: 20 })
        this.mz.tweet = new Tweet(this.game);
        this.mz.pressJailed = false;
        this.mz.tweet.resetShowedTweets();
        this.mz.score = 0;
        // this.game.time.advancedTiming = true;

        this.game.stage.backgroundColor = '#ccc';
        // this.game.sound.mute = true;

        this.game.world.resize(this.mz.level.worldWidth, this.mz.level.worldHeight);

        this.mz.objects.bgTile = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'meeting_map');
        this.mz.objects.bgTile.fixedToCamera = true;

        this.mz.objects.garbage_01 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'garbage_01');
        this.mz.objects.garbage_02 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'garbage_02');
        this.mz.objects.garbage_03 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'garbage_03');
        this.mz.objects.garbage_01.visible = false;
        this.mz.objects.garbage_02.visible = false;
        this.mz.objects.garbage_03.visible = false;

        this.mz.objects.audio.theme = this.game.add.audio('bp_loop');
        this.mz.objects.audio.theme.loopFull(0.001);
        this.game.add.tween(this.mz.objects.audio.theme).to({volume:0.15}, 20000).start();

        this.mz.objects.audio.audioPunch = [
            this.game.add.audio('punch01'),
            this.game.add.audio('punch02')
        ];
        this.mz.objects.audio.random = [
            this.game.add.audio('croud')
        ];
        this.mz.objects.audio.applause = this.game.add.audio('applause');
        this.mz.objects.audio.boo = this.game.add.audio('boo');
        this.mz.objects.audio.pick = this.game.add.audio('pick');
        this.mz.objects.audio.meeting = this.game.add.audio('meeting_sound');
        // this.mz.objects.audio.song = this.game.add.audio('bp_song');




        // FOVs should always be below everything
        this.mz.groups.playerFOV = this.game.add.group();
        this.mz.groups.pressFOV = this.game.add.group();
        this.mz.groups.copsFOV = this.game.add.group();
        this.mz.groups.levelObjects = this.game.add.group();

        this.mz.groups.droppedPosters = this.game.add.group();

        this.mz.groups.cars = this.game.add.group();
        // cars
        // for (let i = 0; i < this.game.world.width; i += 300) {
        //     const autoSprite = this.game.add.sprite(i, 120, 'auto');
        //     autoSprite.anchor.set(0, 1);
        //     this.mz.groups.cars.add(autoSprite);
        // }

        this.mz.groups.d = this.game.add.group();
        this.mz.groups.player = this.game.add.group();
        this.mz.groups.npcProtesters = this.game.add.group();

        this.mz.levelObjects = {}


        // this.mz.groups.d.add(this.mz.objects.star);
        // player
        this.mz.objects.player = this.createPrefab(Player, {
            x: this.game.world.centerX,
            y: this.game.world.centerY,
            fovGroup: this.mz.groups.playerFOV,
            ...this.mz.level.player,
            onDropPoster: this.handleDropPoster.bind(this)
        });
        // this.mz.groups.player.add(this.mz.objects.player);

        // this.collider.addEntity({ object: this.mz.objects.player, sprite: this.mz.objects.player.sprite })
        this.game.camera.follow(this.mz.objects.player.sprite);

        this.mz.groups.d.add(this.mz.objects.player.sprite);

        // top borders
        // for (let i = 0; i < this.game.world.width; i += 100) {
        //     const offset = Math.max(0, 50 - this.mz.objects.player.sprite.height);
        //     const borderTop = this.game.add.sprite(i, FIELD_OFFSET.top - 25, 'border', 0, this.mz.groups.d);
        //     borderTop.anchor.set(0, 0.5);
        //     this.game.physics.arcade.enable(borderTop);
        //     borderTop.body.setSize(borderTop.width, offset);
        //     borderTop.body.immovable = true;
        //     this.mz.arrays.borders.push(borderTop);
        // }

        // cops
        this.createCops();

        this.mz.timers.screen = this.game.time.create(false);
        this.mz.timers.resize = this.game.time.create(false);
        this.mz.timers.fight = this.game.time.create(false);
        this.mz.timers.twits = this.game.time.create(false);
        this.mz.timers.twits = this.game.time.create(false);
        if (this.mz.timers.gameTime)
        {
            this.mz.timers.gameTime.destroy();
        }
        this.mz.timers.gameTime = this.game.time.create(false);
        this.mz.timers.gameTime.start();
        this.mz.timers.twits.loop(1000 * 60, () => {
            if (Math.random() < 0.5)
                this.mz.tweet.rTweet({type: 'description'}, {visible: 5000, fadeIn: 500, fadeOut: 500})
        });
        this.mz.timers.twits.start();

        // swat
        if (this.mz.level.swat) {
            this.mz.objects.swat = new SWATSquad({
                gameObject: this,
                game: this.game,
                ...this.mz.level.swat,
                group: this.mz.groups.d
            });
            this.mz.timers.swat = this.game.time.create(false);
        }

        // shield
        // this.mz.objects.shield = new Shield({
        //     game: this.game,
        //     speed: {
        //         value: 300
        //     }
        // });

        // press
        this.onFinishShooting = this.handleFinishShooting.bind(this);
        const pressRequired = this.getPressRequiredNumber();
        for (let i = this.mz.arrays.press.length; i < pressRequired; i++) {
            const isFirst = i === 0;
            const coords = isFirst
                ?
                {
                    x: this.mz.objects.player.sprite.x + 20,
                    y: this.mz.objects.player.sprite.y - 50
                }
                :
                this.getRandomCoordinates();
            const journalist = this.createPrefab(Journalist, {
                ...coords,
                fov: {
                    group: this.mz.groups.pressFOV,
                    distance: this.mz.level.press.fov.distance,
                    angle: this.mz.level.press.fov.angle
                },
                speed: this.mz.level.press.speed,
                shootingDuration: this.mz.level.press.duration,
                cooldownDuration: this.mz.level.press.duration * pressRequired * 2,
                onFinishShooting: this.onFinishShooting,
                atlasKey:'ALL_IMAGES', 
                spriteName: `journalist${i}`, 
            });
            this.mz.arrays.press.push(journalist.sprite);
            this.mz.groups.d.add(journalist.sprite);
            journalist.setMode(JOURNALIST_MODE_WANDER);
        }


        // protesters
        this.createProtesters();

        // interface
        this.mz.objects.interface = new GameInterface({
            game: this.game,
            onTogglePoster: () => {
                this.mz.objects.player.togglePoster();
            }
        });
        // this.updateScore();


        // bottom borders
        // for (let i = 0; i < this.game.world.width; i += 100) {
        //     const offset = Math.max(0, 50 - this.mz.objects.player.sprite.height);
        //     const borderBottom = this.game.add.sprite(i, this.game.world.height - 25, 'border', 0, this.mz.groups.d);
        //     borderBottom.anchor.set(0, 0.5);
        //     this.game.physics.arcade.enable(borderBottom);
        //     borderBottom.body.setSize(borderBottom.width, offset, 0, borderBottom.height - offset);
        //     borderBottom.body.immovable = true;
        //     this.mz.arrays.borders.push(borderBottom);
        // }

        this.mz.objects.timer = this.game.time.create();
        this.mz.objects.timer.loop(Phaser.Timer.SECOND, this.updateTimer, this);
        this.mz.objects.timer.start();

        // pause menu
        this.mz.objects.pauseMenu = new PauseMenu({ game: this.game });

        // events

        // click on field
        const fieldClickHandler = this.game.add.sprite(0, 0);
        fieldClickHandler.fixedToCamera = true;
        fieldClickHandler.scale.set(this.game.width, this.game.height);
        fieldClickHandler.inputEnabled = true;
        fieldClickHandler.input.priorityID = 1;
        fieldClickHandler.events.onInputDown.add(this.handleTap, this);
        this.mz.events.fieldClickHandler = fieldClickHandler;

        // pause
        this.game.onPause.add(this.handlePause, this);
        this.game.onResume.add(this.handlePause, this);
        this.game.input.onDown.add(this.handleUnpause, this);

        this.mz.events.keys.esc = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
        // this.game.camera.width = 600;
        // this.game.camera.height = 300;
        // this.game.camera.scale.x = 2;
        // this.game.camera.scale.y = 2;

        this.game.camera.setBoundsToWorld();
        this.customCamera = new Camera(this.game.camera, this.game);
        HelpInfo.setGame(this.game);
        this.mz.advices.move = this.mz.tweet.tweet(
            Phaser.Device.desktop ? 'Передвигайтесь по улице с помощью стрелочек' : 'Коснитесь экрана, чтобы передвигаться по улице',
            'help',
            {behavior: ManuallyBehavior}
        );
        this.mz.advices.space = this.mz.tweet.tweet(
            Phaser.Device.desktop
                ?
                'Нажмите ПРОБЕЛ, чтобы начать агитацию/перестать агитировать'
                :
                'Нажмите на значок справа внизу экрана, чтобы начать/закончить агитацию',
            'help',
            {behavior: ManuallyBehavior}
        );
        this.mz.advices.agitate = this.mz.tweet.tweet(
            'Проводите агитацию рядом с человеком без плаката, чтобы он присоединился к вам',
            'help',
            {behavior: ManuallyBehavior}
        );
/*
        let _that = this;
        window.gen100Tweets = function () {
            for(var j = 0; j < 100; j++){
              let tw = _that.mz.tweet.tweet(
                    'Проводите агитацию рядом с человеком без плаката, чтобы он присоединился к вам',
                    'help',
                    {behavior: ManuallyBehavior}
                );
              tw.show();
              setTimeout(() => {
                  tw.hide();
              }, 3000);
            }
        }        
  */  

        // this.mz.advices.shift = this.mz.tweet.tweet(
        //     'Чтобы бегать нажмите shift',
        //     'tw_help',
        //     {behavior: ManuallyBehavior}
        // );


        levelObjectReset();
        // setTimeout(this.screenAttack.bind(this), 200);

        if (!this.circleGraphic)
            this.circleGraphic = this.game.add.graphics();

        this.mz.groups.circles = this.game.add.group();

        this.mz.objects.fightAdvice = this.game.add.sprite(this.game.width/2, this.game.height/2-50, 'defend');
        this.mz.objects.fightAdvice.anchor.setTo(0.5, 1);
        this.mz.objects.fightAdvice.fixedToCamera = true;
        this.mz.objects.fightAdvice.visible = false;

        //var processingGraphic = this.game.add.graphics();
        var ratio = window.devicePixelRatio || 1;

        this.mz.circles.press = {tex:"dot", color:0xf7c169 };//processingGraphic.clear().beginFill(0xf7c169, 0.7).drawCircle(10, 10, 20).endFill().generateTexture(ratio);
        this.mz.circles.npc = {tex:"dot", color:0x6eed83 }; //processingGraphic.clear().beginFill(0x6eed83, 0.7).drawCircle(10, 10, 20).endFill().generateTexture(ratio);
        this.mz.circles.cop = {tex:"dot", color:0x2b3992 };//processingGraphic.clear().beginFill(0x2b3992, 0.7).drawCircle(10, 10, 20).endFill().generateTexture(ratio);
        this.circlePool = new CirclePool(this.game);

    }

    update() {
        //this.debuger.update(); // update debuger, for reset counter
        const now = Date.now();

        this.updateGarbage();
        // this.mz.pressJailed = false;
        // update background
        this.mz.objects.bgTile.tilePosition.set(-this.game.camera.x, -this.game.camera.y);

        if (!this.mz.objects.star && this.mz.starScore <= this.mz.score)
        {
            this.createStar();
        }

        this.createLevelObjects();


        this.collider.update()

        if (!this.mz.gameEnded) {
            this.playRandomSound();
        }

        // update player
        this.mz.objects.player.update();

        // update protesters
        const lastTickMeanMood = this.mz.protesters.meanMood;

        this.mz.protesters.meanMood = 0;
        this.mz.protesters.alive = 0;
        const posterProtesters = [];

        if (this.mz.objects.player.showPoster)
        {
            posterProtesters.push(this.mz.objects.player.sprite);
        }
        const worldBounds = this.game.world.bounds;
        for (let i = 0; i < this.mz.arrays.protesters.length; i++) {
            const sprite = this.mz.arrays.protesters[i];
            if (!sprite.alive)
            {
                if (this.mz.protesters.toRevive !== 0) {
                    const mood = Math.min(this.game.math.clamp(
                        lastTickMeanMood,
                        this.mz.level.protesters.mood,
                        (this.mz.level.winningThreshold - 1) / 100
                    ), 0.6);
                    this.reviveProtester({
                        sprite,
                        mood,
                        isFirst: this.mz.protesters.alive === 0
                    });
                    this.mz.protesters.alive++;
                    this.mz.protesters.meanMood += mood;
                }
            }
            else
            {
                sprite.mz.update();

                let closeToPoster = false;
                for (const protesterSprite of posterProtesters)
                {
                    if (
                        this.getDistanceSq(sprite, protesterSprite) <= this.mz.objects.player.radius.actualSq
                    )
                    {
                        closeToPoster = true;
                        break;
                    }
                }
                sprite.mz.toggleCheering(
                    !this.mz.gameEnded
                    &&
                    closeToPoster
                    &&
                    worldBounds.contains(sprite.x, sprite.y)
                );

                this.mz.protesters.alive++;
                this.mz.protesters.meanMood += sprite.mz.mood;
            }
        }

        this.mz.protesters.toRevive = 0;

        this.mz.protesters.meanMood = this.mz.protesters.alive !== 0 ?
            this.mz.protesters.meanMood / this.mz.protesters.alive :
            0;
        // this.mz.score = 100 * this.game.math.clamp(
        //     100 * (
        //         0.5 * this.mz.protesters.alive / this.mz.level.protesters.count.max +
        //         0.5 * this.mz.protesters.meanMood
        //     ) / this.mz.level.winningThreshold,
        //     0,
        //     1
        // );

        // update interface
        if (!this.mz.gameEnded) {
            this.mz.objects.interface.update({
                score: this.mz.score,
                protestersAlive: this.mz.protesters.alive,
                protestersTotal: this.mz.level.protesters.count.max,
                meanMood: this.mz.protesters.meanMood,
                percent: this.mz.score/this.mz.limitScore,
                showPoster: Player.instance.showPoster
            });
        }

        // update journalists
        //this.mz.arrays.press.forEach(journalistSprite => {
        let jcount = this.mz.arrays.press.length;
        for(let j = 0; j < jcount; j++){
            
            let journalistSprite = this.mz.arrays.press[j];
            const journalist = journalistSprite.mz;
            if (journalist.mode === JOURNALIST_MODE_ARRESTED)
            {
                return;
            }
            if (journalistSprite.alive)
            {
                let newTarget = null;

                if (
                    !this.mz.gameEnded &&
                    journalist.FOV.isActive &&
                    this.mz.objects.player.showPoster &&
                    journalist.FOV.containsPoint(this.mz.objects.player.sprite.body.center)
                ) {
                    newTarget = this.mz.objects.player.sprite;
                }

                if (this.mz.score >= this.mz.pressScore && !this.mz.pressJailed)
                {
                    const protesterBounds = journalistSprite.getBounds();

                    // vs cops
                    for (let j = 0; j < this.mz.arrays.cops.length; j++) {
                        const copSprite = this.mz.arrays.cops[j];
                        if (
                            !copSprite.alive ||
                            copSprite.mz.target !== journalistSprite ||
                            !Phaser.Rectangle.intersects(protesterBounds, copSprite.getBounds()) ||
                            copSprite.mz.mode === COP_MODE_STUN ||
                            copSprite.mz.mode === COP_MODE_FIGHT ||
                            copSprite.mz.mode === COP_MODE_CONVOY
                        ) {
                            continue;
                        }

                        this.proceedToJail(journalistSprite, copSprite);
                        journalist.FOV.kill();
                        this.mz.pressJailed = true;
                        return;
                    }
                }

                if (newTarget) {
                    journalist.setMode(JOURNALIST_MODE_SHOOTING, { target: newTarget });
                } else if (journalist.mode !== JOURNALIST_MODE_WANDER && journalist.mode !== JOURNALIST_MODE_FOLLOW) {
                    journalist.setMode(JOURNALIST_MODE_WANDER);
                }

                journalist.update();
            }

        }//);

        // update swat
        if (this.mz.objects.swat) {
            if (
                (this.mz.score >= this.mz.level.swat.scoreThreshold || this.mz.gameEnded) &&
                this.mz.objects.swat.mode === SWAT_MODE_HIDE &&
                !this.mz.timers.swat.running
            ) {
                this.mz.timers.swat.add(this.mz.level.swat.frequency, this.launchSWAT, this);
                this.mz.timers.swat.start();
            } else if (
                this.mz.timers.swat.running &&
                this.mz.score < this.mz.level.swat.scoreThreshold
            ) {
                this.mz.timers.swat.stop(true);
            }
            this.mz.objects.swat.update();
        }



        // update shield
        // this.mz.objects.shield.update();

        // update cops
        const copsRequired = this.getCopsRequiredNumber();
        if (this.mz.cops.alive < this.mz.arrays.cops.length && this.mz.arrays.wagons.length) {
            // revive if necessary

            if (copsRequired > this.mz.cops.alive) {
                if (!this.mz.showedAdvice.cops)
                {
                    this.mz.showedAdvice.cops = true;
                    this.mz.tweet.tweet(
                        'Во время агитации остерегайтесь сотрудников полиции, опустите плакат до того, как они вас заметят',
                        'help',
                        {visible: 5000, fadeIn: 500, fadeOut: 500}
                    );
                }
                this.reviveCops(copsRequired - this.mz.cops.alive);
                this.mz.cops.alive = copsRequired;
            }
        }

        // if (copsRequired > this.mz.cops.alive && this.mz.arrays.wagons.length === 0 && this.mz.arrays.enterWagons.length === 0 )
        // {
        //     this.handleEnterWagon(this.mz.arrays.awaitWagons[0], 300, 0)
        // }

        this.handleEnteringWagons();
        this.handleLeavingWagons();

        const pressRequired = this.getPressRequiredNumber();
        for (let i = this.mz.arrays.press.length; i < pressRequired; i++) {
            const isFirst = i === 0;
            const coords = isFirst
                ?
                {
                    x: this.mz.objects.player.sprite.x + 20,
                    y: this.mz.objects.player.sprite.y - 20
                }
                :
                this.getRandomCoordinates();
            console.log('press first', isFirst, coords);

            const journalist = this.createPrefab(Journalist, {
                ...coords,
                fov: {
                    group: this.mz.groups.pressFOV,
                    distance: this.mz.level.press.fov.distance,
                    angle: this.mz.level.press.fov.angle
                },
                speed: this.mz.level.press.speed,
                shootingDuration: this.mz.level.press.duration,
                cooldownDuration: this.mz.level.press.duration * pressRequired * 2,
                onFinishShooting: this.onFinishShooting,
                atlasKey: "ALL_IMAGES",
                spriteName: `journalist${i}`
            });

            this.mz.arrays.press.push(journalist.sprite);
            this.mz.groups.d.add(journalist.sprite);
            journalist.setMode(JOURNALIST_MODE_WANDER);
        }

        // нужно переписать это место. Я ХЗ как, не хочу ломать, что бы без аллокаций
        //const protesterTargets = this.mz.arrays.protesters.filter(x => x.mz.showPoster).concat(
        let protesterTargets = this.mz.arrays.protesters;
        
        if(this.mz.score >= this.mz.pressScore && !this.mz.pressJailed){
            protesterTargets = protesterTargets.concat(this.mz.arrays.press);
        }

        const lastCopDecisionTimeout = 200;
        let attractionStrength = 0;

        if (this.mz.objects.player.showPoster) {
            attractionStrength = 0.2;
            for (let p =0; p < this.mz.arrays.press; p++)
            {
                if (this.mz.arrays.press[p].mz.mode === JOURNALIST_MODE_SHOOTING)
                {
                    attractionStrength += 0.4;
                }
            }
            protesterTargets.push(this.mz.objects.player.sprite);
        }

        const copAttr = Math.min(1, attractionStrength * this.mz.objects.player.power);
        for (let i = 0; i < this.mz.cops.alive; i++) {
            const copSprite = this.mz.arrays.cops[i];
            const cop = copSprite.mz;

            if (
                cop.mode === COP_MODE_CONVOY
                && this.mz.objects.player.mode !== PLAYER_MODE_FIGHT
                && this.mz.objects.player.mode !== PLAYER_MODE_STUN
                && this.mz.objects.player.mode !== PROTESTER_MODE_ARRESTED
            ) {
                const playerCenter = this.mz.objects.player.sprite.body.center;
                const diffCop = Math.abs(copSprite.body.center.x - playerCenter.x)+Math.abs(copSprite.body.center.y - playerCenter.y);
                if (diffCop < 40)
                {
                    this.mz.objects.player.setMode(PLAYER_MODE_FIGHT, {target: copSprite});
                    cop.setMode(COP_MODE_FIGHT);
                }
            }


            if (
                cop.mode !== COP_MODE_CONVOY
                &&
                cop.mode !== COP_MODE_ENTER
                &&
                cop.mode !== COP_MODE_FIGHT
                &&
                cop.mode !== COP_MODE_STUN
                &&
                cop.lastDecisionTime < now
            )
            {
                cop.lastDecisionTime = now + lastCopDecisionTimeout + Math.random()*50;
                // set attraction point and strength
                cop.attractionPoint = { ...this.mz.objects.player.sprite.body.center };

                cop.attractionStrength = copAttr;

                // find target for a cop
                let newTarget = null;
                let distanceToTargetSq = Infinity;

                for (let i = 0; i < protesterTargets.length; i++) {
                    const protester = protesterTargets[i].mz;

                    if (!protester.showPoster ||
                        !protester.sprite.alive ||
                        !cop.FOV.containsPoint(protester.sprite.body.center)
                    ) {
                        continue;
                    }

                    let distanceToProtesterSq = this.getDistanceSq(copSprite.body.center, protester.sprite.body.center);
                    // give higher priority to current target
                    if (protester.sprite === cop.target) {
                        distanceToProtesterSq *= 3 / 4;
                    }
                    if (distanceToProtesterSq < distanceToTargetSq) {
                        newTarget = protester.sprite;
                        distanceToTargetSq = distanceToProtesterSq;
                    }
                    //console.log('new target', newTarget);
                }



                if (cop.target && cop.target.mz.mode !== PROTESTER_MODE_ARRESTED && cop.FOV.containsPoint(cop.target.body.center))
                {
                    let distanceToProtesterSq = this.getDistanceSq(copSprite.body.center, cop.target.body.center) * 3 / 4;;
                    if (distanceToProtesterSq < distanceToTargetSq) {
                        newTarget = cop.target;
                    }
                }
                if (newTarget) {
                    // if theres a target in a view, pursue him
                    cop.setMode(COP_MODE_PURSUE, { target: newTarget });
                } else if (cop.mode !== COP_MODE_WANDER) {
                    // else wander around, if not yet
                    cop.setMode(COP_MODE_WANDER);
                }
            }

            cop.update();
        }

        //охеренно, что... и как это не даст релок?
        // protesters collision
        let allProtesters = [...this.mz.arrays.protesters, this.mz.objects.player.sprite]
        if(this.mz.objects.star) allProtesters.push(this.mz.objects.star.sprite)


        this.swatFrame = (this.swatFrame || 0) +1;

        for (let j = 0; j < allProtesters.length; j++){

            let protesterSprite = allProtesters[j];
            if (
                !protesterSprite.alive ||
                protesterSprite.mz.mode === PROTESTER_MODE_ARRESTED
            ) {
                continue;
            }

            const protesterBounds = protesterSprite.getBounds();

            // vs swat
            if (this.mz.objects.swat) {
                let j = this.swatFrame % this.mz.objects.swat.sprites.length;
                const swatSprite = this.mz.objects.swat.sprites[j];
                if (
                    swatSprite.children.length !== 0 ||
                    swatSprite.x <= 0 ||
                    swatSprite.x >= this.game.world.width ||
                    !Phaser.Rectangle.intersects(protesterBounds, swatSprite.getBounds())
                ) {
                    continue;
                }
                this.arrest(protesterSprite, swatSprite);
            }
        }

        // player collisions
        if (
            this.mz.objects.player.mode !== PROTESTER_MODE_ARRESTED &&
            !this.mz.gameEnded
        )
        {
            // vs posters
            for (let i = 0; i < this.mz.arrays.droppedPosters.length; i++) {
                const droppedPoster = this.mz.arrays.droppedPosters[i];
                if (!droppedPoster.sprite.alive) {
                    continue;
                }
                if (
                    Phaser.Rectangle.intersects(droppedPoster.sprite.getBounds(), this.mz.objects.player.sprite.getBounds())
                ) {
                    this.mz.objects.audio.pick.play('', 0, 0.25);
                    // this.mz.objects.player.powerUp();
                    droppedPoster.kill();
                }
            }
        }

        // player vs borders collision
        // this.game.physics.arcade.collide(
        //     this.mz.objects.player.sprite,
        //     this.mz.arrays.borders
        // );
        const checkFollowPlayer = (sprite) => !(
            sprite && sprite.mz && sprite.mz.mode && sprite.mz.mode === PROTESTER_MODE_FOLLOW &&
            sprite.mz.following && sprite.mz.following.target === this.mz.objects.player.sprite
        );

        const pursueTarget = (mode, isArrest) => (copSprite, protesterSprite) => {
            const isTarget = (
                copSprite.mz.target === protesterSprite && copSprite.mz.mode === mode
            );
            if (isArrest && isTarget)
            {
                if (
                    !copSprite.alive ||
                    protesterSprite.mz.mode === PLAYER_MODE_FIGHT ||
                    copSprite.mz.mode === COP_MODE_STUN ||
                    copSprite.mz.mode === COP_MODE_FIGHT ||
                    copSprite.mz.mode === COP_MODE_CONVOY
                ) {
                    return false;
                }
                this.proceedToJail(protesterSprite, copSprite);
            }
            return !isTarget;
        };

        this.game.physics.arcade.collide(
            this.mz.objects.player.sprite,
            this.mz.arrays.protesters,
            null,
            (sprite1, sprite2) => pursueTarget(PROTESTER_MODE_NOD)(sprite2, sprite1) && (checkFollowPlayer(sprite1) && checkFollowPlayer(sprite2))
        );
        // this.game.physics.arcade.collide(
        //     this.mz.objects.player.sprite,
        //     this.mz.arrays.cops
        // );
        // player vs borders collision
        // this.game.physics.arcade.collide(
        //     this.mz.arrays.protesters,
        //     this.mz.arrays.borders
        // );
        // this.game.physics.arcade.collide(
        //     this.mz.arrays.protesters,
        //     this.mz.arrays.cops
        // );
        // this.game.physics.arcade.collide(
        //     this.mz.objects.swat.sprites,
        //     this.mz.objects.swat.sprites
        // );
        this.game.physics.arcade.collide(
          this.mz.levelObjects.paddyWagon,
          this.mz.objects.player.sprite
        );
        this.game.physics.arcade.collide(
            this.mz.levelObjects.paddyWagon,
            this.mz.arrays.protesters,
            (wagon, protester) => {
                const moveEntity = this.collider.getEntityBySprite(protester);
                const targets = moveEntity.move;
                if (targets.length)
                {
                    const moveEntry = targets[0];
                    const target = moveEntry.target;
                    if (moveEntry.phasing && this.checkContainWagon(target))
                    {
                        protester.mz.moveTo(null);
                        if (protester.mz.mode === PROTESTER_MODE_WANDER)
                            protester.mz.wander();
                    }
                    else
                    {
                        let xSide =  null;
                        if (protester.x > wagon.body.x + wagon.body.width)
                        {
                            xSide = 'right';
                        }
                        else {
                            if (protester.x < wagon.body.x)
                            {
                                xSide = 'left';
                            }
                        }
                        let ySide = null;
                        if (protester.y > wagon.body.y + wagon.body.height)
                        {
                            ySide = 'bottom';
                        }
                        else
                        {
                            if (protester.y < wagon.body.y)
                            {
                                ySide = 'top';
                            }
                        }
                        const distanceMove = 30;
                        switch(true)
                        {
                            // case !!(xSide && ySide): {
                            //     alert('who knows :(');
                            //     break;
                            // }
                            case !!(xSide): {
                                const goTop = !!Math.round(Math.random());
                                const x = protester.x + Math.sign(protester.x - wagon.body.x) * distanceMove;
                                const y =  goTop ? wagon.body.y - distanceMove : wagon.body.y + wagon.body.height + distanceMove;
                                protester.mz.moveTo({x, y}, {prepend: true, phasing: true, reset: false});

                                break;
                            }
                            case !!(ySide): {
                                const goLeft = !!Math.round(Math.random());
                                const y = protester.y + Math.sign(protester.y - wagon.body.y) * distanceMove;
                                const x =  goLeft ? wagon.body.x - distanceMove : wagon.body.x + wagon.body.width + distanceMove;
                                protester.mz.moveTo({x, y}, {prepend: true, phasing: true, reset: false});
                                break;
                            }
                            default:
                                //console.log(xSide, ySide);
                        }
                    }
                }

            }
        );


        if (this.mz.objects.star)
        {
            this.game.physics.arcade.collide(
                this.mz.objects.player.sprite,
                this.mz.objects.star.sprite
            );
            // this.game.physics.arcade.collide(
            //     this.mz.levelObjects.paddyWagon,
            //     this.mz.objects.star.sprite
            // );
        }
        this.game.physics.arcade.collide(
            this.mz.arrays.cops,
            this.mz.arrays.protesters,
            null,
            pursueTarget(COP_MODE_PURSUE, true)
        );

        const handlePlayerPursue = pursueTarget(COP_MODE_PURSUE, true);

        this.game.physics.arcade.collide(
            this.mz.arrays.cops,
            this.mz.objects.player.sprite,
            null,
            (cop, player) => (handlePlayerPursue(cop, player) && false)
        );

        // update posters
        //this.mz.arrays.droppedPosters.forEach(droppedPoster => {
        let dpcount = this.mz.arrays.droppedPosters;
        for(var i = 0; i < dpcount; i++){

            if (this.mz.arrays.droppedPosters[i].sprite.alive) {
                this.mz.arrays.droppedPosters[i].update();
            }
        }//);

        this.mz.postersToRevive.forEach(this.createPoster, this);
        this.mz.postersToRevive = [];

        //TODO - remove this
        this.mz.groups.d.sort('y', Phaser.Group.SORT_ASCENDING);

        if (!this.mz.gameEnded) {
            this.checkWin();
        }

        // events
        if (this.mz.events.keys.esc.justUp) {
            this.game.paused = !this.game.paused;
        }

        this.mz.objects.star && this.mz.objects.star.update()


        if (this.mz.screenAttacked)
        {
            //
            this.mz.objects.screenAttack
                .clear()
                .beginFill(0x67c079, 0.95)
                .moveTo(0, 0)
                .arc(this.mz.objects.player.sprite.x, this.mz.objects.player.sprite.y, 50, 0, Math.PI*2)
                .lineTo(0,0)
                .lineTo(0, this.game.world.height)
                .lineTo(this.game.world.width, this.game.world.height)
                .lineTo(this.game.world.width, 0)
                .lineTo(0, 0)
                .endFill();
        }

        if (this.mz.protesters.alive >= 20 && this.mz.musicStage === 'start')
        {
            // this.GameObject.mz.objects.audio.theme.fadeOut(10000);
            this.mz.musicStage = 'crowd';
            this.mz.objects.audio.meeting.loopFull(0.01);
            this.game.add.tween(this.mz.objects.audio.meeting).to({volume:0.15}, 30000).start();
                // .fadeIn(20000);
        }

        if (!Phaser.Device.desktop)
        {
            this.updateCircle()
        }
    }

    render() {
        // this.game.debug.text(this.game.time.fps, 2, 14, "#00ff00");
        // this.game.debug.cameraInfo(this.game.camera, 32, 32);
        // this.game.debug.body(this.mz.objects.player.sprite);
        // this.game.debug.bodyInfo(this.mz.objects.player.sprite, 0, 100);

        // this.mz.arrays.borders.forEach(sprite => {
        //     this.game.debug.body(sprite);
        // });
        // this.mz.arrays.cops.forEach(sprite => {
        //     this.game.debug.body(sprite);
        // });
        // this.mz.arrays.protesters.forEach(sprite => {
        //     this.game.debug.body(sprite);
        // });
        // this.mz.arrays.press.forEachExists(sprite => {
        //     this.game.debug.body(sprite);
        // });
    }

    handleTap(sprite, pointer) {
        const coords = {
            x: pointer.x + this.game.camera.x,
            y: pointer.y + this.game.camera.y
        };

        const player = this.mz.objects.player;
        if (player.mode !== PLAYER_MODE_FIGHT && player.mode !== PLAYER_MODE_STUN)
        {
            if (this.mz.advices.move)
            {
                this.mz.advices.move.hide();
                this.mz.advices.move = null;
            }
            const angleDegree = player.sprite.position.angle(coords, true);
            player.direction = angleDegree;
            player.resetClickSpeed();

            player.moveTo(coords, { callback: () => player.resetClickSpeed(true), phasing: true });
        }
        if (player.mode === PLAYER_MODE_FIGHT)
        {
            player.fightBar += 1;
        }
    }

    handleProtesterLeft() {
        this.mz.protesters.left++;
    }

    handleDropPoster(coords) {
        // defer poster creation to the end of update method
        this.mz.postersToRevive.push(coords);
    }

    handleFinishShooting(journalist) {
        this.mz.protesters.toRevive += this.mz.level.protesters.count.add;
        this.increaseScore(10, journalist.sprite);
    }

    handlePause() {
        if (this.game.paused) {
            this.mz.objects.pauseMenu.revive();
        } else {
            this.mz.objects.pauseMenu.kill();
        }
    }

    handleUnpause() {
        if (this.game.paused) {
            if (this.mz.objects.pauseMenu.replayButton.getBounds().contains(this.game.input.x, this.game.input.y)) {
                this.game.paused = false;
            }
        }
    }

    updateScore() {
       // this.mz.objects.interface.updateScore(`${this.mz.score} / ${this.mz.limitScore}`);
    }

    updateTimer(){
        this.mz.timePassed++;
        this.mz.objects.interface.updateTimer(getFormattedTime(this.mz.timePassed));
    }

    createCops() {
        const totalCount = this.mz.level.cops.count[this.mz.level.cops.count.length - 1][1];
        this.mz.cops.alive = this.getCopsRequiredNumber();
        for (let i = 0; i < totalCount; i++) {
            let x, y;
            // if (i < this.mz.cops.alive) {
            //     const offset = 60;
            //     const wagon = this.pickRandomWagon();
            //     x = Math.round(wagon.body.center.x) + offset;
            //     y = wagon.y + wagon.body.height + 15;
            // } else {
            //     const randCoords = this.getRandomCoordinates();
            //     x = randCoords.x;
            //     y = randCoords.y;
            // }
            const cop = this.createPrefab(Cop, {
              x, y,
              alive: false,
              fov: {
                  group: this.mz.groups.copsFOV,
                  distance: this.mz.level.cops.fov.distance,
                  angle: this.mz.level.cops.fov.angle
              },
              speed: this.mz.level.cops.speed,
              atlasKey:'ALL_IMAGES',
              spriteKey:"cop",
              spriteName: `cop${i}`
            })

            this.mz.arrays.cops.push(cop.sprite);
            this.mz.groups.d.add(cop.sprite);

            // if (i < this.mz.cops.alive) {
            //     cop.setMode(COP_MODE_WANDER);
            // }
        }
    }

    reviveCops(count) {
        for (let i = 0; i < count; i++) {
            const index = i + this.mz.cops.alive;
            const copSprite = this.mz.arrays.cops[index];
            copSprite.mz.revive(Boolean(index % 2));
        }
    }

    getCopsRequiredNumber() {
        let result = 0;
        for (let i = 0; i < this.mz.level.cops.count.length; i++) {
            if (this.mz.score <= this.mz.level.cops.count[i][0]) {
                result = this.mz.level.cops.count[i][1];
                break;
            }
        }
        return result;
    }

    getPressRequiredNumber() {
        let result = 0;
        for (let i = 0; i < this.mz.level.press.count.length; i++) {
            if (this.mz.score <= this.mz.level.press.count[i][0]) {
                result = this.mz.level.press.count[i][1];
                break;
            }
        }
        return result;
    }

    createProtesters() {
        const count = this.mz.level.protesters.count.max;
        const onDropPoster = this.handleDropPoster.bind(this);
        const onLeft = this.handleProtesterLeft.bind(this);
        
        for (let i = 0; i < count; i++) {
            const coords = (i === 0) ? {x: this.game.world.centerX, y: this.game.world.centerY} : this.getRandomCoordinates();

            const protester = this.createPrefab(NPCProtester, {
                ...coords,
                group: this.mz.groups.d,
                speed: this.mz.level.protesters.speed,
                atlasKey: "ALL_IMAGES",
                spriteKey: 'npc_0' +(Math.floor(Math.random()*8)+1),
                spriteName: `protester${i}`,
                mood: this.mz.level.protesters.mood,
                moodUp: this.mz.level.protesters.moodUp,
                moodDown: this.mz.level.protesters.moodDown,
                dropPoster: this.mz.level.protesters.poster.drop,
                onLeft,
                onDropPoster,
            });
            this.mz.arrays.protesters.push(protester.sprite);
        }
    }

    randomOffscreenCoords() {
        const randomOffset = this.game.rnd.between(0, 100);

        return {
            x: this.game.rnd.between(0, 1) === 0 ?
                -100 - randomOffset :
                this.game.world.width + 100 + randomOffset,
            y: this.getRandomCoordinateY(),
        }
    }

    reviveProtester({ sprite, mood, isFirst }) {
        const coords = isFirst ? {x: this.game.world.centerX + 20, y: this.game.world.centerY + 20} :this.randomOffscreenCoords()
        sprite.mz.revive({
            ...coords,
            nextCoords: isFirst ? {x: this.game.world.centerX + 20, y: this.game.world.centerY + 20} : this.getRandomCoordinates(),
            mood,
            isFirst
        });

        this.mz.protesters.toRevive--;
        this.mz.protesters.revived++;
    }

    beatUpProtester(sprite) {
        sprite.body.enable = false;
        // sprite.mz.viewSprite.damage(0.1);
        this.playRandomPunch();
    }

    createPoster(coords) {
        let isRevived = false;
        for (let i = 0; i < this.mz.arrays.droppedPosters.length; i++) {
            const droppedPoster = this.mz.arrays.droppedPosters[i];
            if (!droppedPoster.sprite.alive) {
                droppedPoster.revive(coords);
                isRevived = true;
                break;
            }
        }
        if (!isRevived) {
            this.mz.arrays.droppedPosters.push(
                new DroppedPoster({
                    game: this.game,
                    group: this.mz.groups.droppedPosters,
                    ...coords,
                    alive: this.mz.level.protesters.poster.alive
                })
            );
        }
    }

    proceedToJail(protesterSprite, copSprite) {
        let closestCarCoords = null;
        let minDistanceSq = Infinity;

        //this.mz.arrays.wagons.forEach(carSprite => {
        let count = this.mz.arrays.wagons.length;
        var carSprite = null;
        for(let i = 0; i < count; i++) {

            carSprite = this.mz.arrays.wagons[i];
            
            const carCoords = {
                x: carSprite.body.x + (carSprite.body.width / 2) + carSprite.entagleX,
                y: carSprite.body.y + carSprite.body.height + carSprite.entagleY
            };
            const distanceToCarSq = this.getDistanceSq(copSprite, carCoords);
            if (distanceToCarSq < minDistanceSq) {
                closestCarCoords = carCoords;
                minDistanceSq = distanceToCarSq;
            }
        }//);

        this.arrest(protesterSprite, copSprite);
        copSprite.mz.setMode(COP_MODE_CONVOY, { jailCoords: closestCarCoords });
    }

    arrest(protesterSprite, copSprite) {
        this.beatUpProtester(protesterSprite);

        copSprite.addChild(protesterSprite);

        if (protesterSprite.name === 'player') {
            this.game.camera.follow(copSprite);
        }
        const x = protesterSprite.body.center.x - copSprite.body.center.x;
        const y = protesterSprite.body.center.y - copSprite.body.center.y;
        protesterSprite.mz.setMode(PROTESTER_MODE_ARRESTED, {
            x: Math.sign(x) * Math.min(Math.abs(x), 17),
            y: Math.sign(y) * Math.min(Math.abs(y), 17),
            by: copSprite.mz
        });

        if (protesterSprite.name !== 'player') {
            this.mz.protesters.arrested++;
        }
    }

    unarrest(copSprite){
        let protesterSprite = null;
        for (let j = 0; j < copSprite.children.length; j++) {
            if (copSprite.getChildAt(j) !== copSprite.mz.viewSprite && copSprite.getChildAt(j).mz) {
                protesterSprite = copSprite.getChildAt(j);
                break;
            }
        }
        const prevX = protesterSprite.x;
        const prevY = protesterSprite.y;

        copSprite.removeChild(protesterSprite);
        this.mz.groups.d.add(protesterSprite);
        // this.beatUpProtester(protesterSprite);

        // copSprite.removeChild(protesterSprite);

        if (protesterSprite.name === 'player') {
            this.game.camera.follow(copSprite);
        }

        if (protesterSprite.name !== 'player') {
            protesterSprite.mz.mood = 0.1;
            this.mz.protesters.arrested--;
            protesterSprite.mz.kill();
            protesterSprite.body.enable = true;
            const x = copSprite.x + prevX;
            const y = copSprite.y + prevY;
            protesterSprite.mz.revive({x, y, nextCoords: {x, y}});
            protesterSprite.visible = true;
            const slot = Player.instance.slots.take(this);
            if (slot) {
                protesterSprite.mz.setMode(PROTESTER_MODE_FOLLOW, {slot})
            }
            // protesterSprite.mz.setMode(PROTESTER_MODE_WANDER);
        }
    }

    launchSWAT() {
        if (!this.mz.showedAdvice.omon)
        {
            this.mz.showedAdvice.omon = true;
            this.mz.advices.omon = this.mz.tweet.tweet(
                'Будьте осторожны, ОМОН передвигается быстро и хватает всех без разбору.',
                'help',
                {visible: 5000, fadeIn: 500, fadeOut: 500}
            );
        }

        this.mz.timers.swat.stop(true);

        this.mz.objects.audio.boo.play();

        const direction = this.game.rnd.between(0, 1) === 0 ? 'ltor' : 'rtol';

        const start = {
          x: direction === 'ltor' ? - 100 : this.game.world.width + 100,
          y: this.getRandomCoordinateY(),
        };

        let targets = [];

        const rnd = Math.random()*5+2;

        const st = (direction === 'ltor' ? 100 : this.game.world.width - 100);
        const distance = (direction === 'ltor' ? 1 : -1) * (this.game.world.width / rnd);
        let foundStar = !(this.mz.objects.star && this.mz.objects.star.sprite.alive);
        const { x: starX, y: starY } = this.mz.objects.star.sprite.body.center;
        for (let i=0; i<rnd; i++)
        {
            const t= this.getRandomCoordinates({x: st + distance * i});
            if (!foundStar) {
                if (direction === 'ltor')
                {
                    if (t.x > starX)
                    {
                        targets.push({ x: starX, y: starY });
                        foundStar = true;
                    }
                }
                else
                {
                    if (t.x < starX)
                    {
                        targets.push({ x: starX, y: starY });
                        foundStar = true;
                    }
                }
            }
            targets.push(t);
        }





        // targets.push({
        //   x: direction === 'ltor' ? this.game.world.width + 100 : -100,
        //   y: this.getRandomCoordinateY(),
        // })

        console.log('target omon', targets);


        this.mz.objects.swat.setMode(SWAT_MODE_HUNT, { start, targets })
    }

    launchShield() {
        this.mz.objects.shield.setMode(SHIELD_MODE_DRIVE, {
            y: this.game.height / 2 + this.game.camera.y
        });
    }

    checkWin() {
        if (this.mz.protesters.alive <= 0) {
            this.endGame(END_GAME_PROTEST_RATE);
        } else if (this.mz.score >= this.mz.limitScore) {
            this.endGame(END_GAME_WIN);
        } else if (
            this.mz.objects.player.mode === PROTESTER_MODE_ARRESTED ||
            !this.mz.objects.player.sprite.alive
        ) {
            this.endGame(END_GAME_PLAYER_KILLED);
        }
    }

    endGame(mode) {
        this.mz.gameEnded = true;


        this.game.camera.unfollow();
        this.mz.objects.interface.kill();
        // this.mz.objects.timer.stop();
        this.mz.events.fieldClickHandler.kill();

        // pause
        this.game.onPause.removeAll();
        this.game.onResume.removeAll();

        // player
        this.mz.objects.player.freeze();

        this.game.input.keyboard.removeKey(Phaser.Keyboard.ESC);
        this.game.input.onDown.remove(this.handleUnpause, this);

        if (mode === END_GAME_WIN) {
            this.mz.objects.audio.applause.play('', 0, 0.25);
            this.mz.arrays.protesters.forEach(sprite => {
                sprite.mz.moodUp(1);
            });
            modalShow('success', this.mz.timers.gameTime.seconds, () => {
                this.mz.objects.audio.theme.stop();
                this.mz.objects.audio.meeting.stop();
                // this.mz.objects.audio.song.stop();
                this.game.state.start('Game', true, false, levels['level1'])

            });
        } else {

            this.mz.objects.audio.boo.play();
            switch (mode) {
                case END_GAME_PROTEST_RATE: {
                    // this.launchShield();
                    modalShow('desolation', 0,  () => {
                        this.mz.objects.audio.theme.stop();
                        this.mz.objects.audio.meeting.stop();
                        // this.mz.objects.audio.song.stop();
                        this.game.state.start('Game', true, false, levels['level1'])
                    });
                    break;
                }
                case END_GAME_PLAYER_KILLED: {
                    modalShow('arrested', 0,  () => {
                        this.mz.objects.audio.theme.stop();
                        this.mz.objects.audio.meeting.stop();
                        // this.mz.objects.audio.song.stop();
                        this.game.state.start('Game', true, false, levels['level1'])
                    });
                    break;
                }
            }
        }

    }

    playRandomSound() {
        if (this.game.rnd.between(0, 600 * (1 / this.mz.objects.audio.random.length)) === 0) {
            this.game.rnd.pick(this.mz.objects.audio.random).play('', 0, 0.25);
        }
    }

    playRandomPunch() {
        this.game.rnd.pick(this.mz.objects.audio.audioPunch).play('', 0, 0.25);
    }

    getDistanceSq(obj1, obj2) {
        return this.game.math.distanceSq(obj1.x, obj1.y, obj2.x, obj2.y);
    }

    checkContainWagon({x, y}, extraDistance = 40){
        if (this.mz.levelObjects.paddyWagon)
        {
            for (let w of this.mz.levelObjects.paddyWagon)
            {
                const startX = w.body.x - extraDistance;
                const endX = w.body.x + w.body.width + extraDistance;
                const startY = w.body.y - extraDistance;
                const endY = w.body.y + w.body.height + extraDistance;
                if (x > startX && x < endX && y > startY && y < endY)
                    return true;
            }
        }
        return false;
    }

    getRandomCoordinates({x, y} = {x: null, y: null}) {
        let coords = {
            x: x ? x : this.getRandomCoordinateX(),
            y: y ? y : this.getRandomCoordinateY()
        };

        while (this.checkContainWagon(coords)) {
            coords = {
                x: x ? x : this.getRandomCoordinateX(),
                y: y ? y : this.getRandomCoordinateY()
            };
        }
        return coords;
    }

    getRandomCoordinateX() {
        return this.game.math.clamp(
            this.game.world.randomX,
            FIELD_OFFSET.left,
            this.game.world.width - FIELD_OFFSET.right
        );
    }

    getRandomCoordinateY() {
        return this.game.math.clamp(
            this.game.world.randomY,
            FIELD_OFFSET.top,
            this.game.world.height - FIELD_OFFSET.bottom
        );
    }

    screenAttack(){
        const awaitStop = 5000;
        const alphaStops = 49;
        const alphaStep = awaitStop/(alphaStops+1);
        const spriteHeight = 1035;
        const spriteWidth = 1035;
        if (this.mz.screenAttacked)
        {
            this.mz.timers.screen.stop();
            this.mz.timers.screen.removeAll();
            this.mz.timers.screen.add(awaitStop, this.screenAttackStop, this);

            this.mz.timers.screen.start();
        }
        else
        {
            this.mz.screenAttacked = true;
            this.mz.objects.screenAttack = this.game.add.graphics(0, 0);
            this.mz.objects.screenAttack
                .clear()
                .beginFill(0x67c079, 0.95)
                .moveTo(0, 0)
                .arc(this.mz.objects.player.sprite.x, this.mz.objects.player.sprite.y, 50, 0, Math.PI*2)
                .lineTo(0,0)
                .lineTo(0, this.game.world.height)
                .lineTo(this.game.world.width, this.game.world.height)
                .lineTo(this.game.world.width, 0)
                .lineTo(0, 0)
                .endFill();

            this.mz.timers.screen.add(awaitStop, this.screenAttackStop, this);

            this.mz.timers.screen.start();
        }
    }

    screenAttackStop(){
        this.mz.objects.screenAttack.destroy();
        this.mz.objects.screenAttack = null;
        this.mz.screenAttacked = false;
    }

    screenAttackAlpha(){
        console.log('attack alpha');
        this.mz.objects.screenAttack.alpha -= 0.005;
    }

    createLevelObject(sprite, { personalMatrix } = {}) {
        this.collider.addEntity({ sprite: sprite, object: {sprite}, personalMatrix })
        return game
    }

    createPrefab(constructor, options, { personalMatrix } = {}) {
      const moveTo = this.collider.moveToFactory()
      const defaults = { game: this.game, GameObject: this, moveTo }
      const game = new constructor({ ...defaults, ...options })
      this.collider.addEntity({ sprite: game.sprite, object: game, personalMatrix })
      return game
    }

    cameraZoom(zoom, duration){
        game.camera.scale.x += zoomAmount;
        game.camera.scale.y += zoomAmount;

        game.camera.bounds.x = size.x * game.camera.scale.x;
        game.camera.bounds.y = size.y * game.camera.scale.y;
        game.camera.bounds.width = size.width * game.camera.scale.x;
        game.camera.bounds.height = size.height * game.camera.scale.y;
        // this.game.world.resize(this.game.world.width+10, this.game.world.height+10);
    }

    fightLose(){
        for (let i = 0; i < this.mz.cops.alive; i++) {
            const copSprite = this.mz.arrays.cops[i];
            const cop = copSprite.mz;
            if (cop.mode === COP_MODE_FIGHT)
            {
                let closestCarCoords = null;
                let minDistanceSq = Infinity;
                this.mz.arrays.wagons.forEach(carSprite => {
                    const carCoords = {
                        x: carSprite.body.x + (carSprite.body.width / 2) + carSprite.entagleX,
                        y: carSprite.body.y + carSprite.body.height + carSprite.entagleY
                    };
                    const distanceToCarSq = this.getDistanceSq(copSprite, carCoords);
                    if (distanceToCarSq < minDistanceSq) {
                        closestCarCoords = carCoords;
                        minDistanceSq = distanceToCarSq;
                    }
                });

                copSprite.mz.setMode(COP_MODE_CONVOY, { jailCoords: closestCarCoords });
            }
        }
    }

    increaseScore(points, sprite){
        this.mz.score += points;
        if (sprite)
        {
            this.playPoints(sprite, points)
        }
        const takens = Player.instance.slots.getTakens();
        if (takens.length)
        {
            this.mz.score += takens.length;
            for (let i = 0; i < takens.length; i++)
            {
                if (takens[i].sprite)
                {
                    this.playPoints(takens[i].sprite, 1);
                }
            }
        }
        // this.updateScore();
    }

    fightWin(){
        for (let i = 0; i < this.mz.cops.alive; i++) {
            const copSprite = this.mz.arrays.cops[i];
            const cop = copSprite.mz;
            if (cop.mode === COP_MODE_FIGHT)
            {
                this.unarrest(copSprite);
                cop.setMode(COP_MODE_STUN);
                this.increaseScore(10, copSprite);
            }
        }
        if (Math.random() < 0.3)
        {
            this.mz.tweet.rTweet({type: 'defended'}, {visible: 5000, fadeIn: 500, fadeOut: 500});
        }
    }

    handleEnterWagon(wagon, x, y){
        this.game.physics.arcade.moveToXY(wagon, x, y, 60);
        this.mz.arrays.enterWagons.push({wagon: wagon, x, y});
        this.mz.arrays.awaitWagons.splice(this.mz.arrays.awaitWagons.findIndex(x => x === wagon), 1);
    }

    handleGotPlaceWagon(wagon){
        this.mz.arrays.wagons.push(wagon);
        wagon.body.stop();
    }

    handleEnteringWagons(){
        for (let i =0; i<this.mz.arrays.enterWagons.length; i++)
        {
            const w = this.mz.arrays.enterWagons[i];
            if (w)
            {
                const diff = Math.sqrt(Math.pow(w.wagon.x - w.x, 2) + Math.pow(w.wagon.y - w.y, 2));
                if (diff < 10)
                {
                    this.handleGotPlaceWagon(w.wagon);
                    this.mz.arrays.enterWagons.splice(i, 1);
                    i--;
                }
            }
        }
    }

    handleLeaveWagon(wagon, x, y){
        for (let i =0; i<this.mz.arrays.wagons.length; i++)
        {
            const w = this.mz.arrays.wagons[i];
            if (
                w === wagon
            )
            {
                this.mz.arrays.wagons.splice(i, 1);
                this.game.physics.arcade.moveToXY(wagon, x, y, 60);
                this.mz.arrays.leftWagons.push(wagon);
                break;
            }
        }
        for (let i=0; i<this.mz.levelObjects.paddyWagon.length; i++)
        {
            const w = this.mz.levelObjects.paddyWagon[i];
            if (
                w === wagon
            )
            {
                this.mz.levelObjects.paddyWagon.splice(i, 1);
                break;
            }
        }

        for (let cop of this.mz.arrays.cops)
        {
            if (cop.alive && cop.mz.mode === COP_MODE_CONVOY)
            {
                let closestCarCoords = null;
                let minDistanceSq = Infinity;
                this.mz.arrays.wagons.forEach(carSprite => {
                    const carCoords = {
                        x: carSprite.body.x + (carSprite.body.width / 2) + carSprite.entagleX,
                        y: carSprite.body.y + carSprite.body.height + carSprite.entagleY
                    };
                    const distanceToCarSq = this.getDistanceSq(cop, carCoords);
                    if (distanceToCarSq < minDistanceSq) {
                        closestCarCoords = carCoords;
                        minDistanceSq = distanceToCarSq;
                    }
                });
                cop.mz.setMode(COP_MODE_CONVOY, { jailCoords: closestCarCoords });
            }
        }
    }

    handleLeavingWagons(){
        for (let i =0; i<this.mz.arrays.leftWagons.length; i++)
        {
            const w = this.mz.arrays.leftWagons[i];
            if (
                w
                && (
                    (w.y + w.height < 0)
                    ||
                    (w.x + w.width < 0)
                    ||
                    (w.y - w.height > this.game.world.height)
                    ||
                    (w.x - w.width > this.game.world.width)
                )
            )
            {
                this.mz.arrays.leftWagons.splice(i, 1);
                this.collider.removeEntityBySprite(w);
                w.destroy();
                break;
            }
        }
    }

    pickRandomWagon(){
        return this.mz.arrays.wagons.length ? this.mz.arrays.wagons[Math.floor(Math.random()*this.mz.arrays.wagons.length)] : null;
    }

    createStar(){
        this.mz.objects.star = this.createPrefab(Star, {});
        this.mz.objects.star.setState(Star.STATE.MOVE_IN);
    }

    createLevelObjects(){
        for (let key in levelObjects) {
            const { speed, personalMatrix, sprite, positions, objectClass, immovable, group, ...extras } = levelObjects[key]
            if (!this.mz.levelObjects[key])
            {
                this.mz.levelObjects[key] = []
            }
            this.mz.levelObjects[key] = this.mz.levelObjects[key].concat(positions.filter(x => !x.done && x.score <= this.mz.score).map((obj, i) => {
                const { startX, startY, moveX, moveY, angle, entagleX, entagleY } = obj;
                const levelObject = this.game.add.sprite(startX, startY, sprite, 0);
                levelObject.entagleX = entagleX;
                levelObject.entagleY = entagleY;
                levelObject.spriteName = sprite+i;
                levelObject.anchor.setTo(0.5);
                if (angle)
                {
                    levelObject.angle = angle;
                }
                this.game.physics.arcade.enable(levelObject);
                if (angle === 90 || angle === -90)
                {
                    // levelObject.anchor.setTo(1, 0);
                    levelObject.body.setSize(
                        levelObject.height,
                        levelObject.width,
                        levelObject.width/2 - levelObject.height/2,
                        levelObject.height/2 - levelObject.width/2
                    );
                }
                // else
                // {
                //     levelObject.body.setSize(levelObject.width, levelObject.height, -levelObject.width/2, -levelObjects.height/2);
                // }
                this.mz.groups[group].add(levelObject);

                if (immovable)
                {
                    levelObject.body.immovable = true;
                }
                this.collider.addEntity({ sprite: levelObject, object: this.game, obstacle: true })
                if (key === 'paddyWagon')
                {
                    this.mz.groups.cars.add(levelObject);
                    this.mz.arrays.awaitWagons.push(levelObject);
                    this.handleEnterWagon(levelObject, moveX, moveY);
                }
                obj.done = true;
                return levelObject;
            }));
        }
    }

    playPoints(sprite, points)
    {
        var spritePoint = this.game.add.sprite(sprite.x, sprite.y-10, 'ALL_IMAGES', 'points_'+points);
        spritePoint.scale.setTo(0.5);
        spritePoint.anchor.set(0.5);
        var tween = game.add.tween(spritePoint);
        tween.to(
            {y: sprite.y - 200, alpha: 0.7}, 1500, Phaser.Easing.Default, true
        );
        tween.onComplete.add(
            () => {
                spritePoint.destroy();
            }
        )
    }

    updateGarbage(){
        const garbageLevel = Math.floor(this.mz.score/100);
        if (this.mz.garbageLevel < garbageLevel)
        {
            this.mz.garbageLevel = garbageLevel;
            if (this.mz.objects['garbage_0'+this.mz.garbageLevel])
                this.mz.objects['garbage_0'+this.mz.garbageLevel].visible = true;
        }
    }

    updateCircle(){
        //пиздец коненечно. 
        //и алокации и map через map
        //ПЕРЕПИСЫВАТЬ НАДО 
        const circles = this.mz.arrays.press.map(x => ({sprite: x, color: 0xf7c169, circle: this.mz.circles.press, key: 'press'}))
            .concat(this.mz.arrays.protesters.map(x => ({sprite: x, color: 0x6eed83, circle: this.mz.circles.npc, key: 'npc'})))
            .concat(this.mz.arrays.cops.map(x => ({sprite: x, color: 0x2b3992, circle: this.mz.circles.cop, key: 'cop'})))
            .filter(x => !x.sprite.inCamera && x.sprite.visible);
       
        const cameraBounds = new Phaser.Rectangle(
            this.game.camera.view.x + 10,
            this.game.camera.view.y + 10,
            this.game.camera.view.width - 20,
            this.game.camera.height - 20
        );

        const c = {x: cameraBounds.centerX, y: cameraBounds.centerY};
        const lines = {
            top: [
                {x: cameraBounds.x, y: cameraBounds.y},
                {x: cameraBounds.x + cameraBounds.width, y: cameraBounds.y}
            ],
            right: [
                {x: cameraBounds.x + cameraBounds.width, y: cameraBounds.y},
                {x: cameraBounds.x + cameraBounds.width, y: cameraBounds.y + cameraBounds.height}
            ],
            bottom: [
                {x: cameraBounds.x, y: cameraBounds.y + cameraBounds.height},
                {x: cameraBounds.x + cameraBounds.width, y: cameraBounds.y + cameraBounds.height}
            ],
            left: [
                {x: cameraBounds.x, y: cameraBounds.y},
                {x: cameraBounds.x, y: cameraBounds.y + cameraBounds.height}
            ]
        };

        this.circlePool.reset();
        for (let i=0; i < circles.length; i++)
        {
            const {sprite, color, circle, key} = circles[i];

            if (sprite.alive && !this.game.camera.view.contains(sprite.x, sprite.y))
            {
                let positions = [];
                if (cameraBounds.x < sprite.x)
                    positions.push('right');
                else
                    positions.push('left');
                if (cameraBounds.y < sprite.y)
                    positions.push('bottom');
                else
                    positions.push('top');

                const mainLine = [{x: sprite.x, y: sprite.y}, c];
                let interPoint = null;
                for (let p of positions)
                {
                    let line = lines[p];
                    let shouldBePoint = lineIntersection(line, mainLine);
                    // console.log(shouldBePoint, line, mainLine, sprite);
                    if (this.game.camera.view.contains(shouldBePoint.x, shouldBePoint.y))
                    {
                        interPoint = shouldBePoint;
                        break;
                    }
                }

                if(interPoint){
                    this.circlePool.pull(key, circle, interPoint.x, interPoint.y);
                }
            }
        }
        //this.circlePool.reset();
    }

}

export default Game;
