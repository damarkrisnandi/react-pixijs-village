import * as PIXI from 'pixi.js';
import GroupObject from './group-object';
import VillageMap from './villagemap';

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
    
    groupObject = new GroupObject();
}