import BaseObject from './baseObject';

class Bullet extends BaseObject {
  constructor(owner, direction, ctx) {
    super("assets/bullets.png", 0, 0, 60, 10);
    this.direction = direction;
    this.offset_x = 60;
    this.ctx = ctx;
    this.owner = owner;
    this.X = owner.X;
    this.Y = owner.Y;
  }

  draw() {
    if (this.direction === 'left') {
      this.offset_x = 28;
    }
    if (this.X > 600 || this.X < -500) {
      this.owner.bullets = this.owner.bullets.slice(1);
    }
    if (this.direction === "right") {
      this.X += 10;
    } else {
      this.X -= 10;
    }

    let duckOffset;
    if(this.owner.isDucking) {
      duckOffset = this.Y + 25;
    } else {
      duckOffset = this.Y + 4;
    }
    this.ctx.drawImage(this.Sprite, 190, 468, 20, 20, this.X + this.offset_x, duckOffset, 7, 7);
  }
}

export default Bullet;