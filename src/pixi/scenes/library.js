import { Container } from "pixi.js";

import room from '../json-objects/room.json'
import bookShelf from '../json-objects/book-shelf.json'
import Provider from "../provider";
import { createObjectWithCollider } from "../utils/createObjectWIthCollider";

export default class LibraryScene extends Provider {
    libraryContainer = new Container();
    createMap() {
        const roomContainer = createObjectWithCollider(room, 'room', this.unit, this.centerMap)
        this.libraryContainer.addChild(roomContainer);
        this.placeObject()
    }

    placeObject() {
        const interiors = [
            ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
            ['#', 'A', 'A', '_', 'B', 'B', '_', '_', '_', '_', '_', 'E', 'E', '#'],
            ['#', 'A', 'A', '_', 'B', 'B', '_', '_', '_', '_', '_', 'E', 'E', '#'],
            ['#', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '#'],
            ['#', 'C', 'C', '_', 'D', 'D', '_', '_', '_', '_', '_', '_', '_', '#'],
            ['#', 'C', 'C', '_', 'D', 'D', '_', '_', '_', '_', '_', '_', '_', '#'],
            ['#', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '#'],
            ['#', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '#'],
            ['#', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '#'],
            ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#']
        ]

        const objects = [
            {
                idx: 1,
                code: 'A',
                msg: 'Koleksi Sejarah Indonesia',
                act: 'info',
                jsonObject: bookShelf,
                container: () => this.createContainer(interiors, objects, 'A', 'bookShelf')
            },
            {
                idx: 2,
                code: 'B',
                msg: 'Koleksi Buku Sains dan Matematika',
                act: 'info',
                jsonObject: bookShelf,
                container: () => this.createContainer(interiors, objects, 'B', 'bookShelf')
            },
            {
                idx: 3,
                code: 'C',
                msg: 'Koleksi Buku Fiksi', 
                act: 'info',
                jsonObject: bookShelf,
                container: () => this.createContainer(interiors, objects, 'C', 'bookShelf')
            },
            {
                idx: 4, 
                code: 'D', 
                msg: 'Koleksi Biografi', 
                act: 'info',
                jsonObject: bookShelf,
                container: () => this.createContainer(interiors, objects, 'D', 'bookShelf')
            },
            {
                idx: 5, 
                code: 'E', 
                msg: 'Hobbies', 
                act: 'info',
                jsonObject: bookShelf,
                container: () => this.createContainer(interiors, objects, 'E', 'bookShelf')
            }
        ];

        objects.forEach((val) => {
            const container = val.container();
            if (container) {
                this.libraryContainer.addChild(container);
            }
        })
    }
}