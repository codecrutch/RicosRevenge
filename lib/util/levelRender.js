const levelRender = function(canvas, player, platforms, background) {
    canvas.clearRect(0,0, canvas.width, canvas.height);
    canvas.drawImage(background.Sprite, background.X - 520, background.Y, 3840, 600);
    platforms.forEach(platform => canvas.drawImage(platform.Sprite, platform.X, platform.Y));
    canvas.drawImage(player.Sprite, player.X, player.Y, 70, 50);
}

export default levelRender;