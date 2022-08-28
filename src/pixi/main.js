import Provider from "./provider";
import Player from "./player";
import LibraryScene from "./scenes/library";
// import { Container } from "pixi.js";


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

    /**
     * 
     * @param {Object} dir direction / arah pergerakan player
     * @param {Container} player 
     * @param {Container} mapBlock 
     * @returns jika true maka player menabrak collider
     */
    isPlayerCollideWithCollider(dir, player, mapBlock) {
        let valid = false
        for (let container of mapBlock.children) {
            const aBox = player.getBounds();
            const collider = container.children.find(d => d.name.startsWith('collider'));
            const allBounds = collider.children.map(spr => spr.getBounds());
            
            const isCollide = allBounds.find(data => this.isTwoSpritesOverlap(aBox, data, dir)) ? true : false;

            valid = valid || isCollide;

            if (valid) break
        }
        return valid;
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

    getInfo(dir, player, mapBlock) {
        let isGetInfo = false;
        let spriteName = '';
        let message = null;
        for (let container of mapBlock.children) {
            const aBox = player.getBounds();
            const interact = container.children.find(d => d.name.startsWith('interact'));

            if (!interact) {
                continue
            }

            let isOverlap = false;
            for (let sprite of interact.children) {
                const bounds = sprite.getBounds();
                const checkOverlap = this.isTwoSpritesOverlap(aBox, bounds, dir);
                if (checkOverlap) {
                    spriteName = interact.name;
                    message = interact.message;
                    console.log(interact)
                    isOverlap = true;
                    break;
                }
            }

            isGetInfo = isGetInfo || isOverlap;

            

            if (isGetInfo) {
                break;
            }
        }

        if (isGetInfo) {
            return message || `Ini adalah ${spriteName.split('-')[1]}`
        } else {
            return ''
        }
    }
}