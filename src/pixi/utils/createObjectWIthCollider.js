import { Container } from "pixi.js";
import { blockBuilder } from "../block-builder";

export function createObjectWithCollider(jsonObject, name, unit, pos, action, message) {
    const object = blockBuilder(jsonObject.src, unit, jsonObject.tiles, pos);
    const objectCollider = blockBuilder(jsonObject.src, unit, jsonObject.collider, pos);
    const objectInteractZone = blockBuilder(jsonObject.src, unit, jsonObject.interactZone, pos);
    object.name = name
    object.children.map(data => { return {...data, name}})
    objectCollider.name = `collider-${name}`
    objectInteractZone.name = `interact-${name}`
    objectInteractZone.action = action; 
    objectInteractZone.message = message

    const container = new Container();
    
    container.addChild(object);
    container.addChild(objectCollider);
    container.addChild(objectInteractZone);

    return container;
}