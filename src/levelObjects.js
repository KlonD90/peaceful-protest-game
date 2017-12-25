// @flow

import type {PersonalMatrix, RCoords} from "./Collider"

import Prefab from "./objects/Prefab.js"

type LevelObject = {
    sprite: string,
    positions: RCoords[],
    personalMatrix?: PersonalMatrix,
    speed: { value: number },
}

export const PaddyWagon: LevelObject = {
    sprite: "paddy_wagon",
    speed: {value: 100},
    group: 'cars',
    immovable: true,
    positions: [
        {
            startX: 0,
            startY: 0,
            angle: 90,
            score: 20,
            moveX: 300,
            moveY: 0,
        },
        {
            startX: 1000,
            startY: -300,
            angle: 0,
            score: 50,
            moveX: 1000,
            moveY: 50
        },
        {
            startX: 1200,
            startY: 650,
            angle: 180,
            score: 100,
            moveX: 900,
            moveY: 400
        },
    ],
}

const data = {
    paddyWagon: PaddyWagon,
}
export default data;

export const reset = () => {
    for (let k in data){
        for (let p of data[k].positions)
        {
            p.done = false;
        }
    }
};
