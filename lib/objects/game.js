import Player from './player';
import LevelOne from '../levels/one';
import Background from './background';
import levelRender from '../util/levelRender';
import Sounds from './sounds';
import updateScore from '../util/scoreboard';

class Game {
  constructor() {
    this.score = 0;
    this.gameCanvas = document.getElementById('ricosrevenge');
    this.canvas = this.gameCanvas.getContext('2d');
    this.level = new LevelOne(this);
    this.sounds = new Sounds();
    this.paused = true;
    this.player = new Player("assets/ricosprites.png", this.canvas, this);
    this.player.addKeyboardEvents();
    this.platforms = this.level.getPlatforms();
    this.enemies = this.level.getEnemies();
    this.boss = this.level.getBoss();
    this.background = new Background("assets/background.png", 0, 0, 0, 0);
    this.beforeGround = new Background("assets/outofbounds.png", 0, 0, 0, 0);
    this.afterGround = new Background("assets/levelend.png", 0, 0, 0, 0);
    this.gameover = false;
    this.creditsY = 0;
    this.endingSound = true;
    this.muted = true;
    document.onkeypress = (e) => this.pauseGame(e);
    this.mute();
  }

  addScore(points) {
    if (points < 0) {
      if ((this.score + points) < 0) {
        this.score = 0;
      } else {
        this.score += points;
      }
    } else {
      this.score += points;
    }
  }

  showInstructions() {
    let intro = new Image();
    intro.src = "assets/instructions.png";
    intro.onload = () => this.canvas.drawImage(intro, 0, 0, 700, 600);
    this.gameCanvas.onclick = this.startGame.bind(this);
  }

  pause() {
    this.paused = true;
  }

  unpause() {
    this.paused = false;
  }

  mute() {
    this.sounds.mute();
    this.muted = true;
  }

  unmute() {
    this.sounds.unmute();
    this.muted = false;
  }

  pauseGame(e) {
    if (e.keyCode === 112) {
      let muteButton = document.getElementById('mute');
      let unmute = () => {};
      let mute = () => {};
      // Don't unmute if globally muted
      if (muteButton.innerHTML === 'Mute Sound') {
        mute = () => this.sounds.mute();
        unmute = () => this.sounds.unmute();
      }

      if (this.paused) {
        unmute();
        this.paused = false;
      } else {
        mute();
        this.paused = true;
      }
    }
  }

  startGame() {
    this.unpause();
    this.sounds.music.levelOne.loop = true;
    this.sounds.music.levelOne.play()
    this.gameCanvas.style['cursor'] = 'auto';
    this.gameStarted = true;
    document.getElementById("open-instructions").style['cursor'] = 'pointer';
    document.getElementById("open-instructions").style['display'] = 'block';
  }

  render() {
    if (this.paused) {
      if (this.gameStarted && !this.gameover) {
        this.canvas.font = "small-caps bold 30px 'Press Start 2P'";
        this.canvas.strokeStyle = 'black';
        this.canvas.lineWidth = 0.01;
        this.canvas.fillStyle = "rgba(255, 255, 237, 0.03)";
        this.canvas.fillText("Paused", 360, 300);
        this.canvas.strokeText("Paused", 360, 300);
      }
      return null;
    }

    if (!this.gameover) {
      // Move objects in relation to character on screen
      this.platforms.forEach(platform => platform.X += -this.player.Velocity_X);
      this.enemies.forEach(enemy => {
        enemy.X += -this.player.Velocity_X;
        enemy.update();
      });

      this.boss.X += -this.player.Velocity_X;
      this.boss.update();

      this.background.X += -this.player.Velocity_X;
      this.player.update();
      // Render all images onto canvas
      levelRender(this);
    } else {
      updateScore("rico", this.score);
      console.log(document.cookie);
      console.log(updateScore("rico", this.score));
      // Remove click handlers
      this.player.removeKeyboardEvents();
      this.gameCanvas.onkeypress = null;
      this.gameCanvas.onclick = null;
      document.getElementById("open-instructions").style['display'] = 'none';

      if (this.creditsY > -1500) {
        if (this.creditsY > -10) {
          this.creditsY -= 0.05;
        } else if (this.creditsY > -30) {
          this.creditsY -= 0.25;
        } else {
          this.creditsY -= 0.8;
        }
        let gameover = new Image();
        gameover.src = "./assets/gameover.png";
        gameover.onload = () => this.canvas.drawImage(gameover, 0, this.creditsY, 700, 2000);
        if (this.endingSound) {
          this.sounds.music.levelOne.pause();
          setTimeout(() => this.sounds.music.credits.play(), 2000);
          this.endingSound = false;
        }
      }
    }
  }
}

export default Game;