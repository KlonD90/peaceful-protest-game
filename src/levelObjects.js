// @flow

import type { PersonalMatrix, RCoords } from "./Collider"

import Prefab from "./objects/Prefab.js"

type LevelObject = {
  sprite: string,
  positions: RCoords[],
  personalMatrix?: PersonalMatrix,
  speed: { value: number },
}

export const PaddyWagon: LevelObject = {
  sprite: "paddy_wagon",
  speed: { value: 100 },
  group: 'cars',
  immovable: true,
  positions: [
    { x: 300, y: 0, angle: 90 },
    // { x: 615, y: 230 },
  ],
}

export default {
  paddyWagon: PaddyWagon,
}
