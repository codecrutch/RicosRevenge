import Game from './objects/game';

document.addEventListener("DOMContentLoaded", () => {
  let replay = document.getElementById("replay");
  replay.addEventListener("click", () => {
    window.location.reload();
  })

  const game = new Game();
  game.mute();
  let instructionsButton = document.getElementById("open-instructions");

  instructionsButton.addEventListener("click", (e) => {
    if (!game.paused) {
      game.pause();
      let intro = new Image();
      intro.src = "assets/instructions.png";
      intro.onload = () => game.canvas.drawImage(intro, 0, 0, 700, 600);
    } else {
      game.unpause();
    }
    e.stopPropagation();
  })

  document.getElementById('mute').addEventListener('click', function(e) {
    if (game.muted) {
      game.unmute();
      e.target.innerHTML = 'Mute Sound';
    } else {
      game.mute();
      e.target.innerHTML = 'Unmute';
    }
  })

  game.showInstructions();

  const mainLoop = () => {
    game.render();
    // Set FPS
    setTimeout(mainLoop, 1000 / 80);
  };


  mainLoop();
})