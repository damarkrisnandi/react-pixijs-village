import { Container } from "pixi.js";
import { blockBuilder } from "../block-builder";

export function createObjectWithCollider(jsonObject, name, unit, pos) {
    const object = blockBuilder(jsonObject.src, unit, jsonObject.tiles, pos);
    const objectCollider = blockBuilder(jsonObject.src, unit, jsonObject.collider, pos);
    object.name = name
    objectCollider.name = `collider-${name}`

    const container = new Container();
    
    container.addChild(object);
    container.addChild(objectCollider);

    return container;
}