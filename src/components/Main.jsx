import React from "react";
import PixiMain from "../pixi/main";
import Player from "../pixi/player";
import { Controls } from "../pixi/utils/model-control";

class Main extends React.Component {
    pixi = new PixiMain()
    playerData = new Player();
    app = null
    villageMapBlock = null
    player = null
    animations = {};
    unit = 16;

    key = 'stop';
    keys = {};

    clickPos = {x: 0, y: 0}

    initializeWorld = () => {
        this.pixi.createWorld();
        this.app = this.pixi.app;
        document.body.append(this.app.view);
    }

    initializeMap = () => {
        this.villageMapBlock = this.pixi.createMap();
        this.villageMapBlock.opacity = 0;
        this.app.stage.addChild(this.villageMapBlock)
    }

    initializePlayer = () => {
        this.playerData.init();
        this.player = this.playerData.player
        this.animations = this.playerData.animations
        this.app.stage.addChild(this.player)
        window.addEventListener('keydown', this.keyDown);
        window.addEventListener('keyup', this.keyUp)
        window.addEventListener('click', this.click)
        
    }

    keyDown = (e) => {
        this.isTriggerKey = true;
        this.timeTrigger = new Date();
        const controls = new Controls();
        if (Object.values(controls).includes(e.key)) this.key = e.key;    
    }

    keyUp = (e) => {
        this.key = 'stop';
        this.player.stop()
    }

    click = (e) => {
        // this.clickPos = {e.}
        const moves = ['w', 'w']
        for (let move of moves) {
            this.key = move;
            this.key = 'stop'
            // this.keyUp({key: move});
        }
    }

    gameLoop = (delta) => {
        this.playerMovement();
        this.updateCanvas();
    }

    playerMovement() {
        let move = {x: 0, y: 0};
        const {UP, LEFT, RIGHT, DOWN} = new Controls();
        switch (this.key) {
            case UP:
                this.player = this.animations.walkUp;
                move = {x: 0, y: -1};
                break;

            case LEFT:
                this.player = this.animations.walkLeft
                move = {x: -1, y: 0};
                break;

            case DOWN:
                this.player = this.animations.walkDown
                move = {x: 0, y: 1};
                break;
            case RIGHT:
                this.player = this.animations.walkRight
                move = {x: 1, y: 0};
                break;

            default:
                move = {x: 0, y: 0};
                break;
        }

        if (this.pixi.checkAllCollision(move, this.player, this.villageMapBlock)) {
            this.villageMapBlock.x -= (move.x) * this.unit;
            this.villageMapBlock.y -= (move.y) * this.unit;
        }
    }

    checkAllCollision = (dir) => {
        return true;
    }

    updateCanvas = () => {
        // update setiap ada perubahan dalam game
        (this.key !== 'stop') ? this.player.play() : this.player.stop()
        this.app.stage.addChild(this.villageMapBlock);
        this.app.stage.addChild(this.player);
        // this.player.play();
    }

    componentDidMount() {
        this.initializeWorld();
        this.initializeMap();
        this.initializePlayer();
        this.app.ticker.add(this.gameLoop)
    }

    render() { 
        return ( <div></div> );
    }
}
 
export default Main;