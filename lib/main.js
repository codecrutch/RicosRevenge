import Game from './objects/game';

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  game.pause = true;
  game.sounds.mute();
  let instructionsButton = document.getElementById("open-instructions");
  let instructionsModal = document.getElementById("instructions");

  instructionsModal.addEventListener("click", (e) => {
    e.stopPropagation();
    game.pause = false;
    e.target.style["display"] = 'none';
    instructionsButton.style['display'] = 'block';
  })

  instructionsButton.addEventListener("click", (e) => {
    if (!game.pause) {
      game.pause = true;
    }
    e.stopPropagation();
    e.target.style["display"] = 'none';
    instructionsModal.style["display"] = "block";
  })

  document.getElementById('mute').addEventListener('click', function (e) {
    if (game.sounds.muted) {
      game.sounds.unmute();
      e.target.innerHTML = 'Mute Sound';
    } else {
      game.sounds.mute();
      e.target.innerHTML = 'Unmute';
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