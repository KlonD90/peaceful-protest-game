import Protester from "./Protester"
import SlotManager from "./SlotManager"
import { PROTESTER_MODE_WANDER, PROTESTER_MODE_FOLLOW } from "../constants"

const defaults = {
  interval: 1,

  agitation: {
    duration: 10,
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
    MOVE_OUT: "moveOut"
  }

  constructor({ config, GameObject, ...prefabOptions }) {
    console.log({ config, GameObject, ...prefabOptions })
    const fullConfig = { ...defaults, ...config }
    console.log(prefabOptions)
    super({
      ...GameObject.getRandomCoordinates(),
      spriteKey: `star`,
      spriteName: `star`,
      speed: { value: fullConfig.speed },
      ...prefabOptions, GameObject,
    })

    this.config = fullConfig
    this.kill()
  }

  setState(state, props = {}) {
    switch(state) {
      case Star.STATE.REST: {
        this.state = { type: Star.STATE.REST }
        setTimeout(() => this.setState(Star.STATE.MOVE_IN), this.config.interval * 1000)
        break;
      }
      case Star.STATE.MOVE_IN: {
        this.revive()
        this.moveTo(this.GameObject.getRandomCoordinates(), { callback: () => this.setState(Star.STATE.AGITATE) })
        this.state = { type: Star.STATE.MOVE_IN }
        break;
      }
      case Star.STATE.AGITATE: {
        const { slots, duration, direction } = this.config.agitation

        this.direction = 0

        this.moveTo()
        const slotsManager = new SlotManager(this.sprite, this, slots)
        this.state = { type: Star.STATE.AGITATE, slots: slotsManager }
        this.update()
        setTimeout(() => this.setState(Star.STATE.MOVE_OUT), duration * 1000)
        break
      }
      case Star.STATE.MOVE_OUT: {
        const { slots } = this.state
        this.state = { type: Star.STATE.MOVE_OUT }
        slots.dismissAll()
        this.moveTo(this.GameObject.randomOffscreenCoords(), { callback: () => this.kill() })
        break
      }
    }
  }

  update() {
    super.update()

    switch(this.state.type) {
      case Star.STATE.AGITATE: {
        let wanderingProtesters =
          this.GameObject.mz.arrays.protesters.map(protester => protester.mz)
              .filter(protester => protester.mode === PROTESTER_MODE_WANDER)

        while (this.state.slots.hasEmptySlots() && wanderingProtesters.length > 0) {
          const protester = wanderingProtesters.shift()
          const slot = this.state.slots.take(protester)
          protester.setMode(PROTESTER_MODE_FOLLOW, { slot })
        }

        break
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
