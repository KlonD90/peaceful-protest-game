import { lagrange } from './utils';

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


export default class BaseTweet {
  constructor(data, animOptions, styles) {
    this.data = data;
    this.animOptions = animOptions;
    this.styles = styles;

    this.hided = new Phaser.Signal();
    this.showed = new Phaser.Signal();
    this.nextTweet = new Phaser.Signal();
    this.destroy = new Phaser.Signal();
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
    

    const avatar = this.game.add.sprite(
      0, 0, image
    );
    if (name) {
      avatar.alignTo(nameGameObject, Phaser.LEFT_TOP, AVATAR_TEXT_SPACING)
    } else {
      avatar.alignTo(textGameObject, Phaser.LEFT_TOP, AVATAR_TEXT_SPACING)
    }
    avatar.fixedToCamera = true;
    
    const mask = this.game.add.graphics(MARGIN_LEFT+AVATAR_SIZE/2, height+AVATAR_SIZE/2);
    mask.beginFill(0xffffff);
    mask.drawCircle(0, 0, AVATAR_SIZE);
    mask.fixedToCamera = true;
    avatar.mask = mask;

    tweet.add(mask);
    tweet.add(avatar);
    if (name) tweet.add(nameGameObject);
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
    this.groupAll = all;



    this.showedY = calcGroupPosition(textGameObject, tweet);
    return this;
  }

  createTwBackground() {
    const { width, height } = this.game;
    const bounds = this.groupTweet.getBounds();
    const { height: groupH } = this.groupTweet;

    const bitmapH = groupH+(MARGIN_BOTTOM*2)+40;
    const bitmap = this.game.add.bitmapData(width, bitmapH);
    bitmap.fixedToCamera = true;
    const aplhaIterp = [
      {x: 0, y: 0},
      {x: bitmapH*30/100, y: 0.3},
      {x: bitmapH*80/100, y: 0.5},
      {x: bitmapH, y: 0.7},

    ]
    for (let y=0; y<(bitmapH); y+=2) {
      // bitmap.rect(0, y, width, 2, 'rgba(0,0,0,'+ lagrange(aplhaIterp, y) +')');
      bitmap.rect(0, y, width, 2, 'rgba(0,0,0,'+ 0.2 +')');
    }

    // var spriteBg = this.game.add.sprite(0, height-MARGIN_BOTTOM-20, bitmap);
    var spriteBg = this.game.add.sprite(0, height-MARGIN_BOTTOM-13, bitmap);
    spriteBg.fixedToCamera = true;

    return spriteBg;
  }

  destroy() {
    this.groupAll.killAll();
    this.groupAll.destroy();
  }

  show() {
    // debugger;
    this.behavior.show();
  }

  hide() {
    this.behavior.hide();
  }

}