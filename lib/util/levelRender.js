const levelRender = function(canvas, player, platforms, background) {
    
    canvas.clearRect(0,0, 10000, 10000);
    canvas.drawImage(background.Sprite, background.X - 520, background.Y, 3840, 600);
    platforms.forEach(platform => canvas.drawImage(platform.Sprite, platform.X, platform.Y));
    player.draw();
    player.bullets.forEach(bullet => bullet.draw());
    // canvas.drawImage(player.Sprite, 365,500,30,50,player.X, player.Y - 20, 40, 70);
}

export default levelRender;