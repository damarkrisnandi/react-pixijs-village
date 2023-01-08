import * as PIXI from 'pixi.js';
import VillageMap from './villagemap';
import { createObjectWithCollider } from "./utils/createObjectWIthCollider";

export default class Provider {
    url = './pixi-assets/tileset_room.png';
    url2 = './pixi-assets/tilemap.png';
    app = new PIXI.Application({
        width: window.innerWidth,
        height: window.innerHeight,
        transparent: false,
        antialias: true
    })

    // class && container for VillageMap
    villageMap = new  VillageMap();
    villageMapBlock = new PIXI.Container();

    player = null;
    playerPos = {x: 0, y: 5}
    unit = 16;
    center = {x: Math.floor((window.innerWidth / 2) / this.unit) + 1, y: Math.floor((window.innerHeight / 2) / this.unit) - 2};
    // centerMap = {x: Math.floor((window.innerWidth / 2) / this.unit) - 9, y: Math.floor((window.innerHeight / 2) / this.unit) - 9};
    centerMap = {
        x: Math.floor((window.innerWidth / 2) / this.unit) + 1 - Math.floor(this.villageMap.mapSize.y / 2), 
        y: Math.floor((window.innerHeight / 2) / this.unit) + 1 - Math.floor(this.villageMap.mapSize.y / 2)
    };
    
    indexOf2d(arr, val) {
        var index = [-1, -1];
    
        if (!Array.isArray(arr)) {
            return index;
        }
    
        arr.some(function (sub, posX) {
            if (!Array.isArray(sub)) {
                return false;
            }
    
            var posY = sub.indexOf(val);
    
            if (posY !== -1) {
                index[0] = posX;
                index[1] = posY;
                return true;
            }
    
            return false;
        });
    
        return index;
    }

    createContainer(interiors, objects, code, name) {
        const obj = objects.find(o => o.code === code);
        const pos = this.indexOf2d(interiors, code);
        if (pos[0] === -1 || pos[1] === -1) {
            return null;
        }
        return createObjectWithCollider(obj.jsonObject, `${name}${obj.idx}`, this.unit, {x: this.centerMap.x + pos[1], y: this.centerMap.y + pos[0]}, obj.act, obj.msg)
    }
}