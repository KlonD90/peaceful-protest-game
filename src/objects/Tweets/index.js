import data from './data.js';
import DefaultBehavior from './DefaultBehavior.js';
import ManuallyBehaviour from './ManuallyBehavior.js';
import Tweet from './Tweet.js';


class Tweets {
  constructor(game) {
    this.game = game;
    this.queue = [];
    this.executing = false;
    this.showedTweet = [];
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

  resetShowedTweets() {
    this.showedTweet = [];
  }

  rTweet(selector, options) {
    const tweets = this.find(selector);
    let tweet;
    if (tweets.length > 0) {
      // debugger;
      const tweetsIds = tweets.map(tw => tw.id).filter(id => this.showedTweet.indexOf(id) < 0);
     // console.log('n.kozh tweets_ids', tweetsIds);
      if (tweetsIds.length == 0) {
        console.warn('Твиты такого типа уже все показаны');
        return null
      }

      const tweet_id = tweetsIds[this.game.rnd.integerInRange(0, tweetsIds.length-1)];
      this.showedTweet.push(tweet_id);
      tweet = tweets.find(tw => tw.id === tweet_id);
    }
   //console.log('n.kozh rTweet called', tweet);
    return this._tweet({
      text: tweet.text,
      name: tweet.name,
      image: tweet.nickname
    }, options);
  }

  _tweet(tweet, options={}) {
    //console.log('n.kozh _tweet called', tweet);
    const tweetInstance = this.createTweet(tweet, options);
    tweetInstance.destroy.add(() => {
      this.removeFromQueue(tweetInstance);
    });
    //console.log('tw instance', tweetInstance);
    if (tweetInstance.behavior instanceof ManuallyBehaviour) {
      this.pushToQueue(tweetInstance, true);
    } else {
      this.pushToQueue(tweetInstance);
    }
    this.startQueue();
    return tweetInstance;
  }

  tweet(text, image, options) {
    window._Tweets = this;
    //console.log('n.kozh tweet called', text, image)
    return this._tweet({
      text, image,
    }, options);
  }

  createTweet(data, options) {
    const anim = {
      visible: options.visible || 1000,
      fadeOut: options.fadeOut || 500,  
      fadeIn: options.fadeIn || 1000 
    };
    const custom = {
      fontSize: options.fontSize
    };

    const behavior = options.behavior || DefaultBehavior;

    const tweet = new Tweet(data, anim, custom);
    tweet.set('game', this.game);
    tweet.setBehavior(behavior);

    tweet.build();
    return tweet;
  }
  
  pushToQueue(tweetInstance, toHead=false) {
    if (toHead) {
      this.queue.unshift(
        tweetInstance
      );
    } else {
      this.queue.push(
        tweetInstance
      )
    }
  }

  removeFromQueue(tweetInstance){
    for (let i=0; i<this.queue.length; i++){
      if (this.queue[i] === tweetInstance){
        this.queue.splice(i, 1);
      }
    }
  }

  startQueue() {
    //console.log('n.kozh start Queue executing status', this.executing);
    if (this.executing) return;
    
    if (this.queue.length) {
      this.processTask(
        this.queue.shift()
      );
    }
  }
  
  processTask(tweet) {
    this.executing = true;
    this.currentTweet = tweet;
    tweet.show();

    tweet.nextTweet.add(() => {
      this.executing = false;
      this.startQueue();
    });
  }
} 

export default Tweets;

