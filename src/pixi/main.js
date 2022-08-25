import Provider from "./provider";
import Player from "./player";
import LibraryScene from "./scenes/library";
import { Controls } from "./utils/model-control";


export default class PixiMain extends Provider {
    unit = 16;
    createWorld() {
        this.app.renderer.backgroundColor = 'black';
        this.app.renderer.view.style.position = 'absolute';
    }

    createMap() {
        this.villageMap.init();

        const libraryScene = new LibraryScene();
        libraryScene.createMap();

        this.villageMapBlock.addChild(...libraryScene.libraryContainer.children)

        return this.villageMapBlock;
    }

    createPlayer() {
        const playerData = new Player()
        playerData.init()
        this.player = playerData.player;
    }

    characterMapping() {
        const blockMapping = [];
        for (let y = 0; y < this.villageMap.map.length; y++) {
            for (let x = 0; x < this.villageMap.map[y].length; x++) {
                const conditions = {
                    "q": () => {blockMapping.push({x: 5, y: 2, nowx: x + 1, nowy: y + 1})},
                    "qz": () => {blockMapping.push({x: 5, y: 3, nowx: x + 1, nowy: y + 1})},
                    "z": () => {blockMapping.push({x: 5, y: 4, nowx: x + 1, nowy: y + 1})},
                    "qe": () => {blockMapping.push({x: 6, y: 2, nowx: x + 1, nowy: y + 1})},
                    "e": () => {blockMapping.push({x: 7, y: 2, nowx: x + 1, nowy: y + 1})},
                    "ec": () => {blockMapping.push({x: 7, y: 3, nowx: x + 1, nowy: y + 1})},
                    "zc": () => {blockMapping.push({x: 6, y: 4, nowx: x + 1, nowy: y + 1})},
                    "c": () => {blockMapping.push({x: 7, y: 4, nowx: x + 1, nowy: y + 1})},
                    ".": () => {blockMapping.push({x: 6, y: 3, nowx: x + 1, nowy: y + 1})},
                    "#": () => {blockMapping.push({x: 2, y: 6, nowx: x + 1, nowy: y + 1})},
                }

                try {
                    conditions[this.villageMap.map[y][x]]();    
                } catch (error) {
                    console.log(error);
                }
                
            }
        }
        return blockMapping;
    }

    checkAllCollision(dir, player, mapBlock) {
        let valid = true
        for (let container of mapBlock.children) {
            valid = valid && this.collisionObjvsCont(player, container.children.find(d => d.name.startsWith('collider')), dir)
        }
        return valid;
    }

    collisionObjvsCont(aObj, bCont, dir) {
        const aBox = aObj.getBounds();
        const allBounds = bCont.children.map(spr => spr.getBounds());
        // if (allBounds.find(data => data.x === aBox.x + (dir.x * this.unit) && data.y === aBox.y + (dir.y * this.unit))) {
        //     console.log(allBounds.find(data => data.x === aBox.x + (dir.x * this.unit) && data.y === aBox.y + (dir.y * this.unit)))
        // }
        return allBounds.find(data => data.x === aBox.x + (dir.x * this.unit) && data.y === aBox.y + (dir.y * this.unit)) ? false : true;
    }

    playerMovement(key) {
        let move = {x: 0, y: 0};
        const {UP, LEFT, RIGHT, DOWN} = new Controls();
        switch (key) {
            case UP:
                this.player = this.animations.walkUp;
                move = {x: 0, y: -1};
                break;

            case LEFT:
                this.player = this.animations.walkLeft
                move = {x: -1, y: 0};
                break;

            case DOWN:
                this.player = this.animations.walkDown
                move = {x: 0, y: 1};
                break;
            case RIGHT:
                this.player = this.animations.walkRight
                move = {x: 1, y: 0};
                break;

            default:
                move = {x: 0, y: 0};
                break;
        }

        if (this.checkAllCollision(move, this.player, this.villageMapBlock)) {
            for (let i = 0; i < this.unit * 10000; i++) {
                this.villageMapBlock.x -= (move.x) / (10000 * 2)
                this.villageMapBlock.y -= (move.y) / (10000 * 2)
            }   
        }
    }
}