
//let CACHED_TEXTURE = null;

export default class ProgressBar{
    constructor({radius, width, color, lineWidth, game, sprite_type}){
      
        this.lastWidth = 0;
        this.game = game;
        this.graphics = this.game.add.group();

        this.fullWidth = width;// + radius * 2;
        this.graphics.y = -30;
        this.graphics.x = -this.fullWidth/2;
        
        //this.radius = radius;
        //this.width = width;
        this.color = color;
        //this.lineWidth = lineWidth;
        
        let s = sprite_type ? sprite_type :"small_progress";

        let bg = game.add.sprite(0,0,"ALL_IMAGES",s);

        this.graphics.addChild(bg);

        this.fillSprite = game.add.sprite(0,0,"ALL_IMAGES", s);
        this.fillSprite.tint = this.color;
        
        this.graphics.addChild(this.fillSprite);


        this.cropRect = new Phaser.Rectangle(0, 0, width / 2, radius * 2);//width);
        this.fillSprite.crop(this.cropRect);

        this.graphics.visible = false;
    }

    update(percent){
        
        percent = this.game.math.clamp(percent, 0, 1);
        
        if(this.fillSprite.tint !== this.color)
             this.fillSprite.tint = this.color;

        if (percent !== 0) {
            
            const fillWidth = Math.round(percent*this.fullWidth);
            if (this.lastWidth === fillWidth)
            {
                return;
            }
            
            this.graphics.visible = true;
            

            this.lastWidth = fillWidth;

            this.cropRect.width = fillWidth;
            this.fillSprite.updateCrop();
        }
        else
        {
            
            this.lastWidth = 0;
            this.graphics.visible = false;
        }
    }
}