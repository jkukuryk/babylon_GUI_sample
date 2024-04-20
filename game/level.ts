import { Vector3, Color4, Matrix, ShadowGenerator, Vector2, IPointerEvent, TransformNode, Tools } from 'babylonjs';
import { Game } from './game';
import { LevelCamera } from './levelCamera';

import 'babylonjs-loaders';
import { LevelUI } from './levelUI';

export class Level {
    levelUI: LevelUI;
    levelCamera: LevelCamera;

    constructor(levelId) {
        Game.createScene();
        Game.scene.clearColor = Color4.FromHexString('#ccffffff');
        this.levelCamera = new LevelCamera();

        this.buildLevel();
    }
    async buildLevel() {
        this.levelUI = new LevelUI();
    }
}
