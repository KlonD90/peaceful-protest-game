// @flow

export type Sprite = any
export type EntityObject = any
export type RCoords = { x: number, y: number }
export type MCoords = [number, number]
export type Move = { target: RCoords, callback: () => void, follow: boolean }
export type Entity = { sprite: Sprite, object: EntityObject, move: Move[], personalMatrix: MCoords[] }
export type Props = { game: any, gameObject: Object, scale: number }
export type Grid = any
export type Finder = { findPath: (number, number, number, number, Grid) => MCoords[] }
export type Matrix = boolean[][]
export type PersonalMatrix = { center: MCoords, matrix: Matrix }

export type MoveOpts = {
  callback?: () => void, follow?: boolean, reset?: boolean
}
