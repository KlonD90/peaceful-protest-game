//import { lagrange } from './utils';

import {MARGIN_BOTTOM, AVATAR_SIZE, MARGIN_LEFT, AVATAR_TEXT_SPACING} from './const.js';

const calcGroupPosition = (textGameObject) => {
  let y = 0;
  if (textGameObject._height < (AVATAR_SIZE + MARGIN_BOTTOM)) {
    y = - (AVATAR_SIZE + MARGIN_BOTTOM)     
  } else {
    y = -(textGameObject._height + MARGIN_BOTTOM)
  }

  return y-20;
}

const getTextStyle = width => ({
  font: '16px William Text',
  fill: 'white',
  wordWrap: true, 
  wordWrapWidth: width - (MARGIN_LEFT + AVATAR_SIZE + AVATAR_TEXT_SPACING),
});

let TWEET_CACHED_BITMAP = null;

export default class BaseTweet {
  constructor(data, animOptions, styles) {
    this.data = data;
    this.animOptions = animOptions;
    this.styles = styles;

    this.hided = new Phaser.Signal();
    this.showed = new Phaser.Signal();
    this.nextTweet = new Phaser.Signal();
    this.destroy = new Phaser.Signal(); // Молодец! Оверайд destory
    
    

    //destroy after hide
    this.hided.add(() => {
      this.destroy.dispatch();
    });

    this.destroy.add(() => {
      this.groupAll.killAll();
      this.groupAll.destroy();
      console.log("TWEET:", "destroy");
    });


  }
  set(key, val) {
    this[key] = val;
  }
  
  setBehavior(Strgy) {

    this.behavior = new Strgy();
    this.behavior.set('tweet', this);
  
  }

  build() {
    const { text, image, name } = this.data;

    const { width, height } = this.game;
    const tweet = this.game.add.group();

    let nameGameObject;
    let textGameObject;
    if (name) {
      nameGameObject = this.game.add.text(
        (MARGIN_LEFT + AVATAR_SIZE + AVATAR_TEXT_SPACING),
        height, 
        name, {
          font: '14px abc',
          // fill: '#fcfcfc',
          fill: '#ddecff',
        });
      nameGameObject.font = 'Graphik LC, Arial';
      nameGameObject.resolution = window.devicePixelRatio || 1;
      nameGameObject.fixedToCamera = true;

      textGameObject = this.game.add.text(
        (MARGIN_LEFT + AVATAR_SIZE + AVATAR_TEXT_SPACING), 
        height+20, 
        text, 
        getTextStyle(width),
      );
      textGameObject.resolution = window.devicePixelRatio || 1;
      textGameObject.font = 'Arial';
      textGameObject.fixedToCamera = true;

    } else {
      
      textGameObject = this.game.add.text(
        (MARGIN_LEFT + AVATAR_SIZE + AVATAR_TEXT_SPACING), 
        height, 
        text, 
        getTextStyle(width),
      );
      textGameObject.resolution = window.devicePixelRatio || 1;
      textGameObject.font = 'Arial';
      textGameObject.fixedToCamera = true;
    }

    if (this.styles.fontSize) {
      textGameObject.fontSize = this.styles.fontSize;
    }
    

    const avatar = this.game.add.sprite( 0, 0, "ALL_IMAGES", image);
    
    if (name) {
      avatar.alignTo(nameGameObject, Phaser.LEFT_TOP, AVATAR_TEXT_SPACING)
    } else {
      avatar.alignTo(textGameObject, Phaser.LEFT_TOP, AVATAR_TEXT_SPACING)
    }

    avatar.fixedToCamera = true;
   // const mask = this.game.add.sprite(avatar.x, avatar.y, "ALL_IMAGES","tweet_mask");
    
    // mask Not working in current version
    //const mask = this.game.add.graphics(MARGIN_LEFT+AVATAR_SIZE/2, height+AVATAR_SIZE/2);
    //const mask = this.game.add.graphics(avatar.x + AVATAR_SIZE/2, avatar.y + AVATAR_SIZE/2);
    //mask.beginFill(0xffffff);
    //mask.drawCircle(0, 0, AVATAR_SIZE);
    //mask.endFill();

    //mask.fixedToCamera = true;
  
    //avatar.mask = mask;
    //tweet.add(mask);
    tweet.add(avatar);

    if (name) {
      //nameGameObject.cacheAsBitmap = true;
      tweet.add(nameGameObject);
    }

    //textGameObject.cacheAsBitmap = true;
    tweet.add(textGameObject);
    this.groupTweet = tweet;
    


    avatar.bringToTop();
    
    textGameObject.bringToTop();
    if (name) nameGameObject.bringToTop();

    const bg = this.createTwBackground(tweet);
    this.bg = bg;

    const all = this.game.add.group();
    all.alpha = 0;
    all.add(bg);
    all.add(tweet);
    
    //enable cahing of bitmap

   // all.cacheAsBitmap = true;
    //console.log("TEXT GROUP:" + name + " CACHED!");
    this.groupAll = all;
    this.showedY = calcGroupPosition(textGameObject, tweet);
    return this;
  }

  createTwBackground() {
    const { width, height } = this.game;
    const bounds = this.groupTweet.getBounds();
    const { height: groupH } = this.groupTweet;

    const bitmapH = groupH+(MARGIN_BOTTOM*2)+40;
    
    let bitmap = TWEET_CACHED_BITMAP;
    if(!bitmap){
      bitmap = this.game.add.bitmapData(width, bitmapH);
       
      bitmap.fixedToCamera = true;
    //for (let y=0; y<(bitmapH); y+=2) {
      // bitmap.rect(0, y, width, 2, 'rgba(0,0,0,'+ lagrange(aplhaIterp, y) +')');
      bitmap.rect(0, 0, width, bitmapH, 'rgba(0,0,0,'+ 0.2 +')');
    //}
      TWEET_CACHED_BITMAP = bitmap;
    }
    // var spriteBg = this.game.add.sprite(0, height-MARGIN_BOTTOM-20, bitmap);
    var spriteBg = this.game.add.sprite(0, height-MARGIN_BOTTOM-13, bitmap);
    spriteBg.height = bitmapH;
    spriteBg.fixedToCamera = true;

    return spriteBg;
  }

  destroy() {
    this.groupAll.killAll();
    this.groupAll.destroy();
    console.log("TWEET:", "destroy");
  }

  show() {
    // debugger;
    this.behavior.show();
  }

  hide() {
    this.behavior.hide();
  }

}