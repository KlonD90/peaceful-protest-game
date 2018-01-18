import Boot from './states/Boot.js';
import Loading from './states/Loading.js';
import StartMenu from './states/StartMenu.js';
import Help from './states/Help.js';
import Controls from './states/Controls.js';
import Game from './states/Game.js';

function init() {
  const windowInnerHeight = window.innerHeight;
  if (document.body.clientHeight > windowInnerHeight) {
      document.body.style.height = windowInnerHeight + 'px';
      document.documentElement.style.height = windowInnerHeight + 'px';
  }

  const containerNode = document.querySelector('.js-game-container');

  const game = new Phaser.Game({
      width: containerNode.clientWidth,
      height: containerNode.clientHeight,
      parent: containerNode,
      antialias: true,
      enableDebug:false,
      multiTexture:true,
      renderer: Phaser.CANVAS
      // resolution: window.devicePixelRatio || 1
  });

  game.state.add('Boot', Boot);
  game.state.add('Loading', Loading);
  // game.state.add('StartMenu', StartMenu);
  // game.state.add('Help', Help);
  // game.state.add('Controls', Controls);
  game.state.add('Game', Game);

  game.state.start('Boot');
  window.game = game;
}

if (process.env.NODE_ENV === 'production')
  window.protestGameInit = init;
else
  setTimeout(init, 50);


// document.querySelector('.game-background').style.backgroundImage = `url(${require('./assets/pattern.png')})`;
// document.querySelector('.game-background').style.backgroundImage = `url(${require('./assets/background.png')})`;
// document.querySelector('.game-background').style.backgroundImage = `url(${require('./assets/meeting_map.png')})`;
// document.body.style.backgroundImage = `url(${require('./assets/pattern.png')})`;

