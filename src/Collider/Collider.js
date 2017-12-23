// @flow

import Converter from "./Converter.js"
import Updater from "./Updater.js"

import type {
  Entity, Props, Sprite, EntityObject, MCoords, RCoords, MoveOpts
} from "./types.js"

export class Collider {
  game: any
  gameObject: any
  scale: number
  entities: Entity[]

  constructor ({ game, gameObject, scale }: Props) {
    Object.assign(this, {
      game,
      gameObject,
      scale,
      entities: [],
    })
  }

  update() {
    const updater = new Updater(this)
    updater.update()
  }

  addEntity (
    { sprite, object }: { sprite: Sprite, object: EntityObject }) {
    this.entities.push({
      sprite,
      object,
      move: [],
      personalMatrix: this.compilePersonalMatrix(sprite),
      times: 0,
      lastDecisionTime: 0,
      lastCoords: [0, 0]
    })
  }

  getEntityBySprite(sprite){
    return this.entities.find(x => x.sprite === sprite);
  }

  moveEntity (
    object: EntityObject,
    target: RCoords,
    { callback = () => {}, phasing = false, follow = false, reset = true, superphasing = false, prepend = false}: MoveOpts  = {}
  ) {
    const entity = this.entities.find(x => x.object === object)
    if (!entity && target) throw new Error(`object not registered (${object})`)
    if (!entity) return

    if (reset) entity.move = []
    if (target) {
      if (prepend)
        entity.move.unshift({ target, callback, follow, phasing })
      else
        entity.move.push({ target, callback, follow, phasing })
    }
  }

  moveToFactory () {
    const collider = this
    // Use old syntax to explicitly allow context changing
    return function moveTo (target: RCoords,  opts: MoveOpts = {}) {
      collider.moveEntity(this, target, opts)
    }
  }

  compilePersonalMatrix (sprite: Sprite): MCoords[] {
    const converter = new Converter(this)

    const [centerX, centerY] = converter.rCoordsToMCoords(sprite.body.center);
    const [startX, startY] = converter.rCoordsToMCoords(sprite.body);
    const [endX, endY] = converter.rCoordsToMCoords({
      x: sprite.body.x+sprite.body.width,
      y: sprite.body.y+sprite.body.height
    });

    const { height, width, x, y, center} = sprite.body

    let result = [];
    for (let x=startX;x<=endX; x++) for (let y=startY; y<=endY; y++) {
        result.push([x - centerX, y - centerY])
    }
    return result;
  }

  invokeRawMoving (object: EntityObject, target: RCoords): void {
    object.setVelocity(target)
  }
}

export default Collider
