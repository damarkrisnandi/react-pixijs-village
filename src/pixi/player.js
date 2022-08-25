import Provider from "./provider";
import { blockBuilderAnimate } from "./block-builder";

export default class Player extends Provider {

    animations = {};
    isTriggerKey = false;
    timeTrigger;

    init() {
        const speed = 0.3;
        this.animations = {
            standDown: this.playerStandDownAnimate(speed),
            standUp: this.playerStandUpAnimate(speed),
            standLeft: this.playerStandLeftAnimate(speed),
            standRight: this.playerStandRightAnimate(speed),

            walkDown: this.playerWalkDownAnimate(speed),
            walkUp: this.playerWalkUpAnimate(speed),
            walkLeft: this.playerWalkLeftAnimate(speed),
            walkRight: this.playerWalkRightAnimate(speed)
        }
        this.player = this.animations.standDown;
    }

    playerStandDownAnimate(speed) {
        const frames = [
            {x: 2, y: 1, nowx: 1, nowy: 1}
        ]
        this.player = blockBuilderAnimate(this.url2, this.unit, frames, this.center, speed);
        return this.player;
    }

    playerWalkDownAnimate(speed) {
        const frames = [
            {x: 1, y: 1, nowx: 1, nowy: 1},
            {x: 2, y: 1, nowx: 1, nowy: 1},
            {x: 3, y: 1, nowx: 1, nowy: 1},
            {x: 4, y: 1, nowx: 1, nowy: 1}
        ]

        this.player = blockBuilderAnimate(this.url2, this.unit, frames, this.center, speed);
        return this.player;
    }

    playerStandLeftAnimate(speed) {
        const frames = [
            {x: 2, y: 2, nowx: 1, nowy: 1}
        ]

        this.player = blockBuilderAnimate(this.url2, this.unit, frames, this.center, speed);
        return this.player;
    }

    playerWalkLeftAnimate(speed) {
        const frames = [
            {x: 1, y: 2, nowx: 1, nowy: 1},
            {x: 2, y: 2, nowx: 1, nowy: 1},
            {x: 3, y: 2, nowx: 1, nowy: 1},
            {x: 4, y: 2, nowx: 1, nowy: 1}
        ]

        this.player = blockBuilderAnimate(this.url2, this.unit, frames, this.center, speed);
        return this.player;
    }

    playerStandRightAnimate(speed) {
        const frames = [
            {x: 2, y: 3, nowx: 1, nowy: 1},
        ]

        this.player = blockBuilderAnimate(this.url2, this.unit, frames, this.center, speed);
        return this.player;
    }

    playerWalkRightAnimate(speed) {
        const frames = [
            {x: 1, y: 3, nowx: 1, nowy: 1},
            {x: 2, y: 3, nowx: 1, nowy: 1},
            {x: 3, y: 3, nowx: 1, nowy: 1},
            {x: 4, y: 3, nowx: 1, nowy: 1}
        ]

        this.player = blockBuilderAnimate(this.url2, this.unit, frames, this.center, speed);
        return this.player;
    }

    playerStandUpAnimate(speed) {
        const frames = [
            {x: 2, y: 4, nowx: 1, nowy: 1},
        ]

        this.player = blockBuilderAnimate(this.url2, this.unit, frames, this.center, speed);
        return this.player;
    }

    playerWalkUpAnimate(speed) {
        const frames = [
            {x: 1, y: 4, nowx: 1, nowy: 1},
            {x: 2, y: 4, nowx: 1, nowy: 1},
            {x: 3, y: 4, nowx: 1, nowy: 1},
            {x: 4, y: 4, nowx: 1, nowy: 1}
        ]

        this.player = blockBuilderAnimate(this.url2, this.unit, frames, this.center, speed);
        return this.player;
    }
}