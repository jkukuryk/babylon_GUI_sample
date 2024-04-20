import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

export class GameCore {
    engine: BABYLON.Engine;
    canvas: HTMLCanvasElement;
    scene?: BABYLON.Scene;

    constructor() {
        this.resize = this.resize.bind(this);
        this.canvas = document.createElement('canvas');
    }

    resize() {
        this.engine.resize();
    }
    start(cb: () => void) {
        document.body.append(this.canvas);

        const antialias = true;
        this.engine = new BABYLON.Engine(this.canvas, antialias, { preserveDrawingBuffer: true, stencil: true });

        this.engine.setHardwareScalingLevel(1 / Math.min(3, window.devicePixelRatio));
        window.addEventListener('resize', () => {
            this.engine.resize();
        });

        cb();
    }

    createScene() {
        if (this.scene) {
            this.scene.dispose();
            console.log('remove scene');
        }

        this.scene = new BABYLON.Scene(Game.engine);
        console.log('create scene', Game.engine.scenes);

        Game.engine.runRenderLoop(() => {
            this.scene.render();
        });
    }
}

export const Game = new GameCore();
