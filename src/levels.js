export default {
    level1: {
        id: 'level1',
        worldWidth: 1200,
        worldHeight: 800,
        duration: 3 * 60, // s
        winningThreshold: 100,
        scoreWin: 500,
        cops: {
            count: [
                [4, 0],
                [20, 1],
                [100, 2],
                [200, 3],
                [300, 6],
                [400, 7],
                [1000, 10]
            ],
            speed: {
                value: 60,
                running: 1.7,
                convoy: 0.5
            },
            fov: {
                distance: 150,
                angle: 100
            }
        },
        press: {
            count: [
                [4, 0],
                [40, 1],
                [100, 2],
                [1000, 4]
            ],
            speed: {
                value: 50
            },
            fov: {
                distance: 150,
                angle: 100
            },
            score: 0,
            duration: 5 // s
        },
        protesters: {
            count: {
                start:1,//100,
                max: 100,
                add: 14
            },
            speed: {
                value: 60
            },
            mood: 0.3,
            moodUp: 0.002,
            moodDown: 0.0001,
            poster: {
                drop: 0.3,
                alive: 20 // s
            }
        },
        player: {
            speed: {
                value: 100,
                withPoster: 0.6,
                running: 1.7
            },
            radius: 120,
            stamina: 100,
            staminaCooldown: 5, // s
            powerUp: 0.1,
            powerDown: 0.01
        },
        swat: {
            count: 5,
            speed: {
                value: 200
            },
            frequency: 5000,
            scoreThreshold: 300
        },
        star: {
            score: 200
        }
    },
    // level2: {
    //     id: 'level2',
    //     worldWidth: 800,
    //     worldHeight: 800,
    //     duration: 4 * 60, // s
    //     winningThreshold: 75,
    //     cops: {
    //         count: [
    //             [40, 1],
    //             [50, 2],
    //             [60, 3],
    //             [90, 4],
    //             [100, 5]
    //         ],
    //         speed: {
    //             value: 60,
    //             running: 1.8
    //         },
    //         fov: {
    //             distance: 150,
    //             angle: 120
    //         }
    //     },
    //     swat: {
    //         count: 5,
    //         speed: {
    //             value: 200
    //         },
    //         frequency: 5000,
    //         scoreThreshold: 300
    //     },
    //     press: {
    //         count: 5,
    //         speed: {
    //             value: 50
    //         },
    //         fov: {
    //             distance: 100,
    //             angle: 100
    //         },
    //         duration: 5
    //     },
    //     protesters: {
    //         count: {
    //             start: 20,
    //             max: 60,
    //             add: 10
    //         },
    //         max: 60,
    //         speed: {
    //             value: 60
    //         },
    //         mood: 0.25,
    //         moodUp: 0.002,
    //         moodDown: 0.0001,
    //         poster: {
    //             drop: 0.12,
    //             alive: 20 // s
    //         }
    //     },
    //     player: {
    //         speed: {
    //             value: 100,
    //             withPoster: 0.6,
    //             running: 1.5
    //         },
    //         radius: 120,
    //         stamina: 200,
    //         staminaCooldown: 5, // s
    //         powerUp: 0.1,
    //         powerDown: 0.01
    //     }
    // }
};
