import Game from './objects/game';

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  game.sounds.mute();

  document.getElementById('mute').addEventListener('click', function (evt) {
    if (game.sounds.muted) {
      game.sounds.unmute();
      evt.target.innerHTML = 'Mute Sound';
    } else {
      game.sounds.mute();
      evt.target.innerHTML = 'Unmute';
    }
  })
  
  const mainLoop = () => {
    if (!game.pause) {
      game.render();
    }

    // Set FPS
    setTimeout(mainLoop, 1000 / 80);
  };
  
  mainLoop();
})

