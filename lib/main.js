import Game from './objects/game';
import Scoreboard from './util/scoreboard';

document.addEventListener("DOMContentLoaded", () => {
  let replay = document.getElementById("replay");
  let muted = document.getElementById("mute");
  let gameScreen = document.getElementById('ricosrevenge');
  let instructionsButton = document.getElementById("open-instructions");
  muted.onmousemove = muted.style['cursor'] = 'pointer';
  gameScreen.onmousemove = gameScreen.style['cursor'] = 'pointer';
  replay.onmouseover = replay.style['cursor'] = 'pointer';
  replay.addEventListener("click", () => {
    window.location.reload();
  })

  window.scoreboard = new Scoreboard();
  const game = new Game();

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

  muted.addEventListener('click', function(e) {
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