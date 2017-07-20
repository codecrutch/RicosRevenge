const levelRender = function(game) {
  let canvas = game.canvas;
  let player = game.player;
  let platforms = game.platforms;
  let background = game.background;
  let enemies = game.enemies;
  let beforeGround = game.beforeGround;
  let afterGround = game.afterGround;
  let boss = game.boss;

  canvas.clearRect(0, 0, 1000, 1000);
  canvas.drawImage(background.Sprite, background.X, background.Y, 7040, 600);
  canvas.drawImage(afterGround.Sprite, background.X + 7020, background.Y, 750, 600);
  canvas.drawImage(beforeGround.Sprite, background.X - 730, background.Y + 3, 750, 600);
  platforms.forEach(platform => canvas.drawImage(platform.Sprite, platform.X, platform.Y, platform.width + 50, platform.height));
  enemies.forEach(enemy => enemy.draw());
  boss.draw();
  player.draw();
  player.bullets.forEach(bullet => bullet.draw());
  // canvas.drawImage(player.Sprite, 365,500,30,50,player.X, player.Y - 20, 40, 70);
  if (boss.dead) {
    canvas.font = "35px 'Press Start 2P'";
    canvas.fillStyle = "smoke";
    canvas.fillText("You've done it?!", 350, 280);
    canvas.font = "20px 'Press Start 2P'";
    canvas.fillText("to be continued...", 350, 300);
  }
  // Write score
  canvas.font = "10px 'Press Start 2P'";
  canvas.fillStyle = "white";
  canvas.textAlign = "center";
  canvas.fillText(`Score: ${game.score}`, 500, 15);
  // Write high score
  canvas.font = "10px 'Press Start 2P'";
  canvas.fillStyle = "white";
  canvas.textAlign = "center";
  let highscore = game.highscore() === "" ? 0 : game.highscore();
  canvas.fillText(`High Score: ${highscore}`, 300, 15);
}

export default levelRender;