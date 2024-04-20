import { Level } from './level';
import { Game } from './game';
import '../public/index.css';

window.onload = () => {
    Game.start(() => {
        new Level(1);
    });
};
