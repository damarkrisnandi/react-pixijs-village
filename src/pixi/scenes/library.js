import { Container } from "pixi.js";
import { blockBuilder } from "../block-builder";

import room from '../json-objects/room.json'
import bookShelf from '../json-objects/book-shelf.json'
import Provider from "../provider";

export default class LibraryScene extends Provider{
    libraryContainer = new Container();
    createMap() {
        const roomContainer = this.createObjectContainer(room, 'room')
        this.libraryContainer.addChild(roomContainer);
        this.placeObject() 
    }

    placeObject() {
        const translates = [{x: 1, y: 1}, {x: 1, y: 4}, {x: 4, y: 1}, {x: 4, y: 4}, {x: 11, y: 1}];
        translates.forEach((val, idx) => {
            const bookShelfContainer = this.createObjectContainer(bookShelf, `bookShelf${idx}`, {x: this.centerMap.x + val.x, y: this.centerMap.y + val.y})    
            this.libraryContainer.addChild(bookShelfContainer);
        })
    }

    createObjectContainer(jsonObject, name, pos=this.centerMap) {
        const object = blockBuilder(jsonObject.src, this.unit, jsonObject.tiles, pos);
        const objectCollider = blockBuilder(jsonObject.src, this.unit, jsonObject.collider, pos);
        object.name = name
        objectCollider.name = `collider-${name}`

        const container = new Container();
        
        container.addChild(object);
        container.addChild(objectCollider);

        return container;
    }
}