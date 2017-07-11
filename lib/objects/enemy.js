import BaseObject from './baseObject';

const ANIMATIONS = {
  fly1: [32, 96, 32, 32],
  fly2: [64, 96, 32, 32],
  fly3: [96, 96, 32, 32],
  fly4: [0,96,32,32]
}

class Enemy extends BaseObject {
  constructor(game) {
    super("assets/bat.png", Math.random() * 300, Math.random() * 1000, 32, 32)
    this.game = game;
    this.weight = 0;
    this.gravity = 0;
    this.direction = 'right';
    this.flyingFrameCount = 0;
    this.effects = game.sounds.effects;
  }

  draw() {
    let enemyX = this.X;
    if (this.direction === 'left') {
      enemyX = -this.X - 100;
      this.game.canvas.scale(-1, 1);
    }
    const sprite = this.selectSprite();
    this.game.canvas.drawImage(
      this.Sprite,
      sprite[0],
      sprite[1],
      sprite[2],
      sprite[3],
      this.X,
      this.Y,
      32,
      32
    );
    if (this.direction === "left") {
      this.game.canvas.scale(-1, 1);
    }
  }

  update() {
    this.X -= 2;

    this.game.player.bullets.forEach(bullet => {
      if (this.isColliding(bullet)) {
        console.log("collision detected");
        this.effects.hit.play();
        this.X = this.game.player.X + 1000;
      }
    })

    if (this.X < (this.game.player.X - 100)) {
      setTimeout(() => {
        this.X = (this.game.player.X + 500),
        this.Y = Math.random() * 1000
      }, 1000);
    }
  }

  selectSprite() {
    if (this.flyingFrameCount < 25) {
      this.flyingFrameCount += 2;
      return ANIMATIONS.fly1;
    } else if (this.flyingFrameCount < 35) {
      this.flyingFrameCount += 2;
      return ANIMATIONS.fly2;
    } else if (this.flyingFrameCount < 45) {
      this.flyingFrameCount += 2;
      return ANIMATIONS.fly3;
    } else {
      this.flyingFrameCount = 0;
      return ANIMATIONS.fly4;
    }
  }
}

export default Enemy;