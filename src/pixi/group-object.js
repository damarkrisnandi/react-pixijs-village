export default class GroupObject {
    getBuilding(x, y) {
        const building1 = [];
        for (let i=0; i<4; i++) {
            for (let j=0; j<6; j++) {
                if (j<=3) {
                    building1.push({x: 14+j, y: 2+i, nowx: 1+j+x, nowy: 1+i+y})
                    if (j === 3) {
                        building1.push({x: 14+j, y: 2+i, nowx: 2+j+x, nowy: 1+i+y})
                    }
                } else {
                    building1.push({x: 14+j, y: 2+i, nowx: 2+j+x, nowy: 1+i+y})
                }
            }
        }

        building1.push({x: 19, y: 1, nowx: 1+x, nowy: 4+y})
        building1.push({x: 19, y: 1, nowx: 7+x, nowy: 4+y})

        for (let i=0; i < 3; i++) {
            for (let j=0; j < 7; j++) {
                if (i === 0) {
                    if (j === 0 || j === 6) {
                        building1.push({x: 20, y: 1, nowx: 1+j+x, nowy: 5+y})
                    } else {
                        building1.push({x: 17, y: 1, nowx: 1+j+x, nowy: 5+y})
                    }
                } 

                if (i === 1) {
                    if (j === 2 || j === 4) {
                        // jendela
                        building1.push({x: 16, y: 1, nowx: 1+j+x, nowy: 5+i+y})
                    } else if (j === 0 || j === 6) {
                        building1.push({x: 20, y: 1, nowx: 1+j+x, nowy: 5+i+y})
                    } else {
                        building1.push({x: 18, y: 1, nowx: 1+j+x, nowy: 5+i+y})
                    }
                }

                if (i === 2) {
                    if (j !== 0 && j !== 6 && j !== 3) {
                        building1.push({x: 18, y: 1, nowx: 1+j+x, nowy: 5+i+y})
                    }
                }
            }
        }

        return building1;
    }

    getFence(sizeX, sizeY) {
        const fence = [];
        // =|
        const fence1 = {x: 4, y: 7};
        // |= 
        const fence2 = {x: 6, y: 6};
        // =|.
        const fence1a = {x: 5, y: 7};
        // .|= 
        const fence2a = {x: 6, y: 7};
        // =|=
        const fence3 = {x: 5, y: 6};
        // |
        const fence4 = {x: 4, y: 6};
        // |= |= =|= =| =|

        for (let i=0; i<sizeY; i++) {
            for (let j=0; j<sizeX; j++) {
                if (j === 0 && (i === 0 || i === sizeY - 1)) {
                    if (i === 0) {
                        fence.push({x: fence2a.x, y: fence2a.y, nowx: j + 1, nowy: i + 1 })
                    } else {
                        fence.push({x: fence2.x, y: fence2.y, nowx: j + 1, nowy: i + 1 })
                    }
                } else if (j === sizeX - 1 && (i === 0 || i === sizeY - 1)) {
                    if (i === 0) {
                        fence.push({x: fence1a.x, y: fence1a.y, nowx: j + 1, nowy: i + 1 })
                    } else {
                        fence.push({x: fence1.x, y: fence1.y, nowx: j + 1, nowy: i + 1 })
                    }
                } else if ((i !== 0 && i !== sizeY) && (j === 0 || j === sizeX - 1)) {
                    fence.push({x: fence4.x, y: fence4.y, nowx: j + 1, nowy: i + 1 })
                } else if (i === 0) {
                    fence.push({x: fence3.x, y: fence3.y, nowx: j + 1, nowy: i + 1 })
                } else if (i === sizeY - 1) {
                    if (j > Math.floor(sizeX/2) + 2 ||  j < Math.floor(sizeX/2) - 2) {
                        fence.push({x: fence3.x, y: fence3.y, nowx: j + 1, nowy: i + 1 })
                    } else {
                        if (j === Math.floor(sizeX/2) + 2) {
                            fence.push({x: fence2a.x, y: fence2.y, nowx: j + 1, nowy: i + 1 })
                        } else if (j === Math.floor(sizeX/2) - 2) {
                            fence.push({x: fence1a.x, y: fence1.y, nowx: j + 1, nowy: i + 1 })
                        }

                    }
                }
            }
        } 

        return fence;

    }

    getGarden() {
        const garden = [];
        // lahan
        const varPlants = 4;
        const numPlants = 5;
        for (let i=0; i<numPlants + 2; i++) {
            for (let j=0; j<varPlants + 2; j++) {
                if (i === 0) {
                    if (j === 0 || j === varPlants + 1) garden.push({x: 2, y: 6, nowx: j+1, nowy: i+1})
                    else garden.push({x: 2, y: 7, nowx: j+1, nowy: i+1})
                } else if (i === numPlants + 1) {
                    if (j === 0 || j === varPlants + 1) garden.push({x: 2, y: 6, nowx: j+1, nowy: i+1})
                    else garden.push({x: 2, y: 5, nowx: j+1, nowy: i+1})
                } else {
                    if (j !== 0 && j !== varPlants + 1) { 
                        garden.push({x: 6, y: 1, nowx: j+1, nowy: i+1})
                        garden.push({x: 10+j-1, y: 8, nowx: j+1, nowy: i+1})
                    } else {
                        if (j === 0) {
                            garden.push({x: 3, y: 6, nowx: j+1, nowy: i+1})
                        } else {
                            garden.push({x: 1, y: 6, nowx: j+1, nowy: i+1})
                        }
                    }
                }
                // garden.push({x: 6, y: 1, nowx: j+1, nowy: i+1})
                // garden.push({x: 10+j, y: 8, nowx: j+1, nowy: i+1})
            }
        }

        return garden;
    }

    getWASD() {
        const wasd = [];
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j<3; j++) {
                wasd.push({x: j + 1, y: i + 1, nowx: j + 1, nowy: i + 1})
            }
        }

        return wasd;
    }

    getRiver(length, riverWidth, posXBridge) {
        const river = [];
        for (let i = 0; i < 1 + riverWidth; i++) {
            for (let j = 0; j < length; j++) {
                if (i === 0) {
                    if (j !== posXBridge - 1) {
                        if (j === 0) {
                            river.push({x: 5, y: 4, nowx: j + 1, nowy: i + 1})
                        } else if (j === length - 1) {
                            river.push({x: 7, y: 4, nowx: j + 1, nowy: i + 1})
                        } else {
                            river.push({x: 6, y: 4, nowx: j + 1, nowy: i + 1})
                        }

                        if (j === (posXBridge - 1) - 1) {
                            river.push({x: 6, y: 3, nowx: j + 1, nowy: i + 1})
                        } else if (j === (posXBridge - 1) + 1) {
                            river.push({x: 6, y: 3, nowx: j + 1, nowy: i + 1})
                        }
                    }
                } else if (i > 0) {
                    if (j !== posXBridge - 1) {
                        if (j % 2 === 0) {
                            river.push({x: 14, y: 1, nowx: j + 1, nowy: i + 1})
                        } else {
                            river.push({x: 15, y: 1, nowx: j + 1, nowy: i + 1})
                        }

                        if (j === (posXBridge - 1) - 1) {
                            river.push({x: 5, y: 3, nowx: j + 1, nowy: i + 1})
                        } else if (j === (posXBridge - 1) + 1) {
                            river.push({x: 7, y: 3, nowx: j + 1, nowy: i + 1})
                        }
                    }
                } 
                // else if (i === 2) {
                //     if (j !== posXBridge - 1) { 
                //         if (j === 0) {
                //             river.push({x: 5, y: 2, nowx: j + 1, nowy: i + 1})
                //         } else if (j === length - 1) {
                //             river.push({x: 7, y: 2, nowx: j + 1, nowy: i + 1})
                //         } else {
                //             river.push({x: 6, y: 2, nowx: j + 1, nowy: i + 1})
                //         }

                //         if (j === (posXBridge - 1) - 1) {
                //             river.push({x: 6, y: 3, nowx: j + 1, nowy: i + 1})
                //         } else if (j === (posXBridge - 1) + 1) {
                //             river.push({x: 6, y: 3, nowx: j + 1, nowy: i + 1})
                //         }
                //     }
                // }
            }
        }

        return river;
    }

    getStreetToGate() {
        const street = [];
        for (let i = 0; i<3; i++) {
            street.push({x: 5, y: 5, nowx: 1, nowy: i + 1});
        }
        street.push({x: 1, y: 7, nowx: 1, nowy: 3});

        for (let i = 1; i<6; i++) {
            street.push({x: 4, y: 5, nowx: i + 1, nowy: 3});
        }
        street.push({x: 3, y: 5, nowx: 7, nowy: 3});
        for (let i = 0; i<6; i++) {
            street.push({x: 5, y: 5, nowx: 7, nowy: i + 4});
        }
        return street;
    }

    getChest() {
        const chest = [{x: 12, y: 6, nowx: 1, nowy: 1}];
        return chest;
    }

    getWell() {
        const well = [
            {x:13,y:5,nowx:1,nowy:1},
            {x:13,y:6,nowx:1,nowy:2}
        ];
        return well
    }

    getHill1() {
        return [
            {"x":5,"y":4,"nowx":1,"nowy":26},
            {"x":6,"y":4,"nowx":2,"nowy":26},
            {"x":6,"y":4,"nowx":3,"nowy":26},
            {"x":6,"y":4,"nowx":4,"nowy":26},
            {"x":6,"y":4,"nowx":5,"nowy":26},
            {"x":6,"y":4,"nowx":6,"nowy":26},
            {"x":6,"y":4,"nowx":7,"nowy":26},
            {"x":6,"y":4,"nowx":8,"nowy":26},
            {"x":6,"y":4,"nowx":9,"nowy":26},
            {"x":6,"y":4,"nowx":10,"nowy":26},
            {"x":6,"y":4,"nowx":11,"nowy":26},
            {"x":6,"y":4,"nowx":12,"nowy":26},
            {"x":6,"y":4,"nowx":13,"nowy":26},
            {"x":6,"y":4,"nowx":14,"nowy":26},
            {"x":6,"y":4,"nowx":15,"nowy":26},
            {"x":6,"y":4,"nowx":16,"nowy":26},
            {"x":6,"y":4,"nowx":17,"nowy":26},
            {"x":6,"y":4,"nowx":18,"nowy":26},
            {"x":6,"y":4,"nowx":19,"nowy":26},
            {"x":6,"y":4,"nowx":20,"nowy":26},
            {"x":6,"y":4,"nowx":21,"nowy":26},
            {"x":6,"y":4,"nowx":22,"nowy":26},
            {"x":6,"y":4,"nowx":23,"nowy":26},
            {"x":6,"y":4,"nowx":26,"nowy":26},
            {"x":6,"y":4,"nowx":27,"nowy":26},
            {"x":7,"y":4,"nowx":28,"nowy":26},
            {"x":7,"y":3,"nowx":28,"nowy":25},
            {"x":7,"y":3,"nowx":28,"nowy":24},
            {"x":7,"y":3,"nowx":28,"nowy":23},
            {"x":7,"y":3,"nowx":28,"nowy":22},
            {"x":7,"y":3,"nowx":28,"nowy":21},
            {"x":7,"y":3,"nowx":28,"nowy":20},
            {"x":7,"y":3,"nowx":28,"nowy":19},
            {"x":7,"y":3,"nowx":28,"nowy":18},
            {"x":7,"y":3,"nowx":28,"nowy":17},
            {"x":7,"y":3,"nowx":28,"nowy":16},
            {"x":7,"y":3,"nowx":28,"nowy":15},
            {"x":7,"y":3,"nowx":28,"nowy":14},
            {"x":7,"y":3,"nowx":28,"nowy":13},
            {"x":7,"y":3,"nowx":28,"nowy":12},
            {"x":7,"y":3,"nowx":28,"nowy":11},
            {"x":7,"y":3,"nowx":28,"nowy":10},
            {"x":7,"y":3,"nowx":28,"nowy":9},
            {"x":7,"y":3,"nowx":28,"nowy":8},
            {"x":7,"y":3,"nowx":28,"nowy":7},
            {"x":7,"y":3,"nowx":28,"nowy":6},
            {"x":7,"y":3,"nowx":28,"nowy":5},
            {"x":7,"y":3,"nowx":28,"nowy":4},
            {"x":7,"y":3,"nowx":28,"nowy":3},
            {"x":7,"y":3,"nowx":28,"nowy":2},
            {"x":7,"y":2,"nowx":28,"nowy":1},
            {"x":11,"y":4,"nowx":1,"nowy":27},
            {"x":11,"y":4,"nowx":2,"nowy":27},
            {"x":11,"y":4,"nowx":3,"nowy":27},
            {"x":11,"y":4,"nowx":4,"nowy":27},
            {"x":11,"y":4,"nowx":5,"nowy":27},
            {"x":11,"y":4,"nowx":6,"nowy":27},
            {"x":11,"y":4,"nowx":7,"nowy":27},
            {"x":11,"y":4,"nowx":8,"nowy":27},
            {"x":11,"y":4,"nowx":9,"nowy":27},
            {"x":11,"y":4,"nowx":10,"nowy":27},
            {"x":11,"y":4,"nowx":11,"nowy":27},
            {"x":11,"y":4,"nowx":12,"nowy":27},
            {"x":11,"y":4,"nowx":13,"nowy":27},
            {"x":11,"y":4,"nowx":14,"nowy":27},
            {"x":11,"y":4,"nowx":15,"nowy":27},
            {"x":11,"y":4,"nowx":16,"nowy":27},
            {"x":11,"y":4,"nowx":17,"nowy":27},
            {"x":11,"y":4,"nowx":18,"nowy":27},
            {"x":11,"y":4,"nowx":19,"nowy":27},
            {"x":11,"y":4,"nowx":20,"nowy":27},
            {"x":11,"y":4,"nowx":21,"nowy":27},
            {"x":11,"y":4,"nowx":22,"nowy":27},
            {"x":11,"y":4,"nowx":23,"nowy":27},
            {"x":11,"y":4,"nowx":26,"nowy":27},
            {"x":11,"y":4,"nowx":27,"nowy":27},
            {"x":11,"y":4,"nowx":28,"nowy":27}]
    }

    getHillStreet1() {
        return [
            {"x":10,"y":5,"nowx":24,"nowy":26},
            {"x":10,"y":5,"nowx":25,"nowy":26},
            {"x":9,"y":5,"nowx":24,"nowy":27},
            {"x":9,"y":5,"nowx":25,"nowy":27}]
    }
}