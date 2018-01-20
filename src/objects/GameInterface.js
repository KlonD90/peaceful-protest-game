import ProgressBar from './../objects/ProgressBar.js';
import levels from '../levels';
import helpShow from '../help/';

class GameInterface {
    constructor({ game, onTogglePoster }) {
        this.game = game;
        this.onTogglePoster = onTogglePoster;
        this.lastMute = false;
        this.group = this.game.add.group();
        this.group.fixedToCamera = true;

        const isWide = this.game.width > 500;

        // Ибо нефиг плодить классы, будем юзать стандартный прогесс-бар
        this.score = new ProgressBar({
            radius:10,
             width:180,
             color:0xf0526f,
             lineWidth:10,
             game:this.game,
             sprite_type:"big_progress"
         }
        );
        this.score.graphics.visible = true;
        this.score.graphics.y = isWide ? 20 : 10;
        this.score.graphics.x = this.game.width / 2 - 90;
        this.group.add(this.score.graphics);
        this.score.update(0.01);

        if (!isWide)
            this.score.graphics.x = this.game.width - this.score.fullWidth - 10;

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
        this.textTime.resolution = window.devicePixelRatio || 1;
        // this.textTime.setShadow(2, 2, 'rgba(0, 0, 0, .8)', 0);

        this.textTime.setText('00:00:00')

        this.group.add(this.textScore);
        this.group.add(this.textTime);



        this.buttonSound = this.game.add.button(
            isWide ? 20 : 10,
            isWide ? 20 : 10,
            'ALL_IMAGES',
            this.handleClickSound,
            this,
            "volume_off", "volume_off", "volume_off"//, "volume_on",
           // this.group
        );
        this.group.add(this.buttonSound);
        this.buttonSound.input.priorityID = 2;



        if (!Phaser.Device.desktop) {
            this.buttonPoster = this.game.add.button(
                this.game.width - 20,
                this.game.height - 120,
                'ALL_IMAGES',
                this.handleTogglePoster,
                this,
                "mobile_poster-0", "mobile_poster-0",  "mobile_poster-0"
            );

            this.group.add(this.buttonPoster);

            this.buttonPoster.anchor.set(1, 1);
            this.buttonPoster.input.priorityID = 2;
          
            this.buttonHelp = this.game.add.button(
                10,
                10 + 48 + 10,
                'ALL_IMAGES',
                this.handleHelp,
                this,
                "help", "help",  "help"
            );

            this.group.add(this.buttonHelp);
            this.buttonHelp.input.priorityID = 2;
            this.buttonHelp.anchor.set(0, 0);
        }
        else
        {
            this.restartButton = this.game.add.button(
                this.game.width - (isWide ? 20 : 10),
                isWide ? 20 : 10,
                'ALL_IMAGES',
                this.handleRestartButton,
                this,
                "restart", "restart", "restart"
            );

            this.group.add(this.restartButton);

            this.restartButton.anchor.set(1, 0);
            this.restartButton.input.priorityID = 2;

            this.buttonHelp = this.game.add.button(
                this.game.width - ((isWide ? 20 : 10)+48+20),
                isWide ? 20 : 10,
                'ALL_IMAGES',
                this.handleHelp,
                this,
                "help", "help",  "help"
            );

            this.group.add(this.buttonHelp);
            this.buttonHelp.input.priorityID = 2;
            this.buttonHelp.anchor.set(1, 0);
        }

        this.lastPost = false;
    }

    update({ score, protestersAlive, protestersTotal, meanMood, percent, showPoster}) {

        this.score.update(percent);
        this.score.graphics.visible = true;

        if (this.buttonPoster)
        {
            if(showPoster != this.lastPost){
                let name =  "mobile_poster-" + (showPoster ? 1 : 0);
                this.buttonPoster.setFrames(name, name, name);
            }
            this.lastPost = showPoster;
        }
    }

    updateTimer(time){
        this.textTime.setText(time);
    }

    updateScore(score, time) {
        // this.textScore.setText(score);
    }

    handleClickSound() {
        this.game.sound.mute = !this.game.sound.mute;

        if(this.game.sound.mute){
            this.buttonSound.setFrames("volume_on","volume_on","volume_on");  
        } else {
            this.buttonSound.setFrames("volume_off","volume_off","volume_off");
        }
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

    handleHelp(){
        this.game.paused = true;
        helpShow(Phaser.Device.desktop, () => {
            this.game.paused = false;
        })
    }
}

export default GameInterface;
