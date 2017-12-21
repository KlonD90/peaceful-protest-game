const data = {
  /* arrest */
  0: {
    id: 0,
    name: "Денис Стяжкин",
    text: "#Москва на Белорусской задержали уже 10 человек",
    nickname: "styazshkin",
    type: "arrest"
  },
  1: {
    id: 1,
    name: "Грани.ру",
    text: "У Пушкина начали задерживать праздношатающихся",
    nickname: "granitweet",
    type: "arrest"
  },
  2: {
    id: 2,
    name: "Vyacheslav Gimadi",
    text: "Меня задержали. Шёл по Тверской в кроссовках. #ДимонОтветит и мы победим!",
    nickname: "vigimadi",
    type: "arrest"
  },
  3: {
    id: 3,
    name: "ОВД-Инфо",
    text: "В Москве на акциях против коррупции задержано более 130 человек. Задержания в настоящий момент продолжаются на Тверской.",
    nickname: "ovdinfo",
    type: "arrest"
  },
  4: {
    id: 4,
    name: "мутабор",
    text: "даже не дошла до митинга и уже в автозаке",
    nickname: "koshelyaeva",
    type: "arrest"
  },
  5: {
    id: 5,
    name: "Andrey Pivovarov",
    text: "Задержали депутата Максима Резника",
    nickname: "brewerov",
    type: "arrest"
  },
  6: {
    id: 6,
    name: "швец д",
    text: "круто (увезли)",
    nickname: "asilikedem",
    type: "arrest"
  },
  7: {
    id: 7,
    name: "Александр Паль",
    text: "В автозаке тепло.",
    nickname: "fb_pal",
    type: "arrest"
  },

  /* omon */

  8:{
    id: 8,
    name: "Ян Кателевский",
    text: "Жёстко повязали, сорвали пресс карта избили ногами и лубинками, повредили трахею когда душили, били головой об автозак",
    nickname: "ya_yanson",
    type: "omon"
  },
  9:{
    id: 9,
    name: "Юлия Галямина",
    text: "Омоновец дал мне кулаком в лицо. Мужа сильно избили, сломали очки",
    nickname: "galiamina",
    type: "omon"
  },
  10:{
    id: 10,
    name: "ОГОН",
    text: "Задержанных около Тверского бульвара бьют головой об автозак, и дубинкой по ногам. Автозак номер о0577 до этого был у Известий #12июня",
    nickname: "ogonwatch",
    type: "omon"
  },
  11:{
    id: 11,
    name: "The Insider",
    text: "Полиция уже избивает дубинками людей. Всех, без разбору.",
    nickname: "the_ins_ru",
    type: "omon"
  },
  12:{
    id: 12,
    name: "Алексей Кириленко",
    text: "Омон надел противогаз #ДеньРоссии",
    nickname: "kirilenko_a",
    type: "omon"
  },
  13:{
    id: 13,
    name: "Телеканал Дождь",
    text: "На вид мальчику не больше 12-13 лет.",
    nickname: "tvrain",
    type: "omon"
  },
  14:{
    id: 14,
    name: "Пётр Верзилов",
    text: "На  Пушкинский ОМОН двигается боевыми квадратами, валит людей на землю и задерживает.",
    nickname: "gruppa_voina",
    type: "omon"
  },
  15:{
    id: 15,
    name: "Пётр Верзилов",
    text: "Парня повалили на землю возле памятника Пушкину и бьют, заломив руки за спину",
    nickname: "gruppa_voina",
    type: "omon"
  },
  16:{
    id: 16,
    name: "ТоталитаризмЖараИюль",
    text: "ОМОН разбивает толпу",
    nickname: "kszhivago",
    type: "omon"
  },

  /* defended */

  17:{
    id: 17,
    name: "Plushev",
    text: "Толпа не отдаёт задержанных",
    nickname: "plushev",
    type: "defended"
  },

  /* star */

  18:{
    id: 18,
    name: "Алексей Абанин",
    text: "Большая куча вместе с @navalny идёт в сторону пушкинской от маяковской",
    nickname: "aban_in",
    type: "star"
  },
  19:{
    id: 19,
    name: "Рубанов Роман",
    text: "Навального задержали",
    nickname: "rrubanov",
    type: "star"
  },
  20:{
    id: 20,
    name: "Навальный",
    text: "Ребята, со мной все хорошо. Не надо меня отбивать. Идите по Тверской. Наша сегодняшняя тема - борьба с коррупцией",
    nickname: "navalny",
    type: "star"
  },

  21:{
    id: 21,
    name: "Пётр Верзилов",
    text: "Народ все прибывает на Пушкинскую, идут задержания",
    nickname: "gruppa_voina",
    type: "star"
  },
  22:{
    id: 22,
    name: "Пётр Верзилов",
    text: "Медиамагнат Пётр Верзилов был задержан на Пушкинской площади в Москве.",
    nickname: "gruppa_voina",
    type: "star"
  },
  23:{
    id: 23,
    name: "Пётр Верзилов",
    text: 'Уау, в нашем автозаке актёр Александр Паль, лауреат премии "Кинотавра" за лучшую мужскую роль в фильме "Тряпичный союз". Очень крутой фильм!',
    nickname: "gruppa_voina",
    type: "star"
  },

  24:{
    id: 24,
    name: "Илья Варламов",
    text: "Лимонова задержали",
    nickname: "varlamov",
    type: "star"
  },
  25:{
    id: 25,
    name: "Медиазона",
    text: "По предварительным данным, Лимонова повезут в ОВД по Тверскому району, остальных задержанных — в ОВД Красносельский",
    nickname: "mediazzzona",
    type: "star"
  },
  26:{
    id: 26,
    name: "Телеканал Дождь",
    text: "Илья Яшин оказался в автозаке, хотя даже не успел совершить ничего провокационного и незаконного. Яшин рассказал, как его задержали, и кто оказался с ним в автозаке",
    nickname: "tvrain",
    type: "star"
  },
  

  /* description */

  27:{
    id: 27,
    name: "Журавлева",
    text: "на тверской заставе омон, космонавты в черном, спецтехника и ШТАБ",
    nickname: "zhuravleva",
    type: "description",
  },
  28:{
    id: 28,
    name: "Plushev",
    text: "Над Тверской вертолёт",
    nickname: "plushev",
    type: "description",
  },
  29:{
    id: 29,
    name: "ОГОН",
    text: "На Охотном ряду выстаиваются сотрудники и устанавливают ограждения.",
    nickname: "ogonwatch",
    type: "description",
  },

  /* journalist_arrest */

  30:{
    id: 30,
    name: "Alec Luhn",
    text: "I took a photo of police detaining a guy at @navalny protest so they detained me as well even though I repeatedly said I was a journalist",
    nickname: "asluhn",
    type: "journalist_arrest"
  },
  31:{
    id: 31,
    name: "Feldman",
    text: "меня задержали на Пушкинской площади",
    nickname: "evgenyfeldman",
    type: "journalist_arrest"
  },

};


/* отступ твита снизу. Если текст выше аватарки от текста, если аватарка выше от аватарки */
const MARGIN_BOTTOM = 5;

/* размер аватарки, это квадрат */
const AVATAR_SIZE = 48;

/* отступ слева начиная от аватарки */
const MARGIN_LEFT = 25;

/* отсутп между аватаркой и текстом */
const AVATAR_TEXT_SPACING = 20;


const getTextStyle = width => ({
  font: '16px William Text',
  // text.font = 'Revalia';
  fill: 'white',
  wordWrap: true, 
  wordWrapWidth: width - (MARGIN_LEFT + AVATAR_SIZE + AVATAR_TEXT_SPACING),
  // backgroundColor: 'rgba(0,255,0,0.25)',
});
class Tweets {
  constructor(game) {
    this.game = game;
    this.queue = [];
    this.executing = false;
  }

  find(selector) {
    const filtered = Object.values(data);
    const sKeys = Object.keys(selector);
    if (sKeys.length === 1 && typeof selector['id'] !== 'undefined')
      return [data[selector['id']]];

    return filtered.filter(tw => {
      let  st = false;
      Object.keys(selector).forEach(key => {
        if (tw[key] == selector[key]) st = true;
        else st = false;
      });
      return st;
    });
  }

  rTweet(selector, options) {
    const tweets = this.find(selector);
    const tweet = tweets[~~Math.random()*tweets.length];
    console.log('n.kozh rTweet called', tweet);
    this._tweet({
      text: tweet.text,
      name: tweet.name,
      image: 'tw_'+tweet.nickname
    }, options);
  }

  _tweet(tweet, options={}) {
    console.log('n.kozh _tweet called', tweet);
    this.pushToQueue(
      {
        text: tweet.text,
        image: tweet.image,
        name: tweet.name,
      }, options);

    this.startQueue();
  }

  tweet(text, image, options) {
    window._Tweets = this;
    console.log('n.kozh tweet called', text, image)
    this._tweet({
      text, image,
    }, options);
  }

  calcGroupPosition(textGameObject) {
    let y = 0;
    if (textGameObject._height < (AVATAR_SIZE + MARGIN_BOTTOM)) {
      y = - (AVATAR_SIZE + MARGIN_BOTTOM)     
    } else {
      y = -(textGameObject._height + MARGIN_BOTTOM)
    }

    return y-20;
  }

  pushToQueue(tweet, options) {
    console.log('n.kozh pushToQueue called start');
    this.queue.push({
      tweetData: {
        text: tweet.text,
        image: tweet.image,
        name: tweet.name,
      },
      anim: {
        visible: options.visible || 1000,
        fadeOut: options.fadeOut || 1000,
        fadeIn: options.fadeIn || 1000 
      },
      custom: {
        fontSize: options.fontSize
      }
    });
    console.log('n.kozh pushToQueue called end');
  }

  startQueue() {
    console.log('n.kozh start Queue executing status', this.executing);
    if (this.executing) return;
    
    // const [h] = this.queue;
    const h = this.queue.shift();
    window._h = h;
    console.log('n.kozh before h')
    console.log('n.kozh h ', h);
    console.log('n.kozh after h');
    // console.log('h.kozh queue len', this.queue.length);
    if (h) this.processTask(h.tweetData, h.anim, h.custom);
  }
  processTask(tweet, aOptions, style) {
    this.executing = true;

    console.log('n.kozh start tweet', tweet);
    var self = this; //wtf for arrow key
    const { text, image, name } = tweet;
    const {tween, group, tweetGroup, bg} = this.createHiddenTweet(text, image, name, aOptions, style);
    window._tween = tween;
    // return;
    tween.onComplete.add(() => {
      console.log('n.kozh tween complete');


      const timer = this.game.time.create(true);
      window._timer = timer;
      timer.loop(aOptions.visible, () => {
        console.log('n.kozh visible timer end');
        const ntimer = this.game.time.create(true);

        /* запускаем следующий твит */
        // ntimer.loop(400, () => {
        ntimer.loop(aOptions.fadeOut*0.7, () => {
          console.log('n.kozh show next tweet');
          this.executing = false;
          this.startQueue();
          ntimer.destroy();
        }, this.game);
        ntimer.start();


        /* скрываем содержимое твита */
        const ntween = this.game.add.tween(tweetGroup)
        ntween.to({
          y: -300, alpha: 0
        // }, 800, Phaser.Easing.Default, true)
        }, aOptions.fadeOut, Phaser.Easing.Default, true)
        ntween.onComplete.add(() => {
          tweetGroup.killAll();
          tweetGroup.destroy();
        });
        ntween.start()

        /* скрываем подложку твита */
        const bgtween = this.game.add.tween(bg)
        bgtween.to({
          alpha: 0
        }, aOptions.fadeOut*1.2, Phaser.Easing.Default, true)
        bgtween.onComplete.add(() => {
          // group.killAll();
          // group.destroy();
          // this.executing = false;
          // this.startQueue();
        });
        bgtween.start()
        

        timer.destroy();
      }, this.game);
      timer.start();

    });  
    tween.start();
  
  }

  createTwBackground(tweetGroup) {
    // if (this.background) return this.background;

    const { width, height } = this.game;
    const bounds = tweetGroup.getBounds();
    // debugger;
    // const bitmap = this.game.add.bitmapData(width, (height - bounds.y));
    // const bitmap = this.game.add.bitmapData(width, bounds.height+(MARGIN_BOTTOM*2));
    const bitmap = this.game.add.bitmapData(width, bounds.height+(MARGIN_BOTTOM*2));
    bitmap.fixedToCamera = true;
    // const bounds = group.getBounds();
    // bitmap.addToWorld(50, 50, 0, 0);
    var y = 0;
    for(var i=0; i<100; i++)   {
      const c = Phaser.Color.interpolateColor(0, 0, 100, i, (100-i)/100);
      bitmap.rect(0, y, width, 2, 'rgba(0,0,0,'+ 0.9*(i/100) +')');
      y+=2;
    }
    window._bitmap = bitmap;
    // var spriteBg = this.game.add.sprite(0, bounds.y, bitmap);
    var spriteBg = this.game.add.sprite(0, height-MARGIN_BOTTOM, bitmap);
    spriteBg.fixedToCamera = true;

    // this.background = spriteBg;
    return spriteBg;
  }


  createHiddenTweet(text, image, name, options, style) {
    // window._tweenObj = this;
    const { width, height } = this.game;
    const tweet = this.game.add.group();
    // tweet.fixedToCamera = true;

    
    window._tweetObj = tweet;

    window._text = text;
    window._image = image;


    let nameGameObject;
    let textGameObject;
    if (name) {
      nameGameObject = this.game.add.text(
        (MARGIN_LEFT + AVATAR_SIZE + AVATAR_TEXT_SPACING),
        height, 
        name, {
          font: '14px abc',
          fill: '#fcfcfc',
        });
      // debugger;
      nameGameObject.font = 'Graphik LC';
      nameGameObject.fixedToCamera = true;
      // window._nameGameObject = nameGameObject;

      textGameObject = this.game.add.text(
        (MARGIN_LEFT + AVATAR_SIZE + AVATAR_TEXT_SPACING), 
        height+20, 
        text, 
        getTextStyle(width),
      );

      textGameObject.font = 'William Text';
      textGameObject.fixedToCamera = true;
    } else {
      textGameObject = this.game.add.text(
        (MARGIN_LEFT + AVATAR_SIZE + AVATAR_TEXT_SPACING), 
        height, 
        text, 
        getTextStyle(width),
      );

      textGameObject.font = 'William Text';
      textGameObject.fixedToCamera = true;
    }

    if (style.fontSize) {
      textGameObject.fontSize = style.fontSize;
    }

    

    const avatar = this.game.add.sprite(
      0, 0, image
    );
    if (name) {
      avatar.alignTo(nameGameObject, Phaser.LEFT_TOP, AVATAR_TEXT_SPACING)
    } else {
      avatar.alignTo(textGameObject, Phaser.LEFT_TOP, AVATAR_TEXT_SPACING)
    }
    // avatar.alignTo(nameGameObject, Phaser.LEFT_TOP, AVATAR_TEXT_SPACING)
    avatar.fixedToCamera = true;
    
    const mask = game.add.graphics(MARGIN_LEFT+AVATAR_SIZE/2, height+AVATAR_SIZE/2);
    mask.beginFill(0xffffff);
    mask.drawCircle(0, 0, AVATAR_SIZE);
    mask.fixedToCamera = true;
    avatar.mask = mask;

    tweet.add(mask);
    tweet.add(avatar);
    if (name) tweet.add(nameGameObject);
    tweet.add(textGameObject);

    // window._mask =mask;
    // window._avatar = avatar
    // window._textGameObject = textGameObject;

    // const bg = this.createTwBackground(tweet);

    // tweet.add(bg);

    let newY = this.calcGroupPosition(textGameObject, tweet);
    // tweet.alpha = 0;

    window._group = tweet;

    // tweet.y = newY;

    const bg = this.createTwBackground(tweet);
    // tweet.add(bg);

    avatar.bringToTop();
    textGameObject.bringToTop();
    if (name) nameGameObject.bringToTop();

    const all = this.game.add.group();
    all.alpha = 0;
    all.add(bg);
    all.add(tweet);

    // debugger;
    // const tween = this.game.add.tween(tweet)
    const tween = this.game.add.tween(all)
    tween.to(
      {y: newY, alpha: 1}, options.fadeIn, Phaser.Easing.Default, true
    )
    window._ftween = tween;
    window._gall = all;
    // tween.start(); 
    // return {tween, group: tweet};
    return {tween, group: all, tweetGroup: tweet, bg: bg};
  }




  showTweet(text, image, options) {
    const tweet = this.game.add.group();
    
    const { width, height } = game.game;
    const avatar = this.game.add.sprite(
      0, 0, image
    );

    const mask = game.add.graphics(MARGIN_LEFT+AVATAR_SIZE/2, height+AVATAR_SIZE/2);
    mask.beginFill(0xffffff);
    mask.drawCircle(0, 0, AVATAR_SIZE);
    avatar.mask = mask;
    window._mask = mask;

    // this.game.input.addMoveCallback((pointer, x, y) => {
    //   console.log('x', x, 'y', y);
    //   mask.x = x;
    //   mask.y = y;
    // }, this);
    

    window._avatar = avatar;

    const textGameObject = this.game.add.text(
      (MARGIN_LEFT + AVATAR_SIZE + AVATAR_TEXT_SPACING), 
      height, 
      text, {
        font: '16px Arial',
        fill: 'white',
        wordWrap: true, 
        wordWrapWidth: width - (MARGIN_LEFT + AVATAR_SIZE + AVATAR_TEXT_SPACING)
      });
    window._textGameObject = textGameObject;
    

    avatar.alignTo(textGameObject, Phaser.LEFT_TOP, AVATAR_TEXT_SPACING)

    window._tweetGroup = tweet;
    
    // if (textGameObject._height < (AVATAR_SIZE + MARGIN_BOTTOM)) {
    //   tweet.y = - (AVATAR_SIZE + MARGIN_BOTTOM)     
    // } else {
    //   tweet.y = -(textGameObject._height + MARGIN_BOTTOM)
    // }

    let t = this.calcGroupPosition(textGameObject, tweet);;
    // tweet.y = t;



    tweet.add(mask);
    tweet.add(avatar);
    tweet.add(textGameObject);

    tweet.alpha = 0;
    
    const tween = this.game.add.tween(tweet)


    tween.to(
      {y: t, alpha: 1}, 1000, Phaser.Easing.Default, true
    )

    this.animate = true;
    tween.start();
  }

} 

export default Tweets;

