import BaseObject from './baseObject';

const ANIMATIONS = {
  standing: [0, -10, 35.5, 50],
  walk7: [58, -10, 35.5, 50],
  walk1: [58, -9, 35.5, 50],
  walk2: [108, -8, 30, 50],
  walk3: [168, -8, 30, 50],
  walk4: [232, -8, 30, 50],
  walk5: [299, -8, 30, 50],
  walk6: [369, -8, 30, 50],
  jump: [0, 190, 30, 50],
}

class Player extends BaseObject {
  constructor(img, x, y, width, height) {
    super(img, x, y, width, height);
    this.isJumping = false;
    this.isFalling = false;
    this.turningLeft = false;
    this.turningRight = false;
    this.gravity = 150;
    this.weight = 0.155;
    this.walkCycle = 0;
    this.standing = 0;
  }

  update(platforms) {
    if (this.Y > 325) {
      this.weight = 0.125;
    } else {
      this.weight = 0.155;
    }
    // console.log(this.X, this.Y);
    this.Y += this.Velocity_Y;

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
    if (this.Velocity_X === 0 && this.Velocity_Y == 0) {
      return ANIMATIONS.standing;
    } else if (this.Velocity_Y > 0 || this.Velocity_Y < 0) {
      return ANIMATIONS.jump;
    } else if (this.walkCycle < 5) {
      this.walkCycle += 1;
      return ANIMATIONS.walk1;
    } else if (this.walkCycle < 10) {
      this.walkCycle += 1;
      return ANIMATIONS.walk2;
    } else if (this.walkCycle < 15) {
      this.walkCycle += 1;
      return ANIMATIONS.walk3;
    } else if (this.walkCycle < 20) {
      this.walkCycle += 1;
      return ANIMATIONS.walk4;
    } else if (this.walkCycle < 25) {
      this.walkCycle += 1;
      return ANIMATIONS.walk5;
    } else if (this.walkCycle < 30) {
      this.walkCycle += 1;
      return ANIMATIONS.walk6;
    } else if (this.walkCycle < 35) {
      this.walkCycle += 1;
      return ANIMATIONS.walk7;
      } else if (this.walkCycle < 40) {
      this.walkCycle += 1;
      return ANIMATIONS.walk4;
    } else if (this.walkCycle < 45) {
      this.walkCycle += 1;
      return ANIMATIONS.walk5;
    } else if (this.walkCycle < 50) {
      this.walkCycle += 1;
      return ANIMATIONS.walk6;
    } else {
      this.walkCycle = 0;
      return ANIMATIONS.standing;
    }
  }

  draw(ctx) {
    let playerx = this.X;
    if(this.Velocity_X < 0) {
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
    if(this.Velocity_X < 0) {
      ctx.scale(-1, 1);
    }
  }

  addKeyboardEvents() {
    document.addEventListener("keydown", (e) => this.keyboardMovements(e, true));
    document.addEventListener("keyup", (e) => this.keyboardMovements(e, false));
  }

  keyboardMovements(e, boolean) {
    switch (e.keyCode) {
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
      default:
        break
    }
  }
}

export default Player;