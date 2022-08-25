export default class VillageMap {
    map = [];
    mapSize = {x: 14, y: 12}

    // mapSize = {x: 30, y: 30}

    init() {
        for (let y = 0; y < this.mapSize.y; y++) {
            const mapy = []
            for (let x = 0; x < this.mapSize.x; x++) {
                if (x === 0 && y === 0) mapy.push('q');
                else if (x === 0 && y === this.mapSize.y - 1) mapy.push('z');
                else if (x === this.mapSize.x - 1 && y === 0) mapy.push('e');
                else if (x === this.mapSize.x - 1 && y === this.mapSize.y - 1) mapy.push('c');
                else if (x === 0) mapy.push('qz');
                else if (x === this.mapSize.x - 1) mapy.push('ec');
                else if (y === 0) mapy.push('qe');
                else if (y === this.mapSize.y - 1) mapy.push('zc');
                else mapy.push('.');
            }
            this.map.push(mapy);
        }

    }

    initBound() {
        const blocks = [];
        for (let i = 0; i < this.mapSize.y; i++) {
            for (let j = 0; j < this.mapSize.x; j++) {
                let block = null;
                if (j === 0 && i === 0) block = {x: 5, y: 2, nowx: j + 1, nowy: i + 1};
                else if (j === 0 && i === this.mapSize.y - 1) block = {x: 5, y: 4, nowx: j + 1, nowy: i + 1};
                else if (j === this.mapSize.x - 1 && i === 0) block = {x: 7, y: 2, nowx: j + 1, nowy: i + 1};
                else if (j === this.mapSize.x - 1 && i === this.mapSize.y - 1) block = {x: 7, y: 4, nowx: j + 1, nowy: i + 1};
                else if (j === 0) block = {x: 5, y: 3, nowx: j + 1, nowy: i + 1};
                else if (j === this.mapSize.x - 1) block = {x: 7, y: 3, nowx: j + 1, nowy: i + 1};
                else if (i === 0) block = {x: 6, y: 2, nowx: j + 1, nowy: i + 1};
                else if (i === this.mapSize.y - 1) block = {x: 6, y: 4, nowx: j + 1, nowy: i + 1};
                // else mapy.push('.');
                if (block) blocks.push(block);
            }
        }

        return blocks;

    }
}