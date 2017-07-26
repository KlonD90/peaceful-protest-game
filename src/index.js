import Boot from './states/Boot.js';
import Loading from './states/Loading.js';
import StartMenu from './states/StartMenu.js';
import EndMenu from './states/EndMenu.js';
import Game from './states/Game.js';

const containerNode = document.querySelector('.js-game-container');

const game = new Phaser.Game({
    width: containerNode.clientWidth,
    height: containerNode.clientHeight,
    parent: containerNode,
    antialias: false
});

game.state.add('Boot', Boot);
game.state.add('Loading', Loading);
game.state.add('StartMenu', StartMenu);
game.state.add('EndMenu', EndMenu);
game.state.add('Game', Game);
game.state.start('Boot');
