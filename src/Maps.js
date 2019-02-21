class Maps {
    constructor(game) {
        this.game = game;
        this.list = [
            {
                levelID: 1,
                name: 'Hello, World!',
                code: '11a100011100010x13ap0x6ae0x14a10001110001'
            },
            {
                levelID: 2,
                name: 'What does the fox say?',
                code: '11a100011100010x5a10x7ap000100e0x8a10x10a10x16a10x9a1'
            },
            {
                levelID: 3,
                name: 'Aye!',
                code: '11a100011100010x5a10x10ab0x11a10x7ap000100e0x8a10x5a10001110001',
            },
            {
                levelID: 4,
                name: 'Derpy',
                code: '11a122211122212x5a12x8a001002222p2200hb0002e2x5a001002x8a12x5a12221112221',
            },
            {
                levelID: 5,
                name: 'Ninja',
                code: '7a1001x5a0x8a2020x5aph00011020201100eb0001x5a001',
            },
            {
                levelID: 6,
                name: 'Hermit',
                code: '11a0x12a1x6ahb0110010x7a1001000e000010011hb01x6a0x12a10000p0x5a11110x5a111',
            },
            {
                levelID: 7,
                name: 'Going in circles',
                code: '12a00010x11ahb000010000101b01x6ahb01000h0000200b0x5a1000100h001x9a0x6ab0000h020pe0x5a1110x6a',
            },
            {
                levelID: 8,
                name: 'Destroy them with lasers!',
                code: '11a10001l0100010x13ap0x17ae0x5ab0x20a10001110001',
            },
            {
                levelID: 9,
                name: 'Clear a path',
                code: '11a1111l0l0l01x8a22010x6a120000e000b00100010000b0010001111000b000011110p0x6a11110001x8a',
            },
            {
                levelID: 10,
                name: 'Scenic route',
                code: '11a10000100l0x5a1000p02h0b0e0x6a20x5a10102021011001211002110x6ab0000h0001x9a',
            },
            {
                levelID: 11,
                name: 'Push past the pain',
                code: '11a00l000100bl0000b000b0x28a1p00100lu00010e0',
            },
            {
                levelID: 12,
                name: 'Slider',
                code: '11a0x10a101x8a0120x7abl02012x7a0ll0x6ab0x8a10111b01010e0x6a2100ph0',
            },
            {
                levelID: 13,
                name: 'The box',
                code: '9a10x7a10blr0000bl0x6ah00h0x8ahb0000e0000h0p0h0x6ablu0000bll000010x7a1',
            },
            {
                levelID: 14,
                name: 'Diamonds and guns',
                code: '9a111101x7a0001x5a00bc00011100101001001000ll0001001010011100pe0001x5a0001x7a01111',
            },
            {
                levelID: 15,
                name: 'Simple',
                code: '7a0x14a1bc0x6a10000hbll0110x5a1110pe00011100011',
            },
            {
                levelID: 16,
                name: 'A problem shared...',
                code: '8a110x5a10bc0x6a10bc02000bll01010010000e00010p00lr00001000',
            },
            {
                levelID: 17,
                name: 'Upon reflection...',
                code: '9a1111bc01x5a0x7a110x7a1blr0x8a110bml0000pe00110x7a1x10a',
            },
            {
                levelID: 18,
                name: 'Wraparound',
                code: '9a00010p21110bm0000b001100110bmr00010011100010001x6a0x7a112blu010bc00e00bm021x7a2bmu02x7abml0',
            },
            {
                levelID: 19,
                name: 'Bypass',
                code: '9a10x7a110bmr00e00bm00110x7a1blr0x8abc010x7a110bmu00p00bml00110x7a1',
            },
            {
                levelID: 20,
                name: 'Toggle',
                code: '9abmr0222bm0110e02x5a000022bl002bmr0bml0bmu00bmu02bml02bmu0000bc011101110110000100010x6ap00100001000',
            },
            {
                levelID: 21,
                name: 'Let this one slide',
                code: '9a120x6a10x5a20x14abs00h00pe020x5a2000020x8a10x5a201',
            },
            {
                levelID: 22,
                name: 'Gemini',
                code: '10a120x7a10x9a20x7a20020bs00pe000h0hbs0x10a20x9a2010020x5a1',
            },
            {
                levelID: 23,
                name: 'Pressing forward',
                code: '9a112x7a110x5abs001100102001122101221x5a0111000bc0202220pe00blr0x5a200012x5a',
            },
            {
                levelID: 24,
                name: 'The domino effect',
                code: '15a111101010101x6a00h00h00h00h00011110x11a1110000p00e00b0x5a110x13a10000bs00bs00bs00bs0x20a',
            }
        ];
    }

    getByLevelID(levelID) {
        for (let map of this.list) {
            if (map.levelID === levelID) {
                if (map.code) {
                    var decodedMap = this.game.encoder.decode(map.code);
                    decodedMap.levelID = map.levelID;
                    decodedMap.name = map.name;

                    return decodedMap;
                }

                return map;
            }
        };
    }
}
