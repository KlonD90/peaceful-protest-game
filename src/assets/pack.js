const pack = {
    boot: [
        {
            type: 'spritesheet',
            key: 'enter_bg',
            url: require('./enter_bg.png'),
            frameWidth: 135,
            frameHeight: 106
        },
        {
            type: 'spritesheet',
            key: 'enter_logo',
            url: require('./logo.png'),
            frameWidth: 669,
            frameHeight: 312
        },

    ],
    initial: [
        {
            type: 'atlasJSONArray',
            key: 'ALL_IMAGES',
            textureURL: require('./IMAGES.png'),
            atlasURL: require('./IMAGES.json'),
            atlasData: null
        },

        {
            type: 'spritesheet',
            key: 'langButtons',
            url: require('./langButtons.png'),
            frameWidth: 50,
            frameHeight: 50
        }
    ],
    helpTouch: [
        {
            type: 'spritesheet',
            key: 'helpMove',
            url: require('./helpMoveTouch.png'),
            frameWidth: 100,
            frameHeight: 100
        },
        {
            type: 'spritesheet',
            key: 'helpRun',
            url: require('./helpRunTouch.png'),
            frameWidth: 100,
            frameHeight: 100
        },
        /*
        {
            type: 'spritesheet',
            key: 'helpPoster',
            url: require('./posterButton.png'),
            frameWidth: 70,
            frameHeight: 70
        }*/
    ],
    helpDesktop: [
        {
            type: 'spritesheet',
            key: 'helpMove',
            url: require('./helpMoveDesktop.png'),
            frameWidth: 150,
            frameHeight: 50
        },
        {
            type: 'spritesheet',
            key: 'helpRun',
            url: require('./helpRunDesktop.png'),
            frameWidth: 150,
            frameHeight: 50
        },
        {
            type: 'spritesheet',
            key: 'helpPoster',
            url: require('./helpPosterDesktop.png'),
            frameWidth: 250,
            frameHeight: 50
        }
    ],
    helpTips: [
        {
            type: 'image',
            key: 'space_pozor',
            url: require('./info01.png'),
            frameWidth: 338,
            frameHeight: 74,
        },
        {
            type: 'image',
            key: 'space_fight',
            url: require('./info02.png'),
            frameWidth: 338,
            frameHeight: 74,
        },
        {
            type: 'image',
            key: 'shift_run',
            url: require('./info03.png'),
            frameWidth: 338,
            frameHeight: 74,
        },
        {
            type: 'image',
            key: 'journalists',
            url: require('./info04.png'),
            frameWidth: 338,
            frameHeight: 74,
        },
    ],
    levelCommon: [

        {
            type: 'spritesheet',
            key: 'defend',
            url: require('./defend.png'),
            frameWidth: 360,
            frameHeight: 81
        },
        /*
        {
            type: 'spritesheet',
            key: 'playButton',
            url: require('./playButton.png'),
            frameWidth: 100,
            frameHeight: 100
        },
        {
            type: 'spritesheet',
            key: 'help',
            url: require('./help.png'),
            frameWidth: 48,
            frameHeight: 48
        },
        {
            type: 'spritesheet',
            key: 'points_1',
            url: require('./points_1.png'),
            frameWidth: 67,
            frameHeight: 45
        },
        {
            type: 'spritesheet',
            key: 'points_2',
            url: require('./points_2.png'),
            frameWidth: 67,
            frameHeight: 46
        },
        {
            type: 'spritesheet',
            key: 'points_5',
            url: require('./points_5.png'),
            frameWidth: 69,
            frameHeight: 46
        },
        {
            type: 'spritesheet',
            key: 'points_10',
            url: require('./points_10.png'),
            frameWidth: 104,
            frameHeight: 47
        },*/
        {
            type: 'spritesheet',
            key: 'paddy_wagon',
            url: require('./paddy_wagon.png'),
            frameWidth: 123,
            frameHeight: 303,
        },
        {
            type: 'spritesheet',
            key: 'klyaksa',
            url: require('./klyaksa.png'),
            frameWidth: 1035,
            frameHeight: 1035
        }
        /*,
        {
            type: 'spritesheet',
            key: 'star_01',
            url: require('./star_01.png'),
            frameHeight: 37,
            frameWidth: 31,
            frameMax: 3,
            margin: 0,
            spacing: 0
        },
        {
            type: 'spritesheet',
            key: 'star_02',
            url: require('./star_02.png'),
            frameHeight: 37,
            frameWidth: 31,
            frameMax: 3,
            margin: 0,
            spacing: 0
        }
        {
            type: 'spritesheet',
            key: 'star_03',
            url: require('./star_03.png'),
            frameHeight: 37,
            frameWidth: 31,
            frameMax: 3,
            margin: 0,
            spacing: 0
        },
        {
            type: 'spritesheet',
            key: 'repeatButton',
            url: require('./repeatButton.png'),
            frameWidth: 100,
            frameHeight: 100
        },
        {
            type: 'spritesheet',
            key: 'soundButtons',
            url: require('./soundButtons.png'),
            frameWidth: 48,
            frameHeight: 48
        },
        {
            type: 'spritesheet',
            key: 'restartButton',
            url: require('./restart.png'),
            frameWidth: 48,
            frameHeight: 48
        },
        
        {
            type: 'spritesheet',
            key: 'omon',
            url: require('./omon.png'),
            frameWidth: 31,
            frameHeight: 37
        },
        {
            type: 'spritesheet',
            key: 'nod',
            url: require('./nod.png'),
            frameWidth: 31,
            frameHeight: 37
        },
        {
            type: 'spritesheet',
            key: 'podskazka_plakat',
            url: require('./soundButtons.png'),
            frameWidth: 50,
            frameHeight: 50
        },
        {
            type: 'spritesheet',
            key: 'plakat',
            url: require('./plakat.png'),
            frameWidth: 44,
            frameHeight: 12
        }*/,
        {
            type: 'audio',
            key: 'theme',
            urls: require('./audio/theme.mp3')
        },
        {
            type: 'audio',
            key: 'punch01',
            urls: require('./audio/punch01.mp3')
        },
        {
            type: 'audio',
            key: 'punch02',
            urls: require('./audio/punch02.mp3')
        },
        {
            type: 'audio',
            key: 'applause',
            urls: require('./audio/applause.mp3')
        },
        {
            type: 'audio',
            key: 'boo',
            urls: require('./audio/boo.mp3')
        },
        {
            type: 'audio',
            key: 'bp_loop',
            urls: require('./audio/bp.mp3')
        },
        {
            type: 'audio',
            key: 'meeting_sound',
            urls: require('./audio/ms.mp3')
        },
        {
            type: 'audio',
            key: 'croud',
            urls: require('./audio/croud.mp3')
        },
        {
            type: 'audio',
            key: 'scream03',
            urls: require('./audio/scream03.mp3')
        },
        {
            type: 'audio',
            key: 'truck',
            urls: require('./audio/truck.mp3')
        },
        {
            type: 'audio',
            key: 'pick',
            urls: require('./audio/pick.mp3')
        },
        
        {
            type: 'atlasJSONArray',
            key: 'humans',
            textureURL: require('./humans.png'),
            atlasURL: require('./humans.json'),
            atlasData: null
        }
    ],
    level1: [
        
        /*
        
        {
            type: 'spritesheet',
            key: 'border',
            url: require('./border.png'),
            frameWidth: 100,
            frameHeight: 50
        },
        {
            type: 'spritesheet',
            key: 'auto',
            url: require('./auto.png'),
            frameWidth: 290,
            frameHeight: 135
        },
        {
            type: 'spritesheet',
            key: 'cop',
            url: require('./cop01.png'),
            frameWidth: 44,
            frameHeight: 49
        },
        {
            type: 'spritesheet',
            key: 'shield',
            url: require('./shield.png'),
            frameWidth: 316,
            frameHeight: 140
        }
        ,{
            type: 'spritesheet',
            key: 'journalist',
            url: require('./journalist01.png'),
            frameWidth: 32,
            frameHeight: 49
        },
        {
            type: 'spritesheet',
            key: 'player_sprite',
            url: require('./player_sprite.png'),
            frameWidth: 31,
            frameHeight: 37,
            frameMax: 7,
            margin: 0,
            spacing: 0
        },
        {
            type: 'spritesheet',
            key: 'npc_01',
            url: require('./npc_01.png'),
            frameWidth: 31,
            frameHeight: 37,
            frameMax: 6,
            margin: 0,
            spacing: 0
        },
        {
            type: 'spritesheet',
            key: 'npc_02',
            url: require('./npc_02.png'),
            frameWidth: 31,
            frameHeight: 37,
            frameMax: 6,
            margin: 0,
            spacing: 0
        },
        {
            type: 'spritesheet',
            key: 'npc_03',
            url: require('./npc_03.png'),
            frameWidth: 31,
            frameHeight: 37,
            frameMax: 6,
            margin: 0,
            spacing: 0
        },
        {
            type: 'spritesheet',
            key: 'npc_04',
            url: require('./npc_04.png'),
            frameWidth: 31,
            frameHeight: 37,
            frameMax: 6,
            margin: 0,
            spacing: 0
        },
        {
            type: 'spritesheet',
            key: 'npc_05',
            url: require('./npc_05.png'),
            frameWidth: 31,
            frameHeight: 37,
            frameMax: 6,
            margin: 0,
            spacing: 0
        },
        {
            type: 'spritesheet',
            key: 'npc_06',
            url: require('./npc_06.png'),
            frameWidth: 31,
            frameHeight: 38,
            frameMax: 6,
            margin: 0,
            spacing: 0
        },
        {
            type: 'spritesheet',
            key: 'npc_07',
            url: require('./npc_07.png'),
            frameWidth: 31,
            frameHeight: 38,
            frameMax: 6,
            margin: 0,
            spacing: 0
        },
        {
            type: 'spritesheet',
            key: 'npc_08',
            url: require('./npc_08.png'),
            frameWidth: 31,
            frameHeight: 38,
            frameMax: 6,
            margin: 0,
            spacing: 0
        },

        
       
        {
            type: 'spritesheet',
            key: 'cop_sprite',
            url: require('./cop.png'),
            frameWidth: 31,
            frameHeight: 37,
            frameMax: 3,
            margin: 0,
            spacing: 0
        },
        {
            type: 'spritesheet',
            key: 'press_sprite',
            url: require('./press.png'),
            frameWidth: 31,
            frameHeight: 37,
            frameMax: 3,
            margin: 0,
            spacing: 0
        },
        {
            type: 'spritesheet',
            key: 'press_01',
            url: require('./press_01.png'),
            frameWidth: 31,
            frameHeight: 37,
            frameMax: 3,
            margin: 0,
            spacing: 0
        },
        {
            type: 'spritesheet',
            key: 'press_02',
            url: require('./press_02.png'),
            frameWidth: 31,
            frameHeight: 37,
            frameMax: 3,
            margin: 0,
            spacing: 0
        },

        /*,
        {
            type: 'spritesheet',
            key: 'protester1',
            url: require('./protester01.png'),
            frameWidth: 32,
            frameHeight: 48
        },
        {
            type: 'spritesheet',
            key: 'protester2',
            url: require('./protester02.png'),
            frameWidth: 30,
            frameHeight: 46
        },
        {
            type: 'spritesheet',
            key: 'protester3',
            url: require('./protester03.png'),
            frameWidth: 30,
            frameHeight: 47
        },*/
        {
            type: 'spritesheet',
            key: 'injury',
            url: require('./injury.png'),
            frameWidth: 30,
            frameHeight: 31
        },
        /*
        {
            type: 'spritesheet',
            key: 'poster',
            url: require('./poster.png'),
            frameWidth: 60,
            frameHeight: 71
        },
        {
            type: 'spritesheet',
            key: 'mobile_poster',
            url: require('./mobile_poster.png'),
            frameWidth: 50,
            frameHeight: 50
        },
        {
            type: 'spritesheet',
            key: 'dropped_poster',
            url: require('./dropped_poster.png'),
            frameWidth: 44,
            frameHeight: 34
        },*/
        {
            type: 'image',
            key: 'ground',
            url: require('./ground01.png'),
            overwrite: false
        },
        {
            type: 'image',
            key: 'meeting_map',
            url: require('./meeting_map.png'),
            overwrite: false
        },
        {
            type: 'image',
            key: 'garbage_01',
            url: require('./garbage_01.png'),
            overwrite: false
        },
        {
            type: 'image',
            key: 'garbage_02',
            url: require('./garbage_02.png'),
            overwrite: false
        },
        {
            type: 'image',
            key: 'garbage_03',
            url: require('./garbage_03.png'),
            overwrite: false
        }
    ],
    /*
    level2: [
        {
            type: 'spritesheet',
            key: 'border',
            url: require('./border.png'),
            frameWidth: 100,
            frameHeight: 50
        },
        {
            type: 'spritesheet',
            key: 'auto',
            url: require('./auto.png'),
            frameWidth: 290,
            frameHeight: 135
        },
        {
            type: 'spritesheet',
            key: 'cop',
            url: require('./cop02.png'),
            frameWidth: 46,
            frameHeight: 54
        },
        {
            type: 'spritesheet',
            key: 'swat',
            url: require('./swat.png'),
            frameWidth: 30,
            frameHeight: 46
        },
        {
            type: 'spritesheet',
            key: 'shield',
            url: require('./shield.png'),
            frameWidth: 316,
            frameHeight: 140
        },
        {
            type: 'spritesheet',
            key: 'journalist',
            url: require('./journalist01.png'),
            frameWidth: 32,
            frameHeight: 49
        },
        {
            type: 'spritesheet',
            key: 'protester1',
            url: require('./protester01.png'),
            frameWidth: 32,
            frameHeight: 48
        },
        {
            type: 'spritesheet',
            key: 'protester2',
            url: require('./protester02.png'),
            frameWidth: 30,
            frameHeight: 46
        },
        {
            type: 'spritesheet',
            key: 'protester3',
            url: require('./protester03.png'),
            frameWidth: 30,
            frameHeight: 47
        },
        {
            type: 'spritesheet',
            key: 'injury',
            url: require('./injury.png'),
            frameWidth: 30,
            frameHeight: 31
        },
        {
            type: 'spritesheet',
            key: 'poster',
            url: require('./poster.png'),
            frameWidth: 60,
            frameHeight: 71
        },
        {
            type: 'image',
            key: 'ground',
            url: require('./ground02.png'),
            overwrite: false
        }
    ]*/
};
export default JSON.stringify(pack);
