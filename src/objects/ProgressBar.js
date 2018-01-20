
let CACHED_TEXTURE = null;

export default class ProgressBar{
    constructor({radius, width, color, lineWidth, game}){
      
        this.lastWidth = 0;
        this.game = game;
        this.graphics = this.game.add.group();

        this.fullWidth = width + radius * 2;
        this.graphics.y = -30;
        this.graphics.x = -this.fullWidth/2;
        
        this.radius = radius;
        this.width = width;
        this.color = color;
        this.lineWidth = lineWidth;

        let texture = CACHED_TEXTURE;
        
        if(texture == null){
            let restMainPart = this.game.add.graphics(0,0);

            restMainPart.beginFill(0xffffff);
            this.drawFigure(restMainPart);
            restMainPart.endFill();
            
            texture = restMainPart.generateTexture();
            restMainPart.destroy();
            CACHED_TEXTURE = texture;
            console.log("PROGRESS_CREATE TEXTURE");
        }

        let bg = game.add.sprite(0,0,texture);

        this.graphics.addChild(bg);//this.restMainPart);

        //this.fillPart = this.game.add.group();
        
        
        //this.fillMainPart = this.game.add.graphics().beginFill(this.color);
        //this.drawFigure(this.fillMainPart);
        //this.fillMainPart.endFill();

        this.fillTexture = new PIXI.Texture(texture.baseTexture,
                   new Phaser.Rectangle(0,0, width, radius * 2));

        this.fillSprite = game.add.sprite(0,0,this.fillTexture);
        //this.fillSprite.tint = this.color;
        
        this.graphics.addChild(this.fillSprite);


        this.cropRect = new Phaser.Rectangle(0, 0, width / 2, radius * 2);//width);
        this.fillSprite.crop(this.cropRect);
        
        //this.fillMainPart.destroy();

        //this.graphics.addChild(sprite);//this.restMainPart);


        //this.fillMask = this.game.add.graphics();

        //this.fillPart.addChild(this.fillSprite);

        //this.fillPart.addChild(this.fillMask);
        
        //this.fillSprite.mask = this.fillMask;
        //this.fillMainPart.mask = this.fillMask;
        this.graphics.visible = false;
        // this.restPart = this.game.add.group();


        // this.restPart.addChild(this.restMainPart);
        // this.restMask = this.game.add.graphics();
        // this.restPart.addChild(this.restMask);
        // this.restMainPart.mask = this.restMask;
        // this.restMask.clear().beginFill(0).drawRect(0,0,0,0).endFill();
    }
    update(percent){

        //this.restMask.clear();
        percent = this.game.math.clamp(percent, 0, 1);

        if (percent !== 0) {
            
            const fillWidth = Math.round(percent*this.fullWidth);
            if (this.lastWidth === fillWidth)
            {
                return;
            }
            
            this.graphics.visible = true;
            

            this.lastWidth = fillWidth;
            //this.fillMask.clear();
            //this.fillMask.beginFill(0).drawRect(0, 0, fillWidth, this.radius * 2).endFill();
            

            this.cropRect.width = fillWidth;
            this.fillSprite.updateCrop();

            // this.restMask.beginFill(0).drawRect(fillWidth, 0, restWidth, this.radius * 2).endFill();
            // this.restPart.x = fillWidth;
            // this.restPart.mask = this.restMask;
            // this.fillPart.mask = this.fillMask;
        }
        else
        {
            if (this.lastWidth === 0)
                return;
            
            this.lastWidth = 0;
            this.graphics.visible = false;

            // this.fillMask.beginFill(0).drawRect(0, 0, 0, this.radius * 2).endFill();
            // this.restMask.beginFill(0).drawRect(0, 0, 0, this.radius * 2).endFill();
        }
        // this.fillPart.mask = this.fillMask;
        // this.restPart.mask = this.restMask;
    }
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