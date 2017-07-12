import Platform from '../objects/platform';
import Enemy from '../objects/enemy';

class LevelOne {
  constructor(game) {
    this.game = game;
    this.platforms = [];
    this.enemies = [];
    this.maxEnemies = 25;
  }

  generatePlatform(startPos, heightPos, platformWidth, platformHeight = 5, img = "") {
    this.platforms.push(new Platform(img, startPos += 48, heightPos, platformWidth, platformHeight))
  };

  getEnemies() {
    while (this.enemies.length < this.maxEnemies) {
      this.enemies.push(new Enemy(this.game))
    }
    return this.enemies;
  }

  getPlatforms() {
    this.platforms = [];
    this.drawLevel();
    return this.platforms;
  }

  drawLevel() {
    this.generatePlatform(1000, 530, 75, 20, "assets/platform.png")
    this.generatePlatform(1400, 372, 15, 10, "assets/platform.png")
    this.generatePlatform(1400, 352, 15, 10, "assets/platform.png")
    this.generatePlatform(1400, 332, 15, 10, "assets/platform.png")
    this.generatePlatform(1400, 312, 15, 10, "assets/platform.png")
    this.generatePlatform(2900, 450, 25, 20, "assets/platform.png")
    this.generatePlatform(3000, 372, 25, 20, "assets/platform.png")
    this.generatePlatform(1250, 450, 25, 20, "assets/platform.png")
    this.generatePlatform(5370, 470, 25, 20, "assets/platform.png")
    this.generatePlatform(5500, 540, 100, 30, "assets/platform.png")
    this.generatePlatform(2860, 210, 1030);
    this.generatePlatform(4282, 210, 310);
    this.generatePlatform(5235, 210, 90);
    this.generatePlatform(30, 290, 2940);
    this.generatePlatform(3880, 290, 435);
    this.generatePlatform(5440, 290, 90);
    this.generatePlatform(4685, 290, 90);
    this.generatePlatform(5165, 290, 90);
    this.generatePlatform(6315, 290, 220);
    this.generatePlatform(4897, 372, 90);
    this.generatePlatform(5500, 372, 300);
    this.generatePlatform(295, 372, 170);
    this.generatePlatform(845, 372, 90);
    this.generatePlatform(3331, 372, 435);
    this.generatePlatform(4560, 372, 155);
    this.generatePlatform(6180, 372, 90);
    this.generatePlatform(6580, 372, 35);
    this.generatePlatform(1315, 410, 155);
    this.generatePlatform(3135, 410, 100);
    this.generatePlatform(6380, 410, 170);
    this.generatePlatform(5297, 410, 35);
    this.generatePlatform(4422, 410, 35);
    this.generatePlatform(6650, 450, 35);
    this.generatePlatform(4009, 450, 82);
    this.generatePlatform(4215, 450, 82);
    this.generatePlatform(4950, 450, 160);
    this.generatePlatform(495, 450, 35);
    this.generatePlatform(695, 450, 35);
    this.generatePlatform(5975, 450, 90);
    this.generatePlatform(565, 530, 100);
    this.generatePlatform(1250, 530, 85);
    this.generatePlatform(2937, 530, 155);
    this.generatePlatform(3610, 530, 340);
    this.generatePlatform(4895, 530, 35);
    this.generatePlatform(5230, 530, 35);
    this.generatePlatform(5700, 530, 155);
    this.generatePlatform(6315, 530, 462);
  }
}

export default LevelOne;