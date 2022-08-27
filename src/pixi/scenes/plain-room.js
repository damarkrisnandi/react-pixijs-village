import Provider from "../provider"
import { createObjectWithCollider } from "../utils/createObjectWIthCollider";
import room from '../json-objects/room.json'
import { Container } from "pixi.js";

export default class PlainRoomScene extends Provider {
    container = new Container();
    createMap() {
        const roomContainer = createObjectWithCollider(room, 'room', this.unit, this.centerMap)
        this.container.addChild(roomContainer);
    }
}