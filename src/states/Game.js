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

import levelObjects from "../levelObjects.js"

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
    getFormattedTime
} from '../utils.js';
import {COP_MODE_FIGHT, COP_MODE_STUN, JOURNALIST_MODE_FOLLOW, PROTESTER_MODE_WANDER} from "../constants";

class Game {
    init(level) {
        // FIXME: debug
        window.game = this

        this.collider = new Collider({ game: this.game, gameObject: this, scale: 20 })

        this.mz = {
            level,
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
                fight: null
            },
            objects: {
                star: null,
                player: null,
                swat: null,
                shield: null,
                bgTile: null,
                interface: null,
                audio: {},
                pauseMenu: null,
                endMenu: null,
                screenAttack: null
            },
            arrays: {
                protesters: [],
                cops: [],
                press: [],
                borders: [],
                droppedPosters: [],
                wagons: [],
            },
            groups: {
                d: null,
                cars: null,
                droppedPosters: null,
                copsFOV: null,
                pressFOV: null,
                playerFOV: null,
                npcProtesters: null,
                levelObjects: null
            },
            zoomLevel: -1
        };
        this.mz.score = 0;
    }

    create() {
        this.mz.score = 0;
        // this.game.time.advancedTiming = true;

        this.game.stage.backgroundColor = '#ccc';
        this.game.sound.mute = true;

        this.game.world.resize(this.mz.level.worldWidth, this.mz.level.worldHeight);

        this.mz.objects.bgTile = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'meeting_map');
        this.mz.objects.bgTile.fixedToCamera = true;

        this.mz.objects.audio.theme = this.game.add.audio('theme');
        this.mz.objects.audio.theme.loopFull(0.1);
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
        this.mz.groups.npcProtesters = this.game.add.group();

        this.mz.levelObjects = {}
        for (let key in levelObjects) {
            const { speed, personalMatrix, sprite, positions, objectClass, immovable, group, ...extras } = levelObjects[key]
            this.mz.levelObjects[key] = positions.map(({ x, y, angle }, i) => {

                const levelObject = this.game.add.sprite(x, y, sprite, 0);
                levelObject.spriteName = sprite+i;
                // levelObject.anchor.set(0.5);


                // levelObject.body.reset(x, y)
                if (angle)
                {
                    levelObject.angle = angle;

                    if (angle === 90 || angle === -90)
                    {

                    }
                    // levelObject.body.rotation = Phaser.Math.degToRad(angle);
                }
                this.game.physics.arcade.enable(levelObject);
                levelObject.body.setSize(levelObject.height, levelObject.width, -levelObject.height, 0);
                this.mz.groups[group].add(levelObject);

                if (immovable)
                {
                    levelObject.body.immovable = true;
                }
                this.collider.addEntity({ sprite: levelObject, object: this.game })
                if (key === 'paddyWagon')
                {
                    this.mz.arrays.wagons.push(levelObject);
                }
                return levelObject;
            })
        }
        this.mz.objects.star = this.createPrefab(Star, {});
        this.mz.objects.star.setState(Star.STATE.MOVE_IN);;
        // player
        this.mz.objects.player = this.createPrefab(Player, {
            x: this.game.world.centerX,
            y: this.game.world.centerY,
            fovGroup: this.mz.groups.playerFOV,
            ...this.mz.level.player,
            onDropPoster: this.handleDropPoster.bind(this)
        });

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
        const onFinishShooting = this.handleFinishShooting.bind(this);
        for (let i = 0; i < this.mz.level.press.count; i++) {
            const journalist = this.createPrefab(Journalist, {
                ...this.getRandomCoordinates(),
                fov: {
                    group: this.mz.groups.pressFOV,
                    distance: this.mz.level.press.fov.distance,
                    angle: this.mz.level.press.fov.angle
                },
                speed: this.mz.level.press.speed,
                shootingDuration: this.mz.level.press.duration,
                cooldownDuration: this.mz.level.press.duration * this.mz.level.press.count * 2,
                onFinishShooting,
                spriteName: `journalist${i}`
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
        this.updateScore();


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

        // this.mz.objects.timer = this.game.time.create();
        // this.mz.objects.timer.loop(Phaser.Timer.SECOND, this.updateScore, this);
        // this.mz.objects.timer.start();

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

        this.game.camera.setBoundsToWorld()
    }

    update() {
        // update background
        this.mz.objects.bgTile.tilePosition.set(-this.game.camera.x, -this.game.camera.y);

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
        const posterProtesters = this.mz.arrays.protesters.filter(x => x.mz.showPoster && x.mz.isAgitator);

        if (this.mz.objects.player.showPoster)
        {
            posterProtesters.push(this.mz.objects.player.sprite);
        }
        for (let i = 0; i < this.mz.arrays.protesters.length; i++) {
            const sprite = this.mz.arrays.protesters[i];
            if (!sprite.alive) {
                if (this.mz.protesters.toRevive !== 0) {
                    const mood = this.game.math.clamp(
                        lastTickMeanMood,
                        this.mz.level.protesters.mood,
                        (this.mz.level.winningThreshold - 1) / 100
                    );
                    this.reviveProtester({
                        sprite,
                        mood
                    });
                    this.mz.protesters.alive++;
                    this.mz.protesters.meanMood += mood;
                }
            } else {
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
                    !this.mz.gameEnded &&
                    closeToPoster
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
                meanMood: this.mz.protesters.meanMood
            });
        }

        // update journalists
        this.mz.arrays.press.forEach(journalistSprite => {
            const journalist = journalistSprite.mz;
            let newTarget = null;

            if (
                !this.mz.gameEnded &&
                journalist.FOV.isActive &&
                this.mz.objects.player.showPoster &&
                journalist.FOV.containsPoint(this.mz.objects.player.sprite.body.center)
            ) {
                newTarget = this.mz.objects.player.sprite;
            }

            if (newTarget) {
                journalist.setMode(JOURNALIST_MODE_SHOOTING, { target: newTarget });
            } else if (journalist.mode !== JOURNALIST_MODE_WANDER && journalist.mode !== JOURNALIST_MODE_FOLLOW) {
                journalist.setMode(JOURNALIST_MODE_WANDER);
            }

            journalist.update();
        });

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
        if (this.mz.cops.alive < this.mz.arrays.cops.length) {
            // revive if necessary
            const copsRequired = this.getCopsRequiredNumber();
            if (copsRequired > this.mz.cops.alive) {
                this.reviveCops(copsRequired - this.mz.cops.alive);
                this.mz.cops.alive = copsRequired;
            }
        }

        for (let i = 0; i < this.mz.cops.alive; i++) {
            const copSprite = this.mz.arrays.cops[i];
            const cop = copSprite.mz;

            if (cop.mode === COP_MODE_CONVOY && this.mz.objects.player.mode !== PLAYER_MODE_FIGHT
                && this.mz.objects.player.mode !== PLAYER_MODE_STUN
                && this.mz.objects.player.mode !== PROTESTER_MODE_ARRESTED)
            {
                const playerCenter = this.mz.objects.player.sprite.body.center;
                const diffCop = Math.abs(copSprite.x - playerCenter.x)+Math.abs(copSprite.y - playerCenter.y);
                if (diffCop < 100)
                {
                    this.mz.objects.player.setMode(PLAYER_MODE_FIGHT);
                    cop.setMode(COP_MODE_FIGHT);
                }
            }

            if (cop.mode !== COP_MODE_CONVOY && cop.mode !== COP_MODE_ENTER && cop.mode !== COP_MODE_FIGHT) {
                // set attraction point and strength
                cop.attractionPoint = { ...this.mz.objects.player.sprite.body.center };
                let attractionStrength = 0;
                if (this.mz.objects.player.showPoster) {
                    attractionStrength += 0.2;
                    this.mz.arrays.press.forEach(journalistSprite => {
                        if (journalistSprite.mz.mode === JOURNALIST_MODE_SHOOTING) {
                            attractionStrength += 0.4;
                        }
                    });
                }
                cop.attractionStrength = Math.min(1, attractionStrength * this.mz.objects.player.power);

                // find target for a cop
                let newTarget = null;
                let distanceToTargetSq = Infinity;
                for (let i = 0; i <= this.mz.arrays.protesters.length; i++) {
                    const protester = i === this.mz.arrays.protesters.length ?
                        this.mz.objects.player :
                        this.mz.arrays.protesters[i].mz;
                    if (
                        !protester.sprite.alive ||
                        protester.mode === PROTESTER_MODE_ARRESTED ||
                        !cop.FOV.containsPoint(protester.sprite.body.center)
                    ) {
                        continue;
                    }
                    if (
                        protester.sprite === cop.target ||
                        protester.showPoster
                    ) {
                        let distanceToProtesterSq = this.getDistanceSq(copSprite.body.center, protester.sprite.body.center);
                        // give higher priority to current target
                        if (protester.sprite === cop.target) {
                            distanceToProtesterSq *= 3 / 4;
                        }
                        if (distanceToProtesterSq < distanceToTargetSq) {
                            newTarget = protester.sprite;
                            distanceToTargetSq = distanceToProtesterSq;
                        }
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

        // protesters collision
        let allProtesters = [...this.mz.arrays.protesters, this.mz.objects.player.sprite]
        if(this.mz.objects.star) allProtesters.push(this.mz.objects.star.sprite)

        for (let protesterSprite of allProtesters) {

            if (
                !protesterSprite.alive ||
                protesterSprite.mz.mode === PROTESTER_MODE_ARRESTED
            ) {
                continue;
            }

            const protesterBounds = protesterSprite.getBounds();

            // vs cops
            for (let j = 0; j < this.mz.arrays.cops.length; j++) {
                const copSprite = this.mz.arrays.cops[j];
                if (
                    !copSprite.alive ||
                    copSprite.mz.target !== protesterSprite ||
                    !Phaser.Rectangle.intersects(protesterBounds, copSprite.getBounds()) ||
                    protesterSprite.mz.mode === PLAYER_MODE_FIGHT
                ) {
                    continue;
                }
                this.proceedToJail(protesterSprite, copSprite);
            }

            // vs swat
            if (this.mz.objects.swat) {
                for (let j = 0; j < this.mz.objects.swat.sprites.length; j++) {
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

            // vs shield
            // if (this.mz.gameEnded) {
            //     this.game.physics.arcade.collide(
            //         protesterSprite,
            //         this.mz.objects.shield.sprite,
            //         protesterSprite => {
            //             protesterSprite.body.collideWorldBounds = false;
            //             if (protesterSprite.health === 1) {
            //                 this.beatUpProtester(protesterSprite);
            //             }
            //             protesterSprite.mz.dropPosterRnd();
            //         }
            //     );
            // }
        }

        // player collisions
        if (
            this.mz.objects.player.mode !== PROTESTER_MODE_ARRESTED &&
            !this.mz.gameEnded
        ) {
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
                    this.mz.objects.player.powerUp();
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
        this.game.physics.arcade.collide(
            this.mz.objects.player.sprite,
            this.mz.arrays.protesters,
            null,
            (sprite1, sprite2) => checkFollowPlayer(sprite1) && checkFollowPlayer(sprite2)
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
        this.game.physics.arcade.collide(
          this.mz.levelObjects.paddyWagon,
          this.mz.objects.player.sprite
        );
        this.game.physics.arcade.collide(
            this.mz.levelObjects.paddyWagon,
            this.mz.arrays.protesters
        );
        this.game.physics.arcade.collide(
            this.mz.objects.player.sprite,
            this.mz.objects.star.sprite
        );

        const pursueTarget = (copSprite, protesterSprite) => !(
            copSprite.mz.target === protesterSprite && copSprite.mz.mode === COP_MODE_PURSUE
        );
        this.game.physics.arcade.collide(
            this.mz.arrays.cops,
            this.mz.arrays.protesters,
            null,
            pursueTarget
        );
        this.game.physics.arcade.collide(
            this.mz.arrays.cops,
            this.mz.objects.player,
            null,
            pursueTarget
        );

        // update posters
        this.mz.arrays.droppedPosters.forEach(droppedPoster => {
            if (droppedPoster.sprite.alive) {
                droppedPoster.update();
            }
        });
        this.mz.postersToRevive.forEach(this.createPoster, this);
        this.mz.postersToRevive = [];

        this.mz.groups.d.sort('y', Phaser.Group.SORT_ASCENDING);

        if (!this.mz.gameEnded) {
            this.checkWin();
        }

        // events
        if (this.mz.events.keys.esc.justUp) {
            this.game.paused = !this.game.paused;
        }

        this.mz.objects.star && this.mz.objects.star.update()


        const zoomLevels = [[10, 1, 800, 600], [20, 0.7, 2000, 800]];
        let desiredZoomLevel = -1;
        for (let l =0; l< zoomLevels.length; l++)
        {
            const [countProtester, zoom, worldWidth, worldHeight] = zoomLevels[l];
            if (this.mz.protesters.alive > countProtester)
            {
                desiredZoomLevel = l;
            }
        }

        // if (this.mz.zoomLevel < desiredZoomLevel)
        // {
        //     const [countProtester, zoom, worldWidth, worldHeight] = zoomLevels[desiredZoomLevel];
        //     // this.game.camera.scale.x = zoom;
        //     // this.game.camera.scale.y = zoom;
        //     this.game.world.resize(worldWidth, worldHeight);
        //     // this.mz.zoomLevel = desiredZoomLevel;
        //     // this.mz.timers.resize.removeAll();
        //     // this.mz.timers.resize.stop();
        //     // const zoomSteps = Math.round((this.mz.level.worldWidth + 10 * desiredZoomLevel *3 - this.game.world.width)/10);
        //     // for (let i=1; i<zoomSteps+1; i++)
        //     //     this.mz.timers.resize.add(i*300, this.cameraZoom, this);
        //     // this.mz.timers.resize.start();
        // }
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
        player.resetClickSpeed();
        player.moveTo(coords, { callback: () => player.resetClickSpeed(true) });
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
        this.increaseScore(this.mz.level.protesters.count.add, journalist.sprite);
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
        this.mz.objects.interface.updateScore(this.mz.score);
    }

    createCops() {
        const totalCount = this.mz.level.cops.count[this.mz.level.cops.count.length - 1][1];
        this.mz.cops.alive = this.getCopsRequiredNumber();
        for (let i = 0; i < totalCount; i++) {
            let x, y;
            if (i < this.mz.cops.alive) {
                const offset = 100;
                const wagon = this.pickRandomWagon();
                x = Math.round(wagon.body.center.x) + offset;
                y = wagon.y + wagon.body.height + 30;
            } else {
                const randCoords = this.getRandomCoordinates();
                x = randCoords.x;
                y = randCoords.y;
            }
            const cop = this.createPrefab(Cop, {
              x, y,
              alive: i < this.mz.cops.alive,
              fov: {
                  group: this.mz.groups.copsFOV,
                  distance: this.mz.level.cops.fov.distance,
                  angle: this.mz.level.cops.fov.angle
              },
              speed: this.mz.level.cops.speed,
              spriteName: `cop${i}`
            })

            this.mz.arrays.cops.push(cop.sprite);
            this.mz.groups.d.add(cop.sprite);

            if (i < this.mz.cops.alive) {
                cop.setMode(COP_MODE_WANDER);
            }
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

    createProtesters() {
        const count = this.mz.level.protesters.count.max;
        const onDropPoster = this.handleDropPoster.bind(this);
        const onLeft = this.handleProtesterLeft.bind(this);
        for (let i = 0; i < count; i++) {
            const protester = this.createPrefab(NPCProtester, {
                ...this.getRandomCoordinates(),
                group: this.mz.groups.d,
                speed: this.mz.level.protesters.speed,
                spriteKey: `protester_sprite`,
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

    reviveProtester({ sprite, mood }) {
        sprite.mz.revive({
            ...this.randomOffscreenCoords(),
            nextCoords: this.getRandomCoordinates(),
            mood
        });

        this.mz.protesters.toRevive--;
        this.mz.protesters.revived++;
    }

    beatUpProtester(sprite) {
        sprite.body.enable = false;
        sprite.mz.viewSprite.damage(0.1);
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
        this.mz.groups.cars.forEach(carSprite => {
            const carCoords = {
                x: (carSprite.body.x + carSprite.body.width) / 2,
                y: carSprite.body.y + carSprite.body.height + 40
            };
            const distanceToCarSq = this.getDistanceSq(copSprite, carCoords);
            if (distanceToCarSq < minDistanceSq) {
                closestCarCoords = carCoords;
                minDistanceSq = distanceToCarSq;
            }
        });


        this.arrest(protesterSprite, copSprite);

        copSprite.mz.setMode(COP_MODE_CONVOY, { jailCoords: closestCarCoords });
    }

    arrest(protesterSprite, copSprite) {
        this.beatUpProtester(protesterSprite);

        copSprite.addChild(protesterSprite);

        if (protesterSprite.name === 'player') {
            this.game.camera.follow(copSprite);
        }

        protesterSprite.mz.setMode(PROTESTER_MODE_ARRESTED, {
            x: (
                copSprite.body.velocity.x === 0 ?
                    this.game.rnd.sign() :
                    -Math.sign(copSprite.body.velocity.x)
            ) * protesterSprite.body.halfWidth,
            y: protesterSprite.body.halfHeight,
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
        protesterSprite.mz.mood = 0.1;
        protesterSprite.mz.setMode(PROTESTER_MODE_WANDER);
        copSprite.removeChild(protesterSprite);
        this.mz.groups.d.add(protesterSprite);
        // this.beatUpProtester(protesterSprite);

        // copSprite.removeChild(protesterSprite);

        if (protesterSprite.name === 'player') {
            this.game.camera.follow(copSprite);
        }

        if (protesterSprite.name !== 'player') {
            this.mz.protesters.arrested--;
            protesterSprite.mz.setMode(PROTESTER_MODE_WANDER);
            protesterSprite.body.enable = true;
            protesterSprite.revive(1);
            const x = copSprite.x + 30;
            const y = copSprite.y + 30;
            protesterSprite.x = x;
            protesterSprite.y = y;
            protesterSprite.reset(x, y);
        }
        console.log('protester', protesterSprite);
    }

    launchSWAT() {
        this.mz.timers.swat.stop(true);

        this.mz.objects.audio.boo.play();

        const direction = this.game.rnd.between(0, 1) === 0 ? 'ltor' : 'rtol';

        const start = {
          x: direction === 'ltor' ? - 100 : this.game.world.width + 100,
          y: this.getRandomCoordinateY(),
        }

        let targets = []

        if (this.mz.objects.star && this.mz.objects.star.sprite.alive) {
          const { x, y } = this.mz.objects.star.sprite.body.center
          targets.push({ x, y })
        }

        targets.push({
          x: direction === 'ltor' ? this.game.world.width + 100 : -100,
          y: this.getRandomCoordinateY(),
        })


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
        } else if (this.mz.score >= 500) {
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

        this.mz.objects.audio.theme.fadeOut(2000);

        this.mz.objects.endMenu = new EndMenu({
            game: this.game,
            mode,
            score: this.mz.objects.interface.score.group,
            stats: {
                time: this.mz.timePassed,
                alive: this.mz.protesters.alive,
                arrested: this.mz.protesters.arrested,
                revived: this.mz.protesters.revived,
                left: this.mz.protesters.left
            }
        });

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
        } else {
            this.mz.objects.audio.boo.play();
            switch (mode) {
                case END_GAME_TIME_OUT: {
                    this.mz.arrays.protesters.forEach(sprite => {
                        sprite.mz.moodDown(1);
                    });
                    // this.launchShield();
                    break;
                }
                case END_GAME_PROTEST_RATE: {
                    // this.launchShield();
                    break;
                }
                case END_GAME_PLAYER_KILLED: {
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

    checkContainWagon({x, y}){
        for (let w of this.mz.levelObjects.paddyWagon)
        {
            console.log(w);
            if (w.getBounds().contains(x, y))
                return true;
        }
        return false;
    }

    getRandomCoordinates() {
        let coords = {
            x: this.getRandomCoordinateX(),
            y: this.getRandomCoordinateY()
        };

        while (this.checkContainWagon(coords)) {
            coords = {
                x: this.getRandomCoordinateX(),
                y: this.getRandomCoordinateY()
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
            // this.mz.objects.screenAttack;
            this.mz.timers.screen.stop();
            this.mz.timers.screen.removeAll();
            this.mz.timers.screen.add(awaitStop, this.screenAttackStop, this);
            // for (let i=0; i<alphaStops; i++)
            // {
            //     this.mz.timers.screen.add(alphaStep * (i +1), this.screenAttackAlpha, this);
            // }
            this.mz.timers.screen.start();
        }
        else
        {
            this.mz.screenAttacked = true;
            this.mz.objects.screenAttack = this.game.add.graphics();;
            this.mz.objects.screenAttack.fixedToCamera = true;
            this.mz.objects.screenAttack.reset(0, 0);
            this.mz.objects.screenAttack.beginFill(0x00ff00, 1);
            this.mz.objects.screenAttack.lineTo(this.game.camera.width, 0)
                .lineTo(this.game.camera.width, this.game.camera.height)
                .lineTo(0, this.game.camera.height)
                .lineTo(0, 0)
                .endFill();
            // this.mz.objects.screenAttack.scale.setTo(2.5);
//	A mask is a Graphics object
            var mask = this.game.add.graphics(0, 0);
            //	Shapes drawn to the Graphics object must be filled.
            mask.beginFill(0xffffff);
            //	Here we'll draw a circle
            mask.drawCircle(100, 100, 100);
            mask.x = this.mz.objects.player.sprite.x - 100;
            mask.y = this.mz.objects.player.sprite.y - 100;
            for (let group of this.mz.groups ){
                group.mask = mask;
            }
            console.log('x', this.game.camera.width/2, this.mz.objects.screenAttack.width/2);
            console.log(this.mz.objects.screenAttack);
            this.mz.timers.screen.add(awaitStop, this.screenAttackStop, this);
            // for (let i=0xx; i<alphaStops; i++)
            // {
            //     this.mz.timers.screen.add(alphaStep * (i +1), this.screenAttackAlpha, this);
            // }
            this.mz.timers.screen.start();
        }
    }

    screenAttackStop(){
        this.mz.objects.screenAttack.destroy();
        this.mz.objects.screenAttack = null;
        for (let group of this.mz.groups ){
            group.mask = null;
        }
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

    cameraZoom(){
        this.game.camera.scale.x -= 0.002
        this.game.camera.scale.y -= 0.002
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
                this.mz.groups.cars.forEach(carSprite => {
                    const carCoords = {
                        x: (carSprite.body.x + carSprite.body.width) / 2,
                        y: carSprite.body.y + carSprite.body.height + 40
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

    increaseScore(points){
        this.mz.score += points;
        this.updateScore();
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

    }

    pickRandomWagon(){
        return this.mz.arrays.wagons[Math.floor(Math.random()*this.mz.arrays.wagons.length)];
    }
}

export default Game;
