import BaseObject from './baseObject';

class Bullet extends BaseObject {
  constructor(owner, direction, ctx) {
    super("assets/bullets.png", 0, 0, 0, 0);
    this.direction = direction;
    this.offset_x = 60;
    this.ctx = ctx;
    this.owner = owner;
    this.X = owner.X;
    this.Y = owner.Y;
  }

  draw() {
    if (this.direction === 'left') {
      this.offset_x = 15;
    }
    if (this.X > 1200 || this.X < -500) {
      this.owner.bullets = this.owner.bullets.slice(1);
    }
    if (this.direction === "right") {
      this.X += 10;
    } else {
      this.X -= 10;
    }
    this.ctx.drawImage(this.Sprite, 21, 55, 20, 10, this.X + this.offset_x, this.Y + 4, 10, 10);
  }
}

export default Bullet;