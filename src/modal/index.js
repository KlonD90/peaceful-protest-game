import Handlebars from 'handlebars/dist/handlebars.js';
import axios from 'axios';

import templateSource from 'raw-loader!./modal.html';
import style from 'style-loader!css-loader!./style.css';
import font from  'style-loader!css-loader!./font.css'
import sha256 from './sha256.js';

const HOST_URL = 'https://v3-stage.zona.media';
// const HOST_URL = 'http://localhost:8081';
const template = Handlebars.compile(templateSource);

const hash = ({score, name, email}) => {
  const string = `${score}${name}${email}0795782855`;
  return sha256.hash(string);
}

const getScore = () => {
  return axios.get(`${HOST_URL}/game_score`);
}

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
    text: (ratingPos) => {
      if (ratingPos < 2) {
        return `“Поздравляем! Вы заняли ${ratingPos+1} место в сегодняшнем топ-2, заполните поле для участия в розыгрыше призов.`;
      }

      return 'Вы молодец, попробуйте набрать очки быстрее, чтобы получить приз — кофты “Будет хуже” от Кровостока'; 
    },
    // 'Вы молодец, попробуйте набрать очки быстрее, чтобы получить приз — кофты “Будет хуже” от Кровостока',
    background: require('../assets/win_small.png'),
  },
  'arrested': {
    title: 'Вас повязали',
    text: 'Не агитируйте все время, тогда полиция не обратит на вас внимание. Используйте shift, чтобы передвигаться быстрее и ускользать от Омона.',
    background: require('../assets/lose_copy_small.png'),
  }
}

const _show = (context, currentScore, cb) => {
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
  let context = resultTypes[type];

  getScore().then(({data: scores}) => {
  // getScoreFake().then((scores) => {
    if (type === 'success') {
      for(var i=0; i<scores.length; i++) {
        if (scores[i].score > currentScore) {
          break;
        }
      }
      scores.splice(i, 0, { showForm: true, current: true, score: currentScore });

      if (typeof context.text === 'function')
        context.text = context.text(i);
    }
    context.scores = scores.slice(0, 2);
    

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