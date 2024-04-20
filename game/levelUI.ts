import * as GUI from '@babylonjs/gui/2D';
import { Game } from './game';

export class LevelUI {
    constructor() {
        console.log(Game.engine.scenes);
        GUI.AdvancedDynamicTexture.CreateFullscreenUI('UI');
    }
    start() {}
}
