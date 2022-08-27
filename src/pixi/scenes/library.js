import { Container } from "pixi.js";
import { blockBuilder } from "../block-builder";

import room from '../json-objects/room.json'
import bookShelf from '../json-objects/book-shelf.json'
import Provider from "../provider";
import { createObjectWithCollider } from "../utils/createObjectWIthCollider";

export default class LibraryScene extends Provider{
    libraryContainer = new Container();
    createMap() {
        const roomContainer = createObjectWithCollider(room, 'room', this.unit, this.centerMap)
        this.libraryContainer.addChild(roomContainer);
        this.placeObject() 
    }

    placeObject() {
        const translates = [{x: 1, y: 1}, {x: 1, y: 4}, {x: 4, y: 1}, {x: 4, y: 4}, {x: 11, y: 1}];
        translates.forEach((val, idx) => {
            const bookShelfContainer = createObjectWithCollider(bookShelf, `bookShelf${idx}`, this.unit, {x: this.centerMap.x + val.x, y: this.centerMap.y + val.y})    
            this.libraryContainer.addChild(bookShelfContainer);
        })
    }

    actions() {
        
    }
}