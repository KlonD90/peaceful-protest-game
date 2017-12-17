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
    { sprite, object }: { sprite: Sprite, object: EntityObject }) {
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

  compilePersonalMatrix (sprite: Sprite): MCoords[] {
    const [centerX, centerY] = this.rCoordsToMCoords(sprite.body.center);
    const [startX, startY] = this.rCoordsToMCoords(sprite.body);
    const [endX, endY] = this.rCoordsToMCoords({
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
      const path = this._findPath(finder, sprite, moveTo, matrix)

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

    // console.log('path', from, to, result);

    return result
  }

  getMatrix (): Matrix {
    const [maxX, maxY] = this.rCoordsToMCoords({ x: Infinity, y: Infinity })
    let matrix = mzero(maxX + 1, maxY + 1)

    for(let { sprite, personalMatrix } of this.entities) {
      if (sprite.alive && ( (sprite.mz && sprite.mz.mode !== null) || !sprite.mz))
      {
        if (sprite === this.gameObject.mz.levelObjects['paddyWagon'][0])
        {
          // console.log('paddy wagon matrix', personalMatrix);
          // console.log(
          //     personalMatrix.reduce( (p, r) => p.x<r?p.x:r, 0 ),
          //     personalMatrix.reduce( (p, r) => p.x>r?p.x:r, 0 ),
          //     personalMatrix.reduce( (p, r) => p.y<r?p.y:r, 0 ),
          //     personalMatrix.reduce( (p, r) => p.y>r?p.y:r, 0 ),
          // );
        }
        const [x1, y1] = this.rCoordsToMCoords(sprite.body.center)

        personalMatrix.forEach(point => {
            const [x2, y2] = point;
            mset(matrix, [Math.min(x1 + x2, maxX), Math.min(y1 + y2, maxY)], true)
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

  applyPersonalMatrix({
    matrix,
    personalMatrix,
    sprite,
    value,
  }: {
    matrix: Matrix,
    personalMatrix: MCoords[],
    sprite: Sprite,
    value: boolean,
  }) {
    const [maxX, maxY] = this.rCoordsToMCoords({ x: Infinity, y: Infinity })
    const [x1, y1] = this.rCoordsToMCoords(sprite.body.center)

    personalMatrix.forEach(point => {
        const [x2, y2] = point;
        mset(matrix, [Math.min(x1 + x2, maxX), Math.min(y1 + y2, maxY)], true)
    })
  }
}


function mget (matrix: Matrix, path: ?MCoords): ?boolean {
  if (!path) return null
  const [x, y] = path
  return matrix[y][x]
}

function mset (matrix: Matrix, path: ?MCoords, value: boolean): void {
  if (!path) return
  const [x, y] = path
  matrix[y][x] = value
}


function mzero (maxX: number, maxY: number): Matrix {
  let matrix = []
  for(let y = 0; y < maxY; y++) {
    matrix[y] = []
    for(let x = 0; x < maxX; x++) {
      matrix[y][x] = false
    }
  }
  return matrix
}

export default Collider
