import ScoreMeter from './../objects/ScoreMeter.js';
import levels from '../levels';

class GameInterface {
    constructor({ game, onTogglePoster }) {
        this.game = game;
        this.onTogglePoster = onTogglePoster;

        this.group = this.game.add.group();
        this.group.fixedToCamera = true;

        const isWide = this.game.width > 500;

        this.score = new ScoreMeter({
            game: this.game,
            x: this.game.width / 2,
            y: isWide ? 20 : 10,
            width: 180,
            radius: 10
        });
        this.group.add(this.score.group);
        if (!isWide)
            this.score.group.x = this.game.width - this.score.fullWidth - 10;

        this.textScore = this.game.add.text(
            this.game.width - 20,
            20,
            '',
            {
                font: '25px Arial',
                fill: '#fff'
            }
        );
        this.textScore.anchor.set(1, 0);
        this.textScore.setShadow(2, 2, 'rgba(0, 0, 0, .8)', 0);

        this.textTime = this.game.add.text(
            isWide?this.game.width/2 : this.game.width - 60,
            isWide ? 50 : 40,
            '',
            {
                font: 'bold 26px Arial',
                fill: '#fff',
            }
        );
        this.textTime.anchor.set(0.5, 0);
        // this.textTime.setShadow(2, 2, 'rgba(0, 0, 0, .8)', 0);

        this.textTime.setText('00:00:00')

        this.group.add(this.textScore);
        this.group.add(this.textTime);



        this.buttonSound = this.game.add.button(
            10,
            10,
            'soundButtons',
            this.handleClickSound,
            this,
            1, 1, 1, 1,
            this.group
        );
        this.buttonSound.input.priorityID = 2;

        if (!Phaser.Device.desktop) {
            this.buttonPoster = this.game.add.button(
                this.game.width - 20,
                this.game.height - 140,
                'helpPoster',
                this.handleTogglePoster,
                this,
                1, 1, 1, 1,
                this.group
            );
            this.buttonPoster.anchor.set(1, 1);
            this.buttonPoster.input.priorityID = 2;
        }
        else
        {
            this.restartButton = this.game.add.button(
                this.game.width - 10,
                isWide ? 10 : 10,
                'restartButton',
                this.handleRestartButton,
                this,
                1, 1, 1, 1,
                this.group
            );
            this.restartButton.anchor.set(1, 0);
            this.restartButton.input.priorityID = 2;
        }

    }

    update({ score, protestersAlive, protestersTotal, meanMood, percent }) {
        this.buttonSound.frame = this.game.sound.mute ? 1 : 0;

        this.score.update(percent);
    }

    updateTimer(time){
        this.textTime.setText(time);
    }

    updateScore(score, time) {
        // this.textScore.setText(score);
    }

    handleClickSound() {
        this.game.sound.mute = !this.game.sound.mute;
    }

    handleTogglePoster() {
        this.onTogglePoster();
    }

    kill() {
        this.group.killAll();
    }

    handleRestartButton(){
        this.game.state.start('Game', true, false, levels['level1']);
    }
}

export default GameInterface;
