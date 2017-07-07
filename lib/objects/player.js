import BaseObject from './baseObject';

class Player extends BaseObject {
  constructor(img, x, y, width, height) {
    super(img, x, y, width, height);
    this.isJumping = false;
    this.isFalling = false;
    this.turningLeft = false;
    this.turningRight = false;
    this.gravity = 150;
    this.weight = 0.155;
  }

  update(platforms) {
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