import { Container } from "pixi.js";
import { blockBuilder } from "../block-builder";

export function createObjectWithCollider(jsonObject, name, unit, pos, action, message) {
    // separate tiles category for better performance
    const { tilesOrigin, tilesInteract, tilesCollider } = separateTilesCategory(jsonObject);

    const object = blockBuilder(jsonObject.src, unit, tilesOrigin, pos);
    const objectCollider = blockBuilder(jsonObject.src, unit, tilesCollider, pos);
    const objectInteractZone = blockBuilder(jsonObject.src, unit, tilesInteract, pos);
    
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

    container.scale.x = 1;
    container.scale.y = 1;

    return container;
}

function separateTilesCategory(jsonObject) {
    const tilesCollider = [];
    const tilesInteract = [];
    const tilesOrigin = [];

    for (let i = 0; i < jsonObject.tiles.length; i++) {
        if (jsonObject.collider.find(obj => obj.nowx === jsonObject.tiles[i].nowx && obj.nowy === jsonObject.tiles[i].nowy)) {
            tilesCollider.push(jsonObject.tiles[i])
        } else if (jsonObject.interactZone.find(obj => obj.nowx === jsonObject.tiles[i].nowx && obj.nowy === jsonObject.tiles[i].nowy)) {
            tilesInteract.push(jsonObject.tiles[i])
        } else {
            tilesOrigin.push(jsonObject.tiles[i])
        }    
    }

    return { tilesOrigin, tilesCollider, tilesInteract }
}