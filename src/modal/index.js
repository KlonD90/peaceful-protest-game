import Handlebars from 'handlebars/dist/handlebars.js';
import axios from 'axios';

import templateSource from 'raw-loader!./modal.html';
import style from 'style-loader!css-loader!./style.css';
import font from  'style-loader!css-loader!./font.css'

const template = Handlebars.compile(templateSource);

const getScore = () => axios.get('/game_score')
const getScoreFake = () => {
  return new Promise((resolve) => {
    resolve([{
      nick: 'Nikitka Magraritka',
      contact: 'mogafk@gmail.com',
      score: 1021.7
    }, {
      nick: 'Putin',
      contact: 'putin@rf.gos',
      score: 4332
    }])
  })
}

const sendNewScore = (formData) => {
  if (validate(formData))
    return Promise.reject();

  return axios.post('/game_score', formData)
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


Handlebars.registerHelper('parseScoreTime', function(sec) {
  const h = ~~(sec/3600);
  const m = ~~(sec/60);
  const s = ~~(sec%60);
  return `${h}:${m}:${s}`;
});

Handlebars.registerHelper('plus', function(a, b) {
  return a+b;
});

const resultTypes = {
  'success': {
    title: 'Митинг удался',
    text: 'Вы молодец, попробуйте набрать очки быстрее, чтобы получить приз — кофты “Будет хуже” от Кровостока',
  },
  'arrested': {
    title: 'Вас повязали',
    text: 'Не агитируйте все время, тогда полиция не обратит на вас внимание. Используйте shift, чтобы передвигаться быстрее и ускользать от Омона.'
  }
}

const _show = (context, cb) => {
  // debugger;
  const html = template(context);
  const fragment = document.createElement('div');
  fragment.innerHTML = html;
  document.body.appendChild(fragment);

  if(context.scores.find(s => s.current)){
    const formEl = document.querySelector('[data-js-selector="participated-form"]');
    const nameEl = document.querySelector('[data-js-selector="participated-form-name"]');
    const emailEl = document.querySelector('[data-js-selector="participated-form-email"]');

    nameEl.onkeyup = validate;
    emailEl.onkeyup = validate;
    formEl.onsubmit = function(e) {
      e.preventDefault();
      const formData = {
        name: nameEl.value,
        email: emailEl.value
      }
      sendNewScoreFake(formData)
        .then(() => {
          const c = context.scores.find(s => s.current);
          c.nick = formData.name;
          c.contact = formData.email;
          c.showForm = false;
          document.body.removeChild(fragment);
          _show(context, cb);
        });

      return false;
    }

  }

  document.querySelector('[data-js-selector="replay-button"]')
    .onclick = function() {
      document.body.removeChild(fragment)
      cb();
    };
}



const show = (type, currentScore, cb) => {
// export default (type, currentScore, cb) => {
  let context = resultTypes[type]
  // getScore().then(() => {
    getScoreFake().then((scores) => {
    for(var i=0; i<scores.length; i++) {
      if (scores[i].score > currentScore) {
        break;
      }
    }
    scores.splice(i, 0, { showForm: true, current: true, score: currentScore })
    context.scores = scores.slice(0, 2);

    _show(context, cb);
  });
}


export default show;

// show('success');
// show('arrested', 900, () => true);
// show('arrested', 1200);

// export show;