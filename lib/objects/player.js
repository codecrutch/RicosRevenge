import BaseObject from './baseObject';
import Bullet from './bullet';

const ANIMATIONS = {
  standing: [0, -8, 30, 50],
  ducking: [365, 492, 30, 50],
  walk1: [168, -8, 30, 50],
  walk2: [202, -8, 30, 50],
  walk3: [234, -8, 30, 50],
  walk4: [266, -8, 30, 50],
  walk5: [299, -8, 30, 50],
  walk6: [367, -8, 30, 50],
  jumping: [188, 190, 30, 50],
  falling: [0, 190, 30, 50],
  shooting: [-1, -3, 31, 50]
}

class Player extends BaseObject {
  constructor(img, ctx, game) {
    super(img, 200, 0, 50, 50);
    this.ctx = ctx;
    this.game = game;
    this.isJumping = false;
    this.isFalling = false;
    this.isDucking = false;
    this.isShooting = false;
    this.turningLeft = false;
    this.turningRight = false;
    this.gravity = 150;
    this.weight = 0.155;
    this.walkFrameCount = 0;
    this.standing = 0;
    this.bullets = [];
    this.maxBullets = 10;
    this.direction = "right";
    this.sounds = game.sounds;
    this.jumpSound = this.sounds.effects.jumping;
    this.shootSound = this.sounds.effects.shooting;
    this.duckSound = this.sounds.effects.jumping;
    this.shootingSprite = new Image();
    this.shootingSprite.src = "assets/shooting.png";
    this.bulletBuffer = 2;
  }

  update() {
    this.weight = 0.155;
    this.Y += this.Velocity_Y;

    if (this.game.background.X > 0) {
      this.V;
    }
    // Player fell off screen, stop movement, replace char
    if (this.Y > 540) {
      this.removeKeyboardEvents();
      setTimeout(() => {
        this.Y = -100,
          this.game.background.X = 0,
          this.game.platforms = this.game.level.getPlatforms(),
          this.game.boss.X = this.game.boss.originalX;
          this.gravity = 500,
          this.weight = 2,
          this.addKeyboardEvents()
      }, 1000);
    }

    if (this.turningLeft) {
      this.Velocity_X = -2.1;
      this.direction = "left";
    }

    if (this.turningRight) {
      this.Velocity_X = 2.1;
      this.direction = "right";
    }

    if (!this.turningLeft && !this.turningRight && this.Velocity_Y === 0) this.Velocity_X = 0;

    //fall logic
    // fall velocity with weight
    if (this.Velocity_Y < this.gravity) this.Velocity_Y += this.weight;

    // falling off platforms objects
    this.game.platforms.forEach(platform => {
      if (this.isColliding(platform) && this.Y + this.height < platform.Y + this.Velocity_Y) {
        this.Y = platform.Y - this.height;
        this.Velocity_Y = 0;
      }
    })

    // Jump logic
    if (this.isJumping && this.Velocity_Y === 0) {
      this.Velocity_Y = -5;
      this.jumpSound.play();
    }
    // Fall to next platform logic
    if (this.isFalling && this.Velocity_Y === 0) {
      this.gravity = 3;
      this.Velocity_Y = 6;
    }
  }

  selectSprite() {
    if (this.isShooting) {
      return ANIMATIONS.shooting;
    } else if (this.Velocity_X === 0 && this.Velocity_Y == 0 && this.isDucking) {
      return ANIMATIONS.ducking;
    } else if (this.Velocity_X === 0 && this.Velocity_Y == 0) {
      return ANIMATIONS.standing;
    } else if (this.Velocity_Y > 0) {
      return ANIMATIONS.falling;
    } else if (this.Velocity_Y < 0) {
      return ANIMATIONS.jumping;
    } else if (this.walkFrameCount < 15) {
      this.walkFrameCount += 2;
      return ANIMATIONS.walk1;
    } else if (this.walkFrameCount < 25) {
      this.walkFrameCount += 2;
      return ANIMATIONS.walk2;
    } else if (this.walkFrameCount < 35) {
      this.walkFrameCount += 2;
      return ANIMATIONS.walk3;
    } else if (this.walkFrameCount < 45) {
      this.walkFrameCount += 2;
      return ANIMATIONS.walk4;
    } else if (this.walkFrameCount < 55) {
      this.walkFrameCount += 2;
      return ANIMATIONS.walk5;
    } else if (this.walkFrameCount < 65) {
      this.walkFrameCount += 2;
      return ANIMATIONS.walk4;
    } else if (this.walkFrameCount < 75) {
      this.walkFrameCount += 2;
      return ANIMATIONS.walk6;
    } else {
      this.walkFrameCount = 0;
      return ANIMATIONS.standing;
    }
  }

  draw() {
    let playerx = this.X;
    let spriteSheet = this.Sprite;
    if (this.isShooting) {
      spriteSheet = this.shootingSprite;
    }

    if (this.direction === 'left') {
      playerx = -this.X - 100;
      this.ctx.scale(-1, 1);
    }
    const sprite = this.selectSprite();
    this.ctx.drawImage(
      spriteSheet,
      sprite[0],
      sprite[1],
      sprite[2],
      sprite[3],
      playerx + 30,
      this.Y - 20,
      40,
      70
    );
    if (this.direction === "left") {
      this.ctx.scale(-1, 1);
    }
  }

  addKeyboardEvents() {
    document.onkeydown = (e) => this.keyboardMovements(e, true);
    document.onkeyup = (e) => this.keyboardMovements(e, false);
    document.onkeypress = (e) => this.pauseGame(e);
  }

  pauseGame(e) {
    if (e.keyCode === 112) {
      let muteButton = document.getElementById('mute');
      let unmute = () => {};
      let mute = () => {};
      // Don't unmute if globally muted
      if (muteButton.innerHTML === 'Mute Sound') {
        mute = () => this.game.sounds.mute();
        unmute = () => this.game.sounds.unmute();
      }

      if (this.game.pause) {
        unmute();
        this.game.pause = false;
      } else {
        mute();
        this.game.pause = true;
      }
    }
  }

  removeKeyboardEvents() {
    document.onkeydown = null;
    document.onkeyup = null;
    this.Velocity_X = 0;
    this.isJumping = false;
    this.isFalling = false;
    this.isDucking = false;
    this.isShooting = false;
    this.turningLeft = false;
    this.turningRight = false;
  }

  keyboardMovements(e, boolean) {
    switch (e.keyCode) {
      case 13:
        if (e.type === "keydown") {
          this.shootBullet();
          setTimeout(() => this.isShooting = false, 100);
        } else {
          this.isShooting = boolean;
        }
        break
      case 32:
      case 38:
      case 87:
        //  UP
        this.isJumping = boolean;
        break
      case 40:
      case 83:
        //  DOWN
        this.isFalling = boolean;
        break
      case 37:
      case 65:
        // LEFT
        this.turningLeft = boolean;
        break
      case 39:
      case 68:
        //  RIGHT
        this.turningRight = boolean;
        break
      case 16:
      case 17:
        this.isDucking = boolean;
      default:
        break
    }
  }
  shootBullet() {
    if (this.bullets.length < this.maxBullets) {
      this.bullets.push(new Bullet(this, this.direction, this.ctx));
      this.shootSound.play();
      this.isShooting = true;
    }
  }
}

export default Player;