import Player from './objects/player';
import LevelOne from './levels/one';
import Background from './objects/background';
import levelRender from './util/levelRender';

document.addEventListener("DOMContentLoaded", () => {
  let gameCanvas = document.getElementById('ricosrevenge');
  let canvas = gameCanvas.getContext('2d');
  let platforms = LevelOne.platforms;
  let background = new Background("assets/background.png", 0, 0, 1000, 1000);
  let player = new Player("assets/ricosprites.png", canvas);
  player.addKeyboardEvents();
  new Audio("assets/levelone.mp3").play();
  const mainLoop = () => {
    // Move objects in relation to character on screen
    platforms.forEach(platform => platform.X += -player.Velocity_X);
    // console.log(background.X, background.Y);
    background.X += -player.Velocity_X;
    // Update player logic with level platforms
    player.update(platforms);
    // Render all images onto canvas
    levelRender(canvas, player, platforms, background);
    // Set FPS
    setTimeout(mainLoop, 1000 / 60);
  };

    mainLoop();
});