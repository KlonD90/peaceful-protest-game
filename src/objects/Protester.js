import Prefab from './Prefab.js';
import {
    PROTESTER_MODE_ARRESTED
} from '../constants.js';

class Protester extends Prefab {
    constructor({ onDropPoster, ...prefabOptions }) {
        super(prefabOptions);

        // this.injurySprite = this.viewSprite.addChild(
        //     this.game.make.sprite(
        //         -15,
        //         -this.sprite.height / 2 - 2,
        //         'injury'
        //     )
        // );
        // this.injurySprite.bringToTop();
        // this.injurySprite.visible = false;

        this.posterSprite = this.viewSprite.addChild(this.game.make.sprite(-10, 11, 'poster', 0));
        this.posterSprite.bringToTop();
        this.posterSprite.anchor.set(0.5, 1);
        this.posterSprite.visible = false;

        this.showPoster = false;
        this.dropPoster = 1;

        this.onDropPoster = onDropPoster;
    }

    update() {
        // this.injurySprite.visible = this.sprite.health !== 1;
        this.posterSprite.visible = this.posterSprite.alive && this.showPoster;
    }

    setMode(mode, props = {}) {
        switch (mode) {
            case PROTESTER_MODE_ARRESTED: {
                this.dropPosterRnd();

                this.moveTo(null);

                const { x, y, by } = props;
                this.sprite.x = x;
                this.sprite.y = y;

                by && by.onArrest && by.onArrest(this)

                break;
            }
        }

        super.setMode(mode, props);
    }

    dropPosterRnd() {
        if (this.game.rnd.frac() < this.dropPoster) {
            this.posterSprite.kill();
            this.onDropPoster && this.onDropPoster({ x: this.sprite.x, y: this.sprite.y });
        }
    }

    changeViewSprite(spriteKey, canWalk = 0)
    {
        super.changeViewSprite(spriteKey, canWalk);
        this.posterSprite = this.viewSprite.addChild(this.game.make.sprite(-10, 11, 'poster', 0));
        this.posterSprite.bringToTop();
        this.posterSprite.anchor.set(0.5, 1);
        this.posterSprite.visible = false;
        this.showPoster = false;
        this.dropPoster = 1;
    }
}

export default Protester;
