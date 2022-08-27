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
        
        // for (let data of allBounds) {
        //     if (boundL(data) < playerR && boundT(data) < playerB && 
        //     boundR(data) > playerL && boundB(data) > playerT) {
        //         return false
        //     }
        // }
        return allBounds.find(data => this.isTwoSpritesOverlap(aBox, data, dir)) ? false : true

        // return true;

    }

    isTwoSpritesOverlap(player, object, dir) {
        let playerT = player.y + dir.y; 
        let playerB = (player.y + this.unit) + dir.y; 
        let playerL = player.x + dir.x; 
        let playerR = (player.x + this.unit) + dir.x;

        let boundT = object.y; 
        let boundB = object.y + this.unit; 
        let boundL = object.x; 
        let boundR = object.x + this.unit;

        // return true if overlap
        return boundL < playerR && boundT < playerB && boundR > playerL && boundB > playerT
    }
}