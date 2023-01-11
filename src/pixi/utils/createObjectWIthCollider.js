import { CustomContainer } from "./custom-container";
import { blockBuilder } from "../block-builder";

export function createObjectWithCollider(jsonObject, name, unit, pos, action, message) {
    // separate tiles category for better performance
    const { tilesOrigin, tilesInteract, tilesCollider } = separateTilesCategory(jsonObject);

    const container = new CustomContainer();

    if (tilesOrigin.length > 0) {
        const object = blockBuilder(jsonObject.src, unit, tilesOrigin, pos);
        object.name = `origin-${name}`
        object.children.map(data => { return {...data, name}})
        
        container.addChild(object);
    }

    if (tilesCollider.length > 0) {
        const objectCollider = blockBuilder(jsonObject.src, unit, tilesCollider, pos);
        objectCollider.name = `collider-${name}`
        
        container.addChild(objectCollider);
    }

    if (tilesInteract.length > 0) {
        const objectInteractZone = blockBuilder(jsonObject.src, unit, tilesInteract, pos);
        objectInteractZone.name = `interact-${name}`
        objectInteractZone.action = action; 
        objectInteractZone.message = message;

        container.addChild(objectInteractZone);
    }

    container.scale.x = 1;
    container.scale.y = 1;
    container.name = name;

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