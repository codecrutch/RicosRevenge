import BaseObject from './baseObject';

const ANIMATIONS = {
  standing: [0, -8, 30, 50],
  ducking: [365,492,30,50],
  walk3: [168, -8, 30, 50],
  walk4: [202, -8, 30, 50],
  walk5: [234, -8, 30, 50],
  walk6: [266, -8, 30, 50],
  walk7: [299, -8, 30, 50],
  walk8: [329, -8, 30, 50],
  walk9: [367, -8, 30, 50],
  jumping: [188, 190, 30, 50],
  falling: [0, 190, 30, 50],
  shooting: [50, 50, 30, 50]
}

class Player extends BaseObject {
  constructor(img, x, y, width, height) {
    super(img, x, y, width, height);
    this.isJumping = false;
    this.isFalling = false;
    this.isDucking = false;
    this.isShooting = false;
    this.turningLeft = false;
    this.turningRight = false;
    this.gravity = 150;
    this.weight = 0.155;
    this.walkCycle = 0;
    this.standing = 0;
  }

  update(platforms) {
    // Player fell off screen, stop movement, replace char
    if (this.Y > 540) {
      this.removeKeyboardEvents();
      setTimeout(() => {
        this.Y = -50
        this.addKeyboardEvents();
      }, 1000);
    }
    // Double jump when below certain height
    if (this.Y > 325) {
      this.weight = 0.125;
    } else {
      this.weight = 0.155;
    }
    // console.log(this.X, this.Y);
    this.Y += this.Velocity_Y;
    if (this.isShooting && this.Velocity_X > 0) {
      this.isShooting = false;
    };
    if (this.turningLeft) this.Velocity_X = -2.3;
    if (this.turningRight) this.Velocity_X = 2.3;
    if (!this.turningLeft && !this.turningRight && this.Velocity_Y === 0) this.Velocity_X = 0;

    //fall logic
    // fall velocity with weight
    if (this.Velocity_Y < this.gravity) this.Velocity_Y += this.weight;

    // falling off platforms objects
    platforms.forEach(platform => {
      if (this.isColliding(platform) && this.Y + this.height < platform.Y + this.Velocity_Y) {
        this.Y = platform.Y - this.height;
        this.Velocity_Y = 0;
      }
    })
    // Jump logic
    if (this.isJumping && this.Velocity_Y === 0) {
      this.Velocity_Y = -5;
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
    } else if (this.walkCycle < 15) {
      this.walkCycle += 1;
      return ANIMATIONS.walk3;
    } else if (this.walkCycle < 25) {
      this.walkCycle += 1;
      return ANIMATIONS.walk4;
    } else if (this.walkCycle < 35) {
      this.walkCycle += 1;
      return ANIMATIONS.walk5;
    } else if (this.walkCycle < 45) {
      this.walkCycle += 1;
      return ANIMATIONS.walk6;
    } else if (this.walkCycle < 55) {
      this.walkCycle += 1;
      return ANIMATIONS.walk7;
    } else if (this.walkCycle < 65) {
      this.walkCycle += 1;
      return ANIMATIONS.walk8;
    } else if (this.walkCycle < 75) {
      this.walkCycle += 1;
      return ANIMATIONS.walk9;
    } else {
      this.walkCycle = 14;
      return ANIMATIONS.standing;
    }
  }

  draw(ctx) {
    let playerx = this.X;
    if (this.Velocity_X < 0) {
      playerx = -this.X - 100;
      ctx.scale(-1, 1);
    }
    const sprite = this.selectSprite();
    ctx.drawImage(
      this.Sprite,
      sprite[0],
      sprite[1],
      sprite[2],
      sprite[3],
      playerx + 30,
      this.Y - 20,
      40,
      70
    );
    if (this.Velocity_X < 0) {
      ctx.scale(-1, 1);
    }
  }

  addKeyboardEvents() {
    document.onkeydown = (e) => this.keyboardMovements(e, true);
    document.onkeyup = (e) => this.keyboardMovements(e, false);
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
        this.isShooting = boolean;
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
        console.log(this.Velocity_X, this.Velocity_Y,`ducking is ${boolean}`)
      default:
        break
    }
  }
}

export default Player;