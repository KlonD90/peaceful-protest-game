import Prefab from "./Prefab.js"
import { PADDY_WAGON_MODE_STAY, PADDY_WAGON_MODE_LEAVE } from "../constants"

export class PaddyWagon extends Prefab {
  constructor(...args) {
    super(...args)
    this.setMode(PADDY_WAGON_MODE_STAY)
  }

  setMode(mode, props = {}) {
    switch(mode) {
      case PADDY_WAGON_MODE_STAY: {
        break
      }
      case PADDY_WAGON_MODE_LEAVE: {
        this.moveTo(this.GameObject.randomOffscreenCoords(), { callback: () => this.kill() })
        break
      }
    }

    super.setMode(mode, props)
  }
}

export default PaddyWagon
