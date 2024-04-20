import { Vector3, TargetCamera } from 'babylonjs';
import { Game } from './game';

export class LevelCamera {
    camera: TargetCamera;
    constructor() {
        this.camera = new TargetCamera('levelCamera', new Vector3(24, 32, 24), Game.scene);
        this.camera.setTarget(Vector3.Zero());
        this.camera.fov = 390;
    }
}
