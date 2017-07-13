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
    this.level = new LevelOne(this);
    this.sounds = new Sounds();
    this.pause = false;
    this.sounds.music.levelOne.loop = true;
    this.sounds.music.levelOne.play()
    this.player = new Player("assets/ricosprites.png", this.canvas, this);
    this.player.addKeyboardEvents();
    this.platforms = this.level.getPlatforms();
    this.enemies = this.level.getEnemies();
    this.boss = this.level.getBoss();
    this.background = new Background("assets/background.png", 0, 0, 0, 0);
    this.beforeGround = new Background("assets/outofbounds.png", 0, 0, 0, 0);
    this.afterGround = new Background("assets/levelend.png", 0, 0, 0, 0);
    this.gameover = false;
  }

  render() {
    if (!this.gameover) {
      // Move objects in relation to character on screen
      this.platforms.forEach(platform => platform.X += -this.player.Velocity_X);
      this.enemies.forEach(enemy => {
        enemy.X += -this.player.Velocity_X;
        enemy.update();
      });

      this.boss.X += -this.player.Velocity_X;
      this.boss.update();

      this.background.X += -this.player.Velocity_X;
      this.player.update();
      // Render all images onto canvas
      levelRender(this);
    }
  }
}

export default Game;