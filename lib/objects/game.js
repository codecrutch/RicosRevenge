import Player from './player';
import LevelOne from '../levels/one';
import Background from './background';
import levelRender from '../util/levelRender';
import Sounds from './sounds';

class Game {
  constructor() {
    this.score = 0;
    this.gameCanvas = document.getElementById('ricosrevenge');
    this.canvas = this.gameCanvas.getContext('2d');
    this.level = new LevelOne();
    this.sounds = new Sounds();
    this.pause = false;
    this.sounds.music.levelOne.loop = true;
    this.sounds.music.levelOne.play()
    this.player = new Player("assets/ricosprites.png", this.canvas, this);
    this.player.addKeyboardEvents();
    this.platforms = this.level.getPlatforms();
    this.boundaries = this.level.getBoundaries();
    this.background = new Background("assets/background.png", 0, 0, 1000, 1000);
  }

  render() {
     // Move objects in relation to character on screen
    this.platforms.forEach(platform => platform.X += -this.player.Velocity_X);
    this.boundaries.forEach(boundary => boundary.X += -this.player.Velocity_X);
    console.log(this.background.X, this.background.Y);
    this.background.X += -this.player.Velocity_X;
    // Update player logic with level platforms
    this.player.update(this.platforms, this.background, this.level);
    // Render all images onto canvas
    levelRender(this.canvas, this.player, this.platforms, this.background, this.boundaries);
  }
}

export default Game;