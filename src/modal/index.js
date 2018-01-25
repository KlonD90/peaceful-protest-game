import Handlebars from 'handlebars/dist/handlebars.js';
import axios from 'axios';

import templateSource from 'raw-loader!./modal.html';
import style from 'style-loader!css-loader!./style.css';
import sha256 from './sha256.js';

// import font from  'style-loader!css-loader!./font.css';
if (process.env.NODE_ENV === 'development')
  require('style-loader!css-loader!./font.css');

const HOST_URL = 'https://v3-stage.zona.media';
// const HOST_URL = 'http://localhost:8081';
const template = Handlebars.compile(templateSource);

const hash = ({score, name, email}) => {
  const string = `${score}${name}${email}0795782855`;
  return sha256.hash(string);
}

const getScore = () => {
  return axios.get(`${HOST_URL}/game_score?rnd=${Math.random()}`);
}

const sendNewScore = (formData) => {
  if (!validate(formData))
    return Promise.reject('validation error');
  const cats = hash(formData);
  return axios({
    method: 'post',
    url: `${HOST_URL}/game_score`,
    data: {
      score: formData.score,
      nick: formData.name,
      contact: formData.email,
      cats,
    }
  });
}
const sendNewScoreFake = (formData) => {
  if (validate(formData)) {
    return Promise.resolve();
  }
  return Promise.reject();
};

const validate = (formData) => {
  const nameEl = document.querySelector('[data-js-selector="participated-form-name"]');
  const emailEl = document.querySelector('[data-js-selector="participated-form-email"]');
  if (typeof fomData === 'undefined')
    formData = {
      name: nameEl.value,
      email: emailEl.value      
    }

  let res = true;
  if (formData.name.length === 0) {
    nameEl.className += ' invalid';
    res = false;
    console.log('name add invalid')
  } else {
    console.log('name remove invalid')
    nameEl.className = nameEl.className.replace(/invalid/gi, '');
  }
  
  let emailValid = (formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== null);
  if(formData.email.length === 0 || !emailValid) {
    emailEl.className += ' invalid';
    res = false;
  } else {
    emailEl.className = emailEl.className.replace(/invalid/gi, '');
  }

  return res;
}
const scoreToTime = function(sec) {
    const h = ~~(sec/3600);
    const m = ~~(sec/60)-h*60;
    const s = ~~(sec%60);
    return `${h>9?h:'0'+h}:${m>9?m:'0'+m}:${s>9?s:'0'+s}`;
};

Handlebars.registerHelper('parseScoreTime', scoreToTime);

Handlebars.registerHelper('plus', function(a, b) {
  return a+b;
});

const resultTypes = {
  'success': {
    title: 'Отличный митинг! Вы бодры и на свободе',
    text: (ratingPos, time) => {
      const ratingMap = ['первое', 'второе', 'третье']
      if (ratingPos < 3) {
        return `Поздравляем! Ваше время ${time}. Вы заняли ${ratingMap[ratingPos]} место в сегодняшнем топе, укажите свою почту для участия в розыгрыше призов.`;
      }

      return `Да вы опытный активист! Ваше время ${time}. Попробуйте сыграть снова и набрать очки еще быстрее, тогда вы сможете выиграть наш приз — ватник «Будет хуже».`;
    },
    background: require('../assets/win_small_500.png'),
  },
  'arrested': {
    title: 'Вас свинтили. Скучайте в автозаке',
    text: (pos, time) => `Агитируйте аккуратнее, и тогда полиция не обратит на вас внимания. 
    Используйте shift, чтобы передвигаться быстрее и ускользать из лап Нацгвардии.`,
    background: require('../assets/lose_small_500.png'),
  },
  'desolation': {
    title: 'Попробуйте одиночные пикеты',
    text: (pos, time) => `Вы остались в одиночестве. Ваш протест был настолько пассивным, что вас просто никто не заметил.`,
    background: require('../assets/desolation_small_500.png'),
  }
}

const _show = (context, currentScore, cb) => {
  // debugger;
    console.log('show context', context);
    console.log('show score', currentScore);
  const html = template(context);
  const fragment = document.createElement('div');
  fragment.innerHTML = html;
  document.body.appendChild(fragment);

  if(context.scores.find(s => s.showForm)){
    const formEl = document.querySelector('[data-js-selector="participated-form"]');
    const nameEl = document.querySelector('[data-js-selector="participated-form-name"]');
    const emailEl = document.querySelector('[data-js-selector="participated-form-email"]');

    nameEl.onkeyup = validate;
    emailEl.onkeyup = validate;
    formEl.onsubmit = function(e) {
      e.preventDefault();

      const formData = {
        name: nameEl.value,
        email: emailEl.value,
        score: currentScore,
      };
      // sendNewScoreFake(formData)
      sendNewScore(formData)
        .then((res) => {
          const c = context.scores.find(s => s.current);
          c.nick = formData.name;
          c.contact = formData.email;
          c.showForm = false;
          document.body.removeChild(fragment);
          _show(context, currentScore, cb);
        });

      return false;
    }

  }
  document.querySelector('[data-js-selector="replay-button"]')
    .onclick = function() {
      document.body.removeChild(fragment);
      cb();
    };
}



const show = (type, currentScore, cb) => {
// export default (type, currentScore, cb) => {
  let context = {};
  for (var p in resultTypes[type])
  {
    context[p] = resultTypes[type][p];
  }

  getScore().then(({data: scores}) => {
    if (type === 'success') {
      for(var i=0; i<scores.length; i++) {
        if (scores[i].score > currentScore) {
          break;
        }
      }
      scores.splice(i, 0, { showForm: true, current: true, score: currentScore });
    }
    if (typeof context.text === 'function')
        context.text = context.text(i, scoreToTime(currentScore));
    context.scores = scores.slice(0, 3);
    context.currentURL = encodeURIComponent(window.location.href+`?result=${type}&_share=1`);

    _show(context, currentScore, cb);
  })
  .catch((err) => {
    console.error('getScore error:', err);
  })
}

// setTimeout(() => show('arrested', 900, () => console.log('заново')), 1500);

export default show;

// show('success');
// show('arrested', 900, () => true);
// show('arrested', 1200);

// export show;