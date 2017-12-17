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
export type RCoords = { x: number, y: number }
type MCoords = [number, number]
type Move = { target: RCoords, callback: () => void, follow: boolean }
type Entity = { sprite: Sprite, object: EntityObject, move: Move[], personalMatrix: MCoords[] }
type Props = { game: any, gameObject: Object, scale: number }
type Grid = any
type Finder = { findPath: (number, number, number, number, Grid) => MCoords[] }
type Matrix = boolean[][]
export type PersonalMatrix = { center: MCoords, matrix: Matrix }

type MoveOpts = {
  callback?: () => void, follow?: boolean, reset?: boolean
}

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

  addEntity (
    { sprite, object, personalMatrix }:
    { sprite: Sprite, object: EntityObject, personalMatrix?: PersonalMatrix }) {
    this.entities.push({
      sprite,
      object,
      move: [],
      personalMatrix: this.compilePersonalMatrix(sprite)
    })
  }

  moveEntity (
    object: EntityObject,
    target: RCoords,
    { callback = () => {}, follow = false, reset = true }: MoveOpts  = {}
  ) {
    const entity = this.entities.find(x => x.object === object)
    if (!entity && target) throw new Error(`object not registered (${object})`)
    if (!entity) return

    if (reset) entity.move = []
    if (target) entity.move.push({ target, callback, follow })
  }

  moveToFactory () {
    const collider = this
    // Use old syntax to explicitly allow context changing
    return function moveTo (target: RCoords,  { callback, follow, reset }: MoveOpts = {}) {
      collider.moveEntity(this, target, { callback, follow, reset })
    }
  }

  compilePersonalMatrix(sprite) {
    const [centerX, centerY] = this.rCoordsToMCoords(sprite.body.center);
    const startX = this._rCoordToMCoord(sprite.body.x, this.game.world.width);
    const endX = this._rCoordToMCoord(sprite.body.x+sprite.body.width, this.game.world.width);
    const startY = this._rCoordToMCoord(sprite.body.y, this.game.world.height);
    const endY = this._rCoordToMCoord(sprite.body.y+sprite.body.height, this.game.world.height);
    let result = [];
    for (let x=startX;x<=endX; x++)
    {
      for (let y=startY; y<=endY; y++)
      {
        result.push(
            {x: x - centerX, y: y - centerY}
        );
      }
    }
    return result;
  }

  onPhaserCollision (...someSignature: any) { /* FIXME */ }

  update () {
    const matrix = this.getMatrix()
      let str = '';
    for (let y=0; y<matrix.length; y++)
    {
      for (let x=0; x<matrix[y].length; x++)
      {
        str+= ((0+matrix[y][x])+'');
      }
      str+='\n';
    }
    console.log('matrix');
    console.log(str);

    this.entities.forEach(({ move, sprite, object }) => {
      if (move.length === 0) return void (sprite.mz && sprite.mz.stop());
      const moveFrom = this.rCoordsToMCoords(sprite.body.center)
      const moveTo = this.rCoordsToMCoords(move[0].target)

      const finder = new PF.AStarFinder({allowDiagonal: true, dontCrossCorners: true})
      const path = this._findPath(finder, moveFrom, moveTo, matrix)

      if (path[2] || mget(matrix, path[1]) === false) {
        const nextTarget = this.mCoordsToRCoords(path[1])
        this.invokeRawMoving(object, nextTarget)
      } else {
        if (move[0].follow) return void sprite.body.stop();
        if (move[0].callback) move[0].callback()
        move.shift()
      }
    })
  }

  rCoordsToMCoords ({x, y}: RCoords): MCoords {
    return [this._rCoordToMCoord(x, this.game.world.width), this._rCoordToMCoord(y, this.game.world.height)]
  }

  _rCoordToMCoord (value: number, max: number): number {
    let x = value
    if (x < 0) x = 0
    else if (x > max) x = max

    return Math.floor(x / this.scale) + 1
  }

  mCoordsToRCoords ([x, y]: MCoords): RCoords {
    return { x: this._mCoordToRCoord(x), y: this._mCoordToRCoord(y)}
  }

  _mCoordToRCoord (x: number): number {
    return (x - 0.5) * this.scale
  }

  _findPath(finder: Finder, from: MCoords, to: MCoords, matrix: Matrix): MCoords[] {
    const fromBit = !!mget(matrix, from)
    const toBit = !!mget(matrix, to)
    mset(matrix, from, false)
    mset(matrix, to, false)

    const grid = new PF.Grid(matrix)
    const result = finder.findPath(...from, ...to, grid)

    mset(matrix, from, fromBit)
    mset(matrix, to, toBit)

    return result
  }

  getMatrix (): Matrix {
    const [n, m] = this.rCoordsToMCoords({ x: Infinity, y: Infinity })
    let matrix = []
    for(let i = 0; i <= n; i++) {
      matrix[i] = []
      for(let j = 0; j <= m; j++) matrix[i][j] = false
    }

    for(let { sprite, personalMatrix } of this.entities) {
      if (sprite.alive)
      {
        if (sprite === this.gameObject.mz.levelObjects['paddyWagon'][0])
        {
          console.log('paddy wagon matrix', personalMatrix);
          console.log(
              personalMatrix.reduce( (p, r) => p.x<r?p.x:r, 0 ),
              personalMatrix.reduce( (p, r) => p.x>r?p.x:r, 0 ),
              personalMatrix.reduce( (p, r) => p.y<r?p.y:r, 0 ),
              personalMatrix.reduce( (p, r) => p.y>r?p.y:r, 0 ),
          );
        }
          personalMatrix.forEach(point => {
              const { x: x1, y: y1 } = point;
              const [x2, y2 ] = this.rCoordsToMCoords(sprite.body.center)
              mset(matrix, [Math.min( y1 + y2, m), Math.min(x1 + x2, n)], true)
          })
      }
      // if (personalMatrix.length > 5)
      //   alert(JSON.stringify([personalMatrix, sprite.body.center]))

    }
    return matrix
  }

  invokeRawMoving (object: EntityObject, target: RCoords): void {
    object.setVelocity(target)
  }
}

function mget (matrix: Matrix, path: ?MCoords): ?boolean {
  if (!path) return null
  const [x, y] = path
  return matrix[x][y]
}

function mset (matrix: Matrix, path: ?MCoords, value: boolean): void {
  if (!path) return
  const [x, y] = path
  matrix[x][y] = value
}
export default Collider
