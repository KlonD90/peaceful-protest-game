import { I18N_UI_SCALE } from '../constants';

const colors = [0xf0526f, 0xeddd15, 0x6eed83];

class ScoreMeter {
    constructor({ game, x, y, width, radius }) {
        this.percent = 0;
        this.game = game;

        this.group = this.game.add.group();

        this.group.y = y;
        this.radius = radius;
        this.width = width;
        this.fullWidth = this.width + this.radius * 2;
        this.blank = this.game.add.graphics();
        this.blank.beginFill(0xffffff);
        this.drawFigure(this.blank);
        this.blank.endFill();
        this.group.addChild(this.blank);

        this.group.x = x - this.fullWidth/2;

        this.fillGroup = this.game.add.group();

        this.fillBase = this.game.add.graphics();


        this.partSizes = [];

        let restWidth = this.fullWidth;

        for (let i = 0; i < colors.length; i++)
        {
            const size = Math.round(restWidth/ (colors.length -i));
            this.partSizes.push(size);
            restWidth-=size;
        }

        this.fillBase.moveTo(0, 0);
        let offsetWidth = 0;
        for (let i=0; i<this.partSizes.length; i++)
        {
            const partSize = this.partSizes[i];
            this.fillBase.beginFill(colors[i])
                .drawRect(offsetWidth, 0, partSize, this.radius * 2)
                .endFill();
            offsetWidth += partSize;
        }

        this.fillFigureMask = this.game.add.graphics();
        this.fillFigureMask.beginFill(0xffffff);
        this.drawFigure(this.fillFigureMask);
        this.fillFigureMask.endFill();

        this.fillGroup.addChild(this.fillBase);
        this.fillGroup.addChild(this.fillFigureMask);

        this.percentMask = this.game.add.graphics();
        this.percentMask.clear().beginFill(0xffffff)
            .drawRect(0, 0, 0, this.radius*2)
            .endFill();

        this.fillGroup.addChild(this.percentMask);

        this.fillBase.mask = this.fillFigureMask;

        this.fillGroup.mask = this.percentMask;

        this.group.addChild(this.fillGroup);
    }

    update(percent) {
        if (percent != this.percent)
        {
            this.percent = percent;
            this.percentMask.clear();
            const width = Math.floor(this.fullWidth * percent);
            this.percentMask.beginFill(0xffffff).drawRect(0, 0, width, this.radius*2).endFill();
        }
        // this.updateScoreMeter(score);
        // this.updateAliveMeter(protestersAlive, protestersTotal);
        // this.updateMoodMeter(mood);
    }
    //
    // updateScoreMeter(value) {
    //     this.updateMeter({
    //         graphics: this.scoreMeter,
    //         value,
    //         width: this.width,
    //         height: 16,
    //         x: -this.width / 2,
    //         y: 0,
    //         colorThreshold: 30
    //     });
    // }

    // updateAliveMeter(protestersAlive, protestersTotal) {
    //     this.updateMeter({
    //         graphics: this.aliveMeter,
    //         value: 100 * protestersAlive / protestersTotal,
    //         width: this.width / 2 - 1,
    //         height: 6,
    //         x: -this.width / 2,
    //         y: 13,
    //         colorThreshold: 50
    //     });
    //
    //     // this.aliveNumber.setText(`${protestersAlive} / ${protestersTotal}`);
    // }

    // updateMoodMeter(value) {
    //     this.updateMeter({
    //         graphics: this.moodMeter,
    //         value,
    //         width: this.width / 2 - 1,
    //         height: 6,
    //         x: 1,
    //         y: 13,
    //         colorThreshold: 50
    //     });
    //
    //     // this.moodNumber.setText(Math.round(value));
    // }
    //
    // updateMeter({ graphics, value, width, height, x, y, colorThreshold }) {
    //     graphics.clear();
    //
    //     const color = Phaser.Color.RGBArrayToHex([
    //         this.game.math.clamp(1 + (colorThreshold - value) / (100 - colorThreshold), 0, 1),
    //         this.game.math.clamp(value / colorThreshold, 0, 1),
    //         0
    //     ]);
    //
    //     graphics.lineStyle(height, 0xffffff, 0.9);
    //     graphics.moveTo(x, y);
    //     graphics.lineTo(x + width, y);
    //
    //     graphics.lineStyle(height, color, 1);
    //     graphics.moveTo(x, y);
    //     graphics.lineTo(x + Math.round(width * value / 100), y);
    // }
    drawFigure(graphic){
        graphic
        // .lineStyle(this.lineWidth, this.color, 1)
            .moveTo(this.radius, 0)
            .lineTo(this.radius + this.width, 0)
            .arc(this.radius + this.width, this.radius, this.radius, -Math.PI/2, Math.PI/2)
            .lineTo(this.radius, this.radius*2)
            .arc(this.radius, this.radius, this.radius, Math.PI/2, 3*Math.PI/2)
            // .lineTo(this.radius, 0)
            .lineTo(this.radius + this.width, 0)
    }
}

export default ScoreMeter;

