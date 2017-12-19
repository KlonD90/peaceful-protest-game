class HelpInfo {
    constructor() {
        this.sprites = {};

        window._helpInfoTestOnly = this;
    }
    
    setGame(game) {
        this.game = game;
        console.log('game', game);
        window._game = game;
    }

    addSprite(helpName) {
        const { width, height } = game.game;
        const centerX = (width/2)-169;

        const sprite = this.sprites[helpName] = this.game.add.sprite(
            centerX, height-130, helpName
        );
        sprite.fixedToCamera = true
        return sprite;
    }

    fadeIn(sprite, time=1000) {
        return this.game.add.tween(sprite)
            .to(
                {alpha: 1}, time, Phaser.Easing.Linear.None, true
            );
    }
    fadeOut(sprite, time=1000) {
        const tween = this.game.add.tween(sprite)
            .to(
                {alpha: 1}, time, Phaser.Easing.Linear.None,
            );
        tween.add.onComplete(() => {
            sprite.kill();
        }, this.game);
        return tween;
    }

    show(helpName, anim=false) {
        if (typeof this.game === 'undefined') {
            throw new Error('HelpInfo don\'t have game instance');
        }

        const sprite = this.addSprite(helpName);
        window._sprite = sprite;
        if (anim) {
            sprite.alpha = 0;
            this.fadeIn(sprite);
        }
    }

    hide(helpName, anim = false) {
        const currentSprite = this.sprites[helpName];
        if (anim) {
            this.fadeOut(currentSprite);
        } else {
            currentSprite.kill();
        }
    }
}

export default new HelpInfo();