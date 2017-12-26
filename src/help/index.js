import Handlebars from 'handlebars/dist/handlebars.js';

import templateSource from 'raw-loader!./template.html';
import style from 'style-loader!css-loader!./style.css';


const template = Handlebars.compile(templateSource);

const data = [
  {
    image: require('../assets/helppics/01.png'),
    text: "передвигайтесь по улице с помощью стрелочек",
  },
  {
    image: require('../assets/helppics/02.png'),
    text: "зажмите, чтобы начать агитацию, отпустите, чтобы перестать",
  },
  {
    image: require('../assets/helppics/03.png'),
    text: "если вы зажмете клавишу, вы сможете убегать <br class='hide-700' /> от полиции, однако смотрите не выдохнитесь",
  },
  {
    image: require('../assets/helppics/04.png'),
    text: "подождите, пока человек поднимет плакат, тогда он присоединится к&nbsp;вам",
  },
  {
    image: require('../assets/helppics/05.png'),
    text: "подойдите к журналисту и поднимите плакат так, чтобы он&nbsp;вас заметил; <br /> когда журналист закончит прямой эфир, на&nbsp;площадь подтянутся новые люди",
  },
  {
    image: require('../assets/helppics/06.png'),
    text: "во время агитации остерегайтесь сотрудников полиции, опустите <br class='hide-900' /> плакат до&nbsp;того, как&nbsp;они&nbsp;вас заметят",
  },
  {
    image: require('../assets/helppics/07.png'),
    text: "смотрите, чтобы вам не&nbsp;плеснули зеленкой в&nbsp;лицо",
  },
  {
    image: require('../assets/helppics/08.png'),
    text: "чтобы помешать задержанию демонстранта, подойдите к&nbsp;нему <br class='hide-700' /> и&nbsp;быстро жмите на&nbsp;пробел много раз подряд",
  },
]
const mobileData = [
    {
      image: require('../assets/helppics/tap.png'),
      text: "коснитесь экрана, чтобы передвигаться по улице",
    },
    {
      image: require('../assets/helppics/double-tap.png'),
      text: "если вы дважды коснетесь экрана, вы сможете убегать от полиции, однако смотрите не выдохнитесь",
    },
    {
      image: require('../assets/helppics/agit-help.png'),
      text: "нажмите, чтобы начать агитацию",
    },
    {
      image: require('../assets/helppics/04.png'),
      text: "подождите, пока человек поднимет плакат, тогда он присоединится к&nbsp;вам",
    },
    {
      image: require('../assets/helppics/05.png'),
      text: "подойдите к журналисту и поднимете плакат так, чтобы он вас заметил; когда журналист закончит прямой эфир, на площадь подтянутся новые люди",
    },
    {
      image: require('../assets/helppics/06.png'),
      text: "во время агитации остерегайтесь сотрудников полиции, опустите плакат до того, как они вас заметят",
    },
    {
      image: require('../assets/helppics/07.png'),
      text: "смотрите, чтобы вам не&nbsp;плеснули зеленкой в&nbsp;лицо",
    },
    {
      image: require('../assets/helppics/08.png'),
      text: "чтобы помешать задержанию демонстранта, подойдите к нему и быстро жмите на экран много раз подряд",
    },
  ] 


const show = (isDesktop, cb) => {
  const containerEl = document.querySelector('[data-js-selector="help-container"]');
  const fragment = document.createElement('div');
  const html = template({
    data: (isDesktop ? data : mobileData), 
    separator: require('../assets/helppics/separator.png')
  });
  fragment.innerHTML = html;
  containerEl.appendChild(fragment);

  const closeEl = document.querySelector('[data-js-selector="help-close"]');
  const hide = (e) => {
    containerEl.removeChild(fragment);
    cb && cb();
  }
  closeEl.onclick = hide;

  return hide;
}

export default show;
