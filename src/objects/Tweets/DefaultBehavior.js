export default class DefaultBehavior {
  constructor() {
    this.fl_hide = true;
    this.showed = false;
  }
  set(k,v) {this[k] = v}

  show() {
    this.showed = true;
    if (this.fl_hide === false) return;
    this.fl_hide = false;

    const { animOptions, game } = this.tweet;
    this.fadeIn();
    this.tweet.showed.add(() => {
      // показываем visible секунд
      game.time.events.add(animOptions.visible, () => {
        // debugger;
        this.hide();
      }, game)
    });
  }
  fadeIn() {
    const { tweet } = this;
    const { animOptions, game } = tweet;
    const tween = tweet.game.add.tween(tweet.groupAll);
    tween.to(
      {y: tweet.showedY, alpha: 1}, animOptions.fadeIn, Phaser.Easing.Default, true
    );

    tween.onComplete.add(() => {
      tweet.showed.dispatch();

    });
    tween.start();
  }

  hide() {
    if (!this.showed)
    {
        this.tweet.destroy.dispatch();
    }
    if (this.fl_hide === true) return;
    this.fl_hide = true;

    this.fadeOut();
  }
  fadeOut() {
    const { animOptions, game } = this.tweet;

    // показываем следующий твит раньше, чем скрылся
    // текущий на 70 процентах от всего времени
    game.time.events.add(animOptions.fadeOut*0.7, () => {
      this.tweet.nextTweet.dispatch();
    });


    const tweetTween = game.add.tween(this.tweet.groupTweet);
    tweetTween.to({
      y: -100, alpha: 0,
    }, animOptions.fadeOut, Phaser.Easing.Default, true);

    const bgTween = game.add.tween(this.tweet.bg);
    bgTween.to({
      alpha: 0,
    }, animOptions.fadeOut*1.2, Phaser.Easing.Default, true);

    bgTween.onComplete.add(() => {
      // испускаем событие об оконачательном скрытии
      this.tweet.hided.dispatch();
     // this.tween.destroy();
    });
  }
}