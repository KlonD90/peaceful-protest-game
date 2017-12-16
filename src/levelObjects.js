// @flow

import type { PersonalMatrix, RCoords } from "./Collider.js"

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

  positions: [
    { x: 195, y: 230 },
    { x: 615, y: 230 },
  ],

  personalMatrix: {
    center: [1.5, 4.5],
    matrix: [
      /*      00     01     02     03    */
      /*00*/ [true , true , true , true ],
      /*01*/ [true , true , true , true ],
      /*02*/ [true , true , true , true ],
      /*03*/ [true , true , true , true ],
      /*04*/ [true , true , true , true ],
                     /* center */
      /*05*/ [true , true , true , true ],
      /*06*/ [true , true , true , true ],
      /*07*/ [true , true , true , true ],
      /*08*/ [true , true , true , true ],
      /*09*/ [true , true , true , true ],
    ],
  },
}

export default {
  paddyWagon: PaddyWagon,
}
