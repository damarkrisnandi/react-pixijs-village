import { Container } from "pixi.js";

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
            let message = null;
            let action = null;
            if (idx === 1) {
                message = 'Koleksi buku Sains dan Matematika';
                action = 'info';
            }
            const bookShelfContainer = createObjectWithCollider(bookShelf, `bookShelf${idx}`, this.unit, {x: this.centerMap.x + val.x, y: this.centerMap.y + val.y}, action, message)    
            this.libraryContainer.addChild(bookShelfContainer);
        })
    }

    getActions() {
        return [
            {position: {x: this.centerMap.x + 2, y: this.centerMap.y + 5}, type: 'INFO', message: 'Test message'}
        ]

    }
}