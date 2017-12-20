
/* run setGame before calling show\hide methods */
/* helpName = asset key */
class HelpInfo {
    constructor() {
        this.sprites = {};
    }
    
    setGame(game) {
        this.game = game;
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
        if (anim) {
            sprite.alpha = 0;
            this.fadeIn(sprite, anim);
        }
    }

    hide(helpName, anim = false) {
        if (typeof helpName === 'undefined') {
          Object.keys(this.sprites).forEach(
            (key) => this.sprites[key] && this.sprites[key].kill() 
          );

          return;
        }

        const currentSprite = this.sprites[helpName];
        if (anim) {
            this.fadeOut(currentSprite, anim);
        } else {
            currentSprite.kill();
        }
    }
}

export default new HelpInfo();