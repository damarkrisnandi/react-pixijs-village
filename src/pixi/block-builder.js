import * as PIXI from 'pixi.js';
import { CustomContainer } from './utils/custom-container';
import { CustomSprite } from './utils/custom-sprite';
import { CustomAnimatedSprite } from './utils/custom-animated-sprite';

export function blockBuilder(url, unit, source, destination) {
    const container = new CustomContainer();
    
    const baseTexture = PIXI.BaseTexture.from(url)

    for (let position of source) {
        const rect1 = new PIXI.Rectangle((position.x - 1) * unit, (position.y - 1) * unit, unit, unit)
        const texture1 = new PIXI.Texture(baseTexture, rect1);
        const spr1 = new CustomSprite(texture1);
        spr1.x = (destination.x + position.nowx - 2) * unit;
        spr1.y = (destination.y + position.nowy - 2) * unit;
        // sprites.push(spr1)
        container.addChild(spr1);

        // stack
        // if (position.stack) {
        //     for (let child of position.children) {
        //         const rect1Child = new PIXI.Rectangle((child.x - 1) * unit, (child.y - 1) * unit, unit, unit)
        //         const texture1Child = new PIXI.Texture(baseTexture, rect1Child);
        //         const spr1Child = new CustomSprite(texture1Child);
        //         spr1Child.x = (destination.x + child.nowx - 2) * unit;
        //         spr1Child.y = (destination.y + child.nowy - 2) * unit;
        //         container.addChild(spr1Child);
        //     }
        // }
        
    }

    return container;
}

export function blockBuilderAnimate(url, unit, source, destination, speed) {
    
    const baseTexture = PIXI.BaseTexture.from(url)

    const frames = [];

    for (let position of source) {
        const rect1 = new PIXI.Rectangle((position.x - 1) * unit, (position.y - 1) * unit, unit, unit)
        const texture1 = new PIXI.Texture(baseTexture, rect1);
        frames.push(texture1);
    }

    const animBlock = new CustomAnimatedSprite(frames)
    
    animBlock.animationSpeed = speed;
    animBlock.loop = true;
    animBlock.x = (destination.x - 1) * unit;
    animBlock.y = (destination.y - 1) * unit;

    animBlock.scale.x = 1;
    animBlock.scale.y = 1;

    return animBlock;
}