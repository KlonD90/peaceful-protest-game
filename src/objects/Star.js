import Protester from "./Protester"

const defaults = {
  interval: 60,

  agitation: {
    length: 60,
    direction: 0,
    slots: [
      { x: 10, y: 10 },
      { x: 10, y: -10 },
    ],
  },

  speed: 100,
}

/*
 * Star lifecyle: rest -> moveIn -> agitate -> moveOut -> rest
 */
export class Star extends Protester {
  static STATE = {
    REST: "rest",
    MOVE_IN: "moveIn",
    AGITATE: "agitate",
    MOVE_PUT: "moveOut"
  }

  constructor(game, config) {
    const fullConfig = { ...defaults, ...config }

    super({
      ...game.getRandomCoordinates(),
      spriteKey: `star`,
      spriteName: `star`,
      game: game.game,
      GameObject: game,
      speed: { value: fullConfig.speed }
    })

    this.config = fullConfig
    this.kill()
  }

  setState(state, props = {}) {
    switch(state) {
      case Star.STATE.REST: {
        this.state = { type: Star.STATE.REST }
        // setTimeout(() => this.setState(Star.STATE.MOVE_IN), config.interval * 1000)
        setTimeout(() => this.setState(Star.STATE.MOVE_IN), 1000)
        break;
      }
      case Star.STATE.MOVE_IN: {
        this.revive()
        this.moveTo(this.GameObject.getRandomCoordinates(), { callback: () => this.setState(Star.STATE.AGITATE) })
        this.state = { type: Star.STATE.MOVE_IN }
        break;
      }
      case Star.STATE.AGITATE: {

      }
    }
  }

  revive() {
    const { x, y } = this.GameObject.randomOffscreenCoords()
    this.sprite.revive(1);
    this.sprite.x = x;
    this.sprite.y = y;
    this.sprite.body.reset(x, y);
  }

  kill() {
    this.setState(Star.STATE.REST)
    this.moveTo(null);

    this.sprite.kill();
  }
}

export default Star
