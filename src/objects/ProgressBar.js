
//let CACHED_TEXTURE = null;

export default class ProgressBar{
    constructor({radius, width, color, lineWidth, game, sprite_type, fill_sprite_type = null}){
      
        this.lastWidth = 0;
        this.game = game;
        this.graphics = this.game.add.group();

        this.fullWidth = width;// + radius * 2;
        //this.width = width;
        //this.height = radius * 2
        
        //this.radius = radius;
        //this.width = width;
        this.color = color;
        //this.lineWidth = lineWidth;
        
        let s = sprite_type ? sprite_type :"small_progress";

        let bg = game.add.sprite(0,0,"ALL_IMAGES",s);

        this.graphics.addChild(bg);
        
        let fillS = fill_sprite_type ? fill_sprite_type : s;

        this.fillSprite = game.add.sprite(0,0,"ALL_IMAGES", fillS);

        if(this.color)
            this.fillSprite.tint = this.color; 
        
        this.graphics.addChild(this.fillSprite);

        this.fullWidth = this.fillSprite.width;// + radius * 2;
      
        this.graphics.y = -30;
        this.graphics.x = -this.fillSprite.width/2;
       

        this.cropRect = new Phaser.Rectangle(0, 0, 0, this.fillSprite.height);//width);
        this.fillSprite.crop(this.cropRect);

        this.graphics.visible = false;
    }

    update(percent){
        
        percent = this.game.math.clamp(percent, 0, 1);
        
        if(this.color && this.fillSprite.tint !== this.color)
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