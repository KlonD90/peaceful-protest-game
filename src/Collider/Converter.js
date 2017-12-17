// @flow

import type { Collider } from "./Collider.js"

import type { RCoords, MCoords } from "./types.js"

class Converter {
  collider: Collider
  maxX: number
  maxY: number

  constructor(collider: Collider) {
    this.collider = collider

    const [maxX, maxY] = this.rCoordsToMCoords({ x: Infinity, y: Infinity })
    Object.assign(this, { maxX, maxY })
  }

  rCoordsToMCoords ({x, y}: RCoords): MCoords {
    const { game, scale } = this.collider
    return [
      rCoordToMCoord(x, scale, game.world.width),
      rCoordToMCoord(y, scale, game.world.height),
    ]
  }

  mCoordsToRCoords ([x, y]: MCoords): RCoords {
    const { scale } = this.collider

    return {
      x: mCoordToRCoord(x, scale),
      y: mCoordToRCoord(y, scale),
    }
  }
}

function rCoordToMCoord (value: number, scale: number, max: number): number {
  let x = value
  if (x < 0) x = 0
  else if (x > max) x = max

  return Math.floor(x / scale) + 1
}

function mCoordToRCoord (x: number, scale: number): number {
  return (x - 0.5) * scale
}

export default Converter
