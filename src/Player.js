import Protester from './Protester.js';
import { SPEED_PLAYER } from './constants.js';

const DEFAULT_SCORE_GAIN_SPEED = 1;

class Player extends Protester {
    constructor({ game, x, y }) {
        super({ game, x, y, spriteKey: 'player' });

        this.speed = SPEED_PLAYER;
        this.score = 0;
        this.scoreGainSpeed = DEFAULT_SCORE_GAIN_SPEED;
        this.showedPosterAt = null;

        // events
        this.sprite.events.onInputUp.add(this.handleClick, this);
        this.sprite.input.priorityID = 2;
        this.game.onPause.add(this.handleGamePause, this);
        this.game.onResume.add(this.handleGameResume, this);
    }

    update() {
        super.update();

        if (this.showedPosterAt) {
            this.flushScore();
            this.showedPosterAt = Date.now();
        }

        this.scoreGainSpeed = DEFAULT_SCORE_GAIN_SPEED;
    }

    handleGamePause() {
        if (this.showedPosterAt) {
            this.flushScore();
        }
    }

    handleGameResume() {
        if (this.showPoster) {
            this.showedPosterAt = Date.now();
        }
    }

    handleClick() {
        if (this.sprite.body.isMoving) {
            this.stopMoving();
        } else {
            this.togglePoster();
        }
    }

    togglePoster(on = !this.showPoster) {
        if (on === this.showPoster) {
            return;
        }

        // count score
        if (on) {
            this.showedPosterAt = Date.now();
        } else {
            this.flushScore();
        }

        super.togglePoster(on);
    }

    flushScore() {
        this.score += this.scoreGainSpeed * (Date.now() - this.showedPosterAt);
        this.showedPosterAt = null;
    }

    stopMoving() {
        this.sprite.body.stopMovement(true);
    }
}

export default Player;
