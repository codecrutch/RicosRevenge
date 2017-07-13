import BaseObject from './baseObject';

const ANIMATIONS = {
  b1: [5, 0, 190, 170],
  b2: [185, 0, 190, 170],
  b3: [5, 181, 190, 170],
  b4: [185, 181, 190, 170],
  b5: [185, 362, 190, 170],
  hit: [5, 362, 190, 170]
}

class Boss extends BaseObject {
  constructor(img, xpos, ypos, width, height, health, game) {
    super(img, xpos, ypos, width, height)
    this.game = game;
    this.health = health;
    this.dead = false;
    this.bossFrameCycle = 0;
    this.beingInjured = false;
    this.effects = game.sounds.effects;
    this.width = 100;
    this.height = 100;
    this.originalX = xpos;
  }

  draw() {
    if (this.dead) {
      return
    } else {
      const sprite = this.selectSprite();
      this.game.canvas.drawImage(
        this.Sprite,
        sprite[0],
        sprite[1],
        sprite[2],
        sprite[3],
        this.X,
        this.Y,
        182,
        150
      );
    }
  }

  update() {
    if (this.health <= 0) {
      this.dead = true;
      this.game.sounds.music.title.play();
      this.game.sounds.music.levelOne.pause();
      this.game.pause = true;
      setTimeout(() => this.game.gameover = true, 3200);
    }

    if (!this.dead) {
      this.game.player.bullets.forEach(bullet => {
        if (this.isColliding(bullet)) {
          this.effects.hit.play();
          this.game.addScore(1000);
          this.health -= 100;
          this.game.player.Velocity_X = -4.1;
          this.game.player.Velocity_Y = -1;
          this.game.boss.X += -this.game.player.Velocity_X;;
          this.game.platforms.forEach(platform => platform.X += -this.game.player.Velocity_X);
          this.beingInjured = true;
          setTimeout(() => this.beingInjured = false, 100);
          this.game.player.bullets = this.game.player.bullets.slice(1);
        }
      })
    }

    if (this.isColliding(this.game.player)) {
      this.game.addScore(-5000);
    }
  }

  selectSprite() {
    if (this.beingInjured) {
      return ANIMATIONS.hit;
    } else if (this.bossFrameCycle < 25) {
      this.bossFrameCycle += 0.2;
      return ANIMATIONS.b1;
    } else if (this.bossFrameCycle < 35) {
      this.bossFrameCycle += 0.2;
      return ANIMATIONS.b2;
    } else if (this.bossFrameCycle < 45) {
      this.bossFrameCycle += 0.2;
      return ANIMATIONS.b3;
    } else if (this.bossFrameCycle < 55) {
      this.bossFrameCycle += 0.2;
      return ANIMATIONS.b4;
    } else {
      this.bossFrameCycle = 0;
      return ANIMATIONS.b5;
    }
  }
}

export default Boss;