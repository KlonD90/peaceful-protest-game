// @flow

import type { PersonalMatrix, RCoords } from "./Collider"

import Prefab from "./objects/Prefab.js"
import PaddyWagonClass from "./objects/PaddyWagon.js"

type LevelObject = {
  sprite: string,
  positions: RCoords[],
  personalMatrix?: PersonalMatrix,
  speed: { value: number },
  objectClass: Class<Prefab>,
}

export const PaddyWagon: LevelObject = {
  sprite: "paddy_wagon",
  objectClass: PaddyWagonClass,
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
