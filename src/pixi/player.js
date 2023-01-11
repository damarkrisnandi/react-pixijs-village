import Provider from "./provider";
import { blockBuilderAnimate } from "./block-builder";
import { FramesCollections } from "./utils/frames-collections";
import { Howl } from 'howler';

export default class Player extends Provider {

    animations = {};
    isTriggerKey = false;
    timeTrigger;
    framesCollections = new FramesCollections()

    init() {
        const speed = 0.3;
        this.animations = {
            standDown: blockBuilderAnimate(this.url2, this.unit, this.framesCollections.standDownFrames, this.center, speed),
            walkDown: blockBuilderAnimate(this.url2, this.unit, this.framesCollections.walkDownFrames, this.center, speed),
            standLeft: blockBuilderAnimate(this.url2, this.unit, this.framesCollections.standLeftFrames, this.center, speed),
            walkLeft: blockBuilderAnimate(this.url2, this.unit, this.framesCollections.walkLeftFrames, this.center, speed),
            standRight: blockBuilderAnimate(this.url2, this.unit, this.framesCollections.standRightFrames, this.center, speed),
            walkRight: blockBuilderAnimate(this.url2, this.unit, this.framesCollections.walkRightFrames, this.center, speed),
            standUp: blockBuilderAnimate(this.url2, this.unit, this.framesCollections.standUpFrames, this.center, speed),
            walkUp: blockBuilderAnimate(this.url2, this.unit, this.framesCollections.walkUpFrames, this.center, speed),
        }
        const keys = Object.keys(this.animations);
        // set all name
        for (let key of keys) {
            this.animations[key].name = key;
        }

        console.log(this.animations);

        this.player = this.animations.standDown;
    }

    stepSound() {
        return new Howl({
            src: ['./pixi-assets/step.wav'],
            // autoplay: true,
            loop: true,
            volume: 0.08,
            rate: 0.5
          });
    }
    

}