const config = {
    'mobile': {
        BORDER_RADIUS: 15,
        TOP_PADDING: 30,
        BOTTOM_PADDING: 30,
        SPRITE_MARGIN: 30,
        TEXT_MARGIN: 40,
        SUBTEXT_SIZE: '14px',
        TEXT_SIZE: '16px',
        TEXT_LINESPACING: 22,
        TEXT_WIDTH: 270,
        WIDTH: 300,
    },
    'desktop': {
        BORDER_RADIUS: 30,
        TOP_PADDING: 30,
        BOTTOM_PADDING: 30,
        SPRITE_MARGIN: 30,
        TEXT_MARGIN: 20,
        SUBTEXT_SIZE: '14px',
        TEXT_SIZE: '18px',
        TEXT_LINESPACING: 28,
        TEXT_WIDTH: 400,
        WIDTH: 610
    }
};

const TEXT_COLOR = '#ffffff';
const SUBTEXT_COLOR = '#9c9c9c';
const BACKGROUND_COLOR = '#000000';
const BACKGROUND_ALPHA = 0.8;

export default class Advice {
    constructor(game, GameObject, sprite, text, callback){
        this.callback = callback;
        this.game = game;
        this.GameObject = GameObject;
        this.overlay = this.game.add.graphics(0, 0);
        this.overlay.beginFill(0xffffff, 0.7);
        this.overlay.drawRect(0, 0, this.game.width, this.game.height);
        this.overlay.endFill();
        this.overlay.visible = false;
        this.overlay.fixedToCamera = true;
        this.shown = false;
        this.group = this.game.add.group();

        const screenWidth = this.game.width;
        const height = this.game.height;

        let configName = 'desktop';
        if (screenWidth < 610)
        {
            configName = 'mobile';
        }

        const {BORDER_RADIUS, TOP_PADDING, BOTTOM_PADDING, SPRITE_MARGIN,
            TEXT_MARGIN, SUBTEXT_SIZE, TEXT_SIZE, TEXT_LINESPACING,
            TEXT_WIDTH, WIDTH} = config[configName];

        const subtext = configName === 'desktop' ? 'Нажмите пробел, чтобы продолжить игру' : 'Коснитесь экрана, чтобы продолжить игру';

        const adviceSprite = this.game.make.sprite(WIDTH/2, TOP_PADDING, "ALL_IMAGES", `advice-${sprite}-${configName}`, 0);
        adviceSprite.anchor.set(0.5, 0);

        const adviceText = this.game.add.text(
            TEXT_WIDTH,
            height,
            text,
            {
                font: `${TEXT_SIZE} Arial`,
                fill: TEXT_COLOR,
                wordWrap: true,
                wordWrapWidth: TEXT_WIDTH,
                lineSpacing: TEXT_LINESPACING
            }
        );

        adviceText.anchor.set(0.5, 0);
        adviceText.x = WIDTH/2;
        adviceText.y = TOP_PADDING + adviceSprite.height + SPRITE_MARGIN;
        adviceText.resolution = window.devicePixelRatio || 1;

        const subText = this.game.add.text(
            TEXT_WIDTH,
            height,
            subtext,
            {
                font: `${SUBTEXT_SIZE} Arial`,
                fill: SUBTEXT_COLOR,
                wordWrap: true,
                wordWrapWidth: TEXT_WIDTH,
            }
        );

        subText.anchor.set(0.5, 0);
        subText.x = WIDTH/2;
        subText.y = TOP_PADDING + adviceSprite.height + SPRITE_MARGIN + adviceText.height + TEXT_MARGIN;
        subText.resolution = window.devicePixelRatio || 1;

        const groupHeight = TOP_PADDING + adviceSprite.height + SPRITE_MARGIN + adviceText.height + TEXT_MARGIN + subText.height + BOTTOM_PADDING;
        const graphic = this.game.add.graphics();
        console.log('WIDTH', WIDTH, 'BORDER_RADIUS', BORDER_RADIUS);
        graphic
            .beginFill(0x0, 0.8)
            // .lineStyle(1, 0x00ff00, 1);
        graphic
            .drawRoundedRect(0, 0, WIDTH, groupHeight, BORDER_RADIUS)
            .endFill();

        this.group.add(graphic);
        this.group.add(adviceSprite);
        this.group.add(adviceText);
        this.group.add(subText);
        // this.group.width = WIDTH;
        // this.group.height = groupHeight;
        this.group.fixedToCamera = true;
        this.group.cameraOffset.x  = this.game.width / 2 - WIDTH /2 ;
        this.group.cameraOffset.y = this.game.height / 2 -  groupHeight / 2;
        this.isActive = false;
        this.group.visible = false;

    }
    show(){
        this.overlay.visible = true;
        this.group.visible = true;
        this.GameObject.mz.adviceIsActive = true;
        this.game.paused = true;
        this.isActive = true;
        this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.addOnce(() => this.hide());
        this.GameObject.mz.events.fieldClickHandler.events.onInputDown.addOnce(() => this.hide());
        this.shown = true;
    }
    hide(){
        this.group.visible = false;
        this.GameObject.mz.adviceIsActive = false;
        this.game.paused = false;
        this.overlay.visible = false;
        this.isActive = false;
        if (this.callback)
            this.callback();
    }
}