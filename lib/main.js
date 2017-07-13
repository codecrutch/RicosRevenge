import Game from './objects/game';

document.addEventListener("DOMContentLoaded", () => {
  let replay = document.getElementById("replay");
  replay.addEventListener("click", () => {
    window.location.reload();
  })
  
  const game = new Game();
  game.pause = true;
  game.sounds.mute();
  let instructionsButton = document.getElementById("open-instructions");

  instructionsButton.addEventListener("click", (e) => {
    if (!game.pause) {
      game.pause = true;
      let intro = new Image();
      intro.src = "assets/instructions.png";
      intro.onload = () => game.canvas.drawImage(intro, 0, 0, 700, 600);
    } else {
      game.pause = false;
    }
    e.stopPropagation();
  })

  document.getElementById('mute').addEventListener('click', function(e) {
    if (game.sounds.muted) {
      game.sounds.unmute();
      e.target.innerHTML = 'Mute Sound';
    } else {
      game.sounds.mute();
      e.target.innerHTML = 'Unmute';
    }
  })

  instructions(game);

  let gameoverY = 0;
  let endingSound = true;
  const mainLoop = () => {
    let mainLoopId;
    if (!game.pause) {
      game.render();
    }

    if (game.gameover) {
      instructionsButton.style['display'] = 'none';
    }

    if (game.gameover && gameoverY > -1500) {
      if (gameoverY > -10) {
        gameoverY -= 0.05;
      } else if (gameoverY > -30) {
        gameoverY -= 0.25;
      } else {
        gameoverY -= 0.8;
      }
      let gameover = new Image();
      gameover.src = "assets/gameover.png";
      gameover.onload = () => game.canvas.drawImage(gameover, 0, gameoverY, 700, 2000);
      if (endingSound) {
        game.sounds.music.levelOne.pause();
        setTimeout(() => game.sounds.music.credits.play(), 2000);
        endingSound = false;
      }
    }


    // Set FPS
    mainLoopId = setTimeout(mainLoop, 1000 / 80);
  };


  mainLoop();
})

function instructions(game) {
  let intro = new Image();
  intro.src = "assets/instructions.png";
  intro.onload = () => game.canvas.drawImage(intro, 0, 0, 700, 600);
  game.gameCanvas.addEventListener("click", () => {
    game.pause = false;
    document.getElementById("open-instructions").style['display'] = 'block';
  }, true);
}