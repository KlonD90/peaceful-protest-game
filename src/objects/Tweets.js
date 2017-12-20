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
    nickname: "tw_fb_pal",
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
const MARGIN_BOTTOM = 25;

/* размер аватарки, это квадрат */
const AVATAR_SIZE = 48;

/* отступ слева начиная от аватарки */
const MARGIN_LEFT = 25;

/* отсутп между аватаркой и текстом */
const AVATAR_TEXT_SPACING = 20;


const getTextStyle = width => ({
  font: '16px Arial',
  fill: 'white',
  wordWrap: true, 
  wordWrapWidth: width - (MARGIN_LEFT + AVATAR_SIZE + AVATAR_TEXT_SPACING)
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
    const tweet = tweets[~~Math.random()*tweets.length]
    this.showTweet(tweet.text, 'tw_'+tweet.nickname, option);
  }

  calcGroupPosition(textGameObject) {
    let y = 0;
    if (textGameObject._height < (AVATAR_SIZE + MARGIN_BOTTOM)) {
      y = - (AVATAR_SIZE + MARGIN_BOTTOM)     
    } else {
      y = -(textGameObject._height + MARGIN_BOTTOM)
    }

    return y;
  }

  pushToQueue(tweet, options) {
    this.queue.push({
      tweetData: {
        text: tweet.text,
        image: tweet.image,
      },
      anim: {
        visible: options.visible || 1000,
        fadeOut: options.fadeOut || 1000,
        fadeIn: options.fadeIn || 1000 
      }
    });
  }

  startQueue() {
    if (this.executing) return;
    this.executing = true;

    // const [h] = this.queue;
    const h = this.queue.shift();
    console.log('n.kozh start tweet', h);
    window._h = h;
    if (h) this.processTask(h.tweetData, h.anim);
  }
  processTask(tweet, aOptions) {
    var self = this; //wtf for arrow key
    const { text, image } = tweet;
    const {tween, group} = this.createHiddenTweet(text, image, aOptions);
    window._tween = tween;
    tween.onComplete.add(() => {
      console.log('n.kozh tween complete');

      const timer = this.game.time.create(true);
      window._timer = timer;
      timer.loop(5000, () => {
        console.log('n.kozh visible timer end');
        group.killAll();
        group.destroy();
        this.executing = false;
        this.startQueue();
        timer.destroy();
      }, this.game);
      timer.start();

    });  
    tween.start();
  
  }


  createHiddenTweet(text, image, options) {
    // window._tweenObj = this;
    const { width, height } = this.game;
    const tweet = this.game.add.group();
    window._tweetObj = tweet;

    window._text = text;
    window._image = image;

    const textGameObject = this.game.add.text(
      (MARGIN_LEFT + AVATAR_SIZE + AVATAR_TEXT_SPACING), 
      height, 
      text, 
      getTextStyle(width),
    );

    const avatar = this.game.add.sprite(
      0, 0, image
    );
    avatar.alignTo(textGameObject, Phaser.LEFT_TOP, AVATAR_TEXT_SPACING)
    
    const mask = game.add.graphics(MARGIN_LEFT+AVATAR_SIZE/2, height+AVATAR_SIZE/2);
    mask.beginFill(0xffffff);
    mask.drawCircle(0, 0, AVATAR_SIZE);
    avatar.mask = mask;

    tweet.add(mask);
    tweet.add(avatar);
    tweet.add(textGameObject);


    let newY = this.calcGroupPosition(textGameObject, tweet);
    tweet.alpha = 0;

    // tweet.y = newY;

    const tween = this.game.add.tween(tweet)
    tween.to(
      {y: newY, alpha: 1}, 1000, Phaser.Easing.Default, true
    )
    window._ftween = tween;
    // tween.start(); 
    return {tween, group: tweet};
  }

  _tweet(tweet, options={}) {
    this.pushToQueue(
      {
        text: tweet.text,
        image: tweet.image,
      }, options);

    this.startQueue();
  }

  tweet(text, image, options) {
    window._Tweets = this;
    console.log('n.kozh', text, image)
    this._tweet({
      text, image,
    }, options);
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

