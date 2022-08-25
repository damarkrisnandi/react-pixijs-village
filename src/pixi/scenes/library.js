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
        const bookShelf1Container = this.createObjectContainer(bookShelf, 'bookShelf1', {x: this.centerMap.x + 1, y: this.centerMap.y + 1})
        const bookShelf2Container = this.createObjectContainer(bookShelf, 'bookShelf2', {x: this.centerMap.x + 1, y: this.centerMap.y + 4})
        const bookShelf3Container = this.createObjectContainer(bookShelf, 'bookShelf3', {x: this.centerMap.x + 4, y: this.centerMap.y + 1})
        const bookShelf4Container = this.createObjectContainer(bookShelf, 'bookShelf4', {x: this.centerMap.x + 4, y: this.centerMap.y + 4})
        const bookShelf5Container = this.createObjectContainer(bookShelf, 'bookShelf5', {x: this.centerMap.x + 11, y: this.centerMap.y + 1})
        this.libraryContainer.addChild(bookShelf1Container, bookShelf2Container, bookShelf3Container, bookShelf4Container, bookShelf5Container)
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