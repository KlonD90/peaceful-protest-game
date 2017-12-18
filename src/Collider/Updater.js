// @flow
import PF from "pathfinding"

import type { Collider } from "./Collider.js"
import Converter from "./Converter.js"

import type {
  Matrix, MCoords, RCoords, Sprite, Finder
} from "./types.js"

class Updater {
  collider: Collider
  converter: Converter
  matrix: Matrix

  constructor (collider: Collider) {
    this.collider = collider
    this.converter = new Converter(collider)

    this.matrix = this._buildMatrix()
  }

  update (): void {
    const { collider, converter } = this

    collider.entities.forEach(({ move, sprite, object, personalMatrix }) => {
      if (move.length === 0) return void (sprite.mz && sprite.mz.stop());
      const { target, phasing, follow, callback } = move[0]
      const moveFrom = converter.rCoordsToMCoords(sprite.body.center)
      const moveTo = converter.rCoordsToMCoords(target)

      if (phasing) {
        sprite.phasing = true
        var path = [moveFrom, moveTo]
        var pathClear = !equals(moveFrom, moveTo)
      } else {
        const finder = new PF.AStarFinder({allowDiagonal: true, dontCrossCorners: true})
        var path = this._findPath({finder, from: moveFrom, to: moveTo, personalMatrix})
        var pathClear = path[2] || mget(this.matrix, path[1]) === false
      }

      if (pathClear) {
        const nextTarget = converter.mCoordsToRCoords(path[1])
        collider.invokeRawMoving(object, nextTarget)
      } else {
        if (follow) return void sprite.body.stop();
        if (callback) callback()
        sprite.phasing = false
        move.shift()
      }
    })
  }

  _findPath(
    {
      finder, from, to, personalMatrix
    }: {
      finder: Finder, from: MCoords, to: MCoords, personalMatrix: MCoords[]
    }): MCoords[] {
    const matrix = this._cloneMatrix()

    this._applyPersonalMatrix(false, { personalMatrix, target: from, matrix })
    mset(matrix, to, false)

    const grid = new PF.Grid(matrix)
    return finder.findPath(...from, ...to, grid)
  }

  _buildMatrix (): Matrix {
    const { maxX, maxY } = this.converter
    let matrix = mzero(maxX + 1, maxY + 1)

    for(let { sprite, personalMatrix } of this.collider.entities) {
      if (!sprite.alive) continue
      if (sprite.mz && sprite.mz.mode === null) continue
      const target = this.converter.rCoordsToMCoords(sprite.body.center)
      this._applyPersonalMatrix(true, { personalMatrix, target, matrix })
    }

    // console.log(matrix, mshow(matrix))

    return matrix
  }

  _applyPersonalMatrix(value: boolean, {
    personalMatrix,
    target,
    matrix,
  }: {
    personalMatrix: MCoords[],
    target: MCoords,
    matrix: Matrix
  }) {
    const { maxX, maxY } = this.converter
    const [x1, y1] = target

    personalMatrix.forEach(point => {
        const [x2, y2] = point;
        mset(matrix, [Math.min(x1 + x2, maxX), Math.min(y1 + y2, maxY)], value)
    })
  }

  _cloneMatrix() {
    return this.matrix.map(line => line.map(item => item))
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

function mshow(matrix: Matrix): string {
  return matrix.map(row => row.map(x => x ? 1 : 0).join()).join("\n")
}

function equals(a: MCoords, b: MCoords): boolean {
  const [xa, ya] = a
  const [xb, yb] = b
  return (xa === xb) && (ya === yb)
}

export default Updater
