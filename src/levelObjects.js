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
            startX: -300,
            startY: 75,
            angle: 90,
            score: 20,
            moveX: 170,
            moveY: 75,
            entagleX: 60,
            entagleY: 20
        },
        {
            startX: 1000,
            startY: -300,
            angle: 0,
            score: 100,
            moveX: 1000,
            moveY: 150,
            entagleX: 40,
            entagleY: 20
        },
        {
            startX: 1200,
            startY: 700,
            angle: -90,
            score: 200,
            moveX: 1000,
            moveY: 700,
            entagleX: -60,
            entagleY: -160
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
