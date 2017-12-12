// @flow

/*
 * Collider operates two kinds of coordinates:
 * RCoords (pronounce Real Coords) and MCoords (pronounce Matrix Coords)
 * PF works in MCoords, and the rest game in RCoords.
 * Note MCoords are represented by an array ([x,y]) and RCoords by a hash ({x, y})
 */

import PF from "pathfinding"

type Sprite = any
type EntityObject = any
type RCoords = { x: number, y: number }
type MCoords = [number, number]
type Move = { target: RCoords, callback: () => void, follow: boolean }
type Entity = { sprite: Sprite, object: any, move: Move[] }
type Props = { game: any, gameObject: Object, scale: number }
type Grid = any
type Finder = { findPath: (number, number, number, number, Grid) => MCoords[] }

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

  addEntity (sprite: Sprite, object: EntityObject) {
    const move = []
    this.entities.push({ sprite, object, move })
  }

  moveEntity (
    object: EntityObject,
    target: RCoords,
    {
      callback = () => {}, follow = false, reset = true
    }: {
      callback: () => void, follow: boolean, reset: boolean
    }  = {}
  ) {
    const entity = this.entities.find(x => x.object === object)
    if (!entity) throw new Error(`object not registered (${object})`)
    if (reset) entity.move = []
    if (target) entity.move.push({ target, callback, follow })
  }

  onPhaserCollision (...someSignature: any) { /* FIXME */ }

  update () {
    const matrix = this.getMatrix()

    this.entities.forEach(({ move, sprite, object }) => {
      if (move === []) return

      const moveFrom = this.rCoordsToMCoords(sprite.center)
      const moveTo = this.rCoordsToMCoords(move[0].target)

      const finder = new PF.AStarFinder()
      const path = this._findPath(finder, moveFrom, moveTo, matrix)

      if (path[2] || !mget(matrix, path[1])) {
        const nextTarget = this.mCoordsToRCoords(path[1])
        this.invokeRawMoving(object, nextTarget)
      } else {
        if (move[0].follow) return
        move.shift()
        if (move[0].callback) move[0].callback()
      }
    })
  }

  rCoordsToMCoords ({x, y}: RCoords): MCoords {
    return [this._rCoordToMCoord(x), this._rCoordToMCoord(y)]
  }

  _rCoordToMCoord (x: number): number {
    let result = Math.floor(x / this.scale) + 1
    if (result < 0) result = 0
    return result
  }

  mCoordsToRCoords ([x, y]: MCoords): RCoords {
    return { x: this._mCoordToRCoord(x), y: this._mCoordToRCoord(y)}
  }

  _mCoordToRCoord (x: number): number {
    return (x - 0.5) * this.scale
  }

  _findPath(finder: Finder, from: MCoords, to: MCoords, matrix: boolean[][]): MCoords[] {
    const fromBit = mget(matrix, from)
    const toBit = mget(matrix, to)
    mset(matrix, from, false)
    mset(matrix, to, false)

    const grid = new PF.Grid(matrix)
    const result = finder.findPath(...from, ...to, grid)

    mset(matrix, from, fromBit)
    mset(matrix, to, toBit)

    return result
  }

  getMatrix (): boolean[][] {
    let matrix = []
    for(let { sprite } of this.entities) mset(matrix, this.rCoordsToMCoords(sprite.center), true)
    return matrix
  }

  invokeRawMoving (object: EntityObject, target: RCoords): void {
    console.log(object, target)
  }
}

function mget (matrix: boolean[][], path: ?MCoords): boolean {
  if (!path) return false
  const [x, y] = path
  if(!matrix[x]) return false
  return !!matrix[x][y]
}

function mset (matrix: boolean[][], path: ?MCoords, value: boolean): void {
  if (!path) return
  const [x, y] = path

  for(let i = matrix.length; i <= x; i++) {
    matrix[i] = []
  }

  for(let j = matrix[x].length; j <= y; j++) {
    matrix[x][j] = false
  }

  matrix[x][y] = value
}
