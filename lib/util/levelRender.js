const levelRender = function(game) {
  let canvas = game.canvas;
  let player = game.player;
  let platforms = game.platforms;
  let background = game.background;
  let boundaries = game.boundaries;
  let enemies = game.enemies;

  canvas.clearRect(0, 0, 1000, 1000);
  canvas.drawImage(background.Sprite, background.X, background.Y, 7040, 600);
  platforms.forEach(platform => canvas.drawImage(platform.Sprite, platform.X, platform.Y, platform.width + 50, platform.height));
  boundaries.forEach(boundary => canvas.drawImage(boundary.Sprite, boundary.X, boundary.Y, boundary.width + 50, boundary.height));
  enemies.forEach(enemy => enemy.draw());
  player.draw();
  player.bullets.forEach(bullet => bullet.draw());
  // canvas.drawImage(player.Sprite, 365,500,30,50,player.X, player.Y - 20, 40, 70);

  // Write score
  canvas.font = "15px Arial";
  canvas.fillStyle = "white";
  canvas.textAlign = "center";
  canvas.fillText(`Score: ${game.score}`, 500, 15);
}

export default levelRender;