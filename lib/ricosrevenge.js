/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_game__ = __webpack_require__(15);


document.addEventListener("DOMContentLoaded", () => {
  const game = new __WEBPACK_IMPORTED_MODULE_0__objects_game__["a" /* default */]();
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



/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_platform__ = __webpack_require__(9);


class LevelOne {
  constructor() {
    this.platforms = [];
  }

  generatePlatform(startPos, heightPos, platformWidth, platformHeight = 5, img = "") {
    this.platforms.push(new __WEBPACK_IMPORTED_MODULE_0__objects_platform__["a" /* default */](img, startPos += 48, heightPos, platformWidth, platformHeight))
  };

  getPlatforms() {
    this.platforms = [];
    this.drawLevel();
    return this.platforms;
  }

  drawLevel() {
    this.generatePlatform(1000, 530, 75, 20, "assets/platform.png")
    this.generatePlatform(1400, 372, 15, 10, "assets/platform.png")
    this.generatePlatform(1400, 352, 15, 10, "assets/platform.png")
    this.generatePlatform(1400, 332, 15, 10, "assets/platform.png")
    this.generatePlatform(1400, 312, 15, 10, "assets/platform.png")
    this.generatePlatform(2900, 450, 25, 20, "assets/platform.png")
    this.generatePlatform(3000, 372, 25, 20, "assets/platform.png")
    this.generatePlatform(1250, 450, 25, 20, "assets/platform.png")
    this.generatePlatform(5370, 470, 25, 20, "assets/platform.png")
    this.generatePlatform(5500, 540, 100, 30, "assets/platform.png")
    this.generatePlatform(2860, 210, 1030);
    this.generatePlatform(4282, 210, 310);
    this.generatePlatform(5235, 210, 90);
    this.generatePlatform(30, 290, 2940);
    this.generatePlatform(3880, 290, 435);
    this.generatePlatform(5440, 290, 90);
    this.generatePlatform(4685, 290, 90);
    this.generatePlatform(5165, 290, 90);
    this.generatePlatform(6315, 290, 220);
    this.generatePlatform(4897, 372, 90);
    this.generatePlatform(5500, 372, 300);
    this.generatePlatform(295, 372, 170);
    this.generatePlatform(845, 372, 90);
    this.generatePlatform(3331, 372, 435);
    this.generatePlatform(4560, 372, 155);
    this.generatePlatform(6180, 372, 90);
    this.generatePlatform(6580, 372, 35);
    this.generatePlatform(1315, 410, 155);
    this.generatePlatform(3135, 410, 100);
    this.generatePlatform(6380, 410, 170);
    this.generatePlatform(5297, 410, 35);
    this.generatePlatform(4422, 410, 35);
    this.generatePlatform(6650, 450, 35);
    this.generatePlatform(4009, 450, 82);
    this.generatePlatform(4215, 450, 82);
    this.generatePlatform(4950, 450, 160);
    this.generatePlatform(495, 450, 35);
    this.generatePlatform(695, 450, 35);
    this.generatePlatform(5975, 450, 90);
    this.generatePlatform(565, 530, 100);
    this.generatePlatform(1250, 530, 85); //
    this.generatePlatform(2937, 530, 155);
    this.generatePlatform(3610, 530, 340);
    this.generatePlatform(4895, 530, 35);
    this.generatePlatform(5230, 530, 35);
    this.generatePlatform(5700, 530, 155);
    this.generatePlatform(6315, 530, 462);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (LevelOne);

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_baseObject__ = __webpack_require__(10);
  

class Platform extends __WEBPACK_IMPORTED_MODULE_0__objects_baseObject__["a" /* default */] {
    constructor(img, x, y, width, height) {
        super(img, x, y, width, height);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Platform);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class BaseObject {
  constructor(img, x, y, width, height) {
    this.Sprite = new Image();
    this.Sprite.src = img;
    this.X = x;
    this.Y = y;

    this.width = width;
    this.height = height;
    this.Previous_X;
    this.Previous_Y;

    this.Velocity_X = 0;
    this.Velocity_Y = 0;

    this.gravity = 0;
    this.weight = 0;
  }

  isColliding(obj) {
    if (this.X > obj.X + obj.width) return false;
    if (this.X + this.width < obj.X) return false;
    if (this.Y > obj.Y + obj.height) return false;
    if (this.Y + this.height < obj.Y) return false;
    return true;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (BaseObject);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseObject__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bullet__ = __webpack_require__(14);



const ANIMATIONS = {
  standing: [0, -8, 30, 50],
  ducking: [365,492,30,50],
  walk1: [168, -8, 30, 50],
  walk2: [202, -8, 30, 50],
  walk3: [234, -8, 30, 50],
  walk4: [266, -8, 30, 50],
  walk5: [299, -8, 30, 50],
  walk6: [367, -8, 30, 50],
  jumping: [188, 190, 30, 50],
  falling: [0, 190, 30, 50],
  shooting: [-1, -3, 31, 50]
}

class Player extends __WEBPACK_IMPORTED_MODULE_0__baseObject__["a" /* default */] {
  constructor(img, ctx, game) {
    super(img, 200, 0, 50, 50);
    this.ctx = ctx;
    this.game = game;
    this.isJumping = false;
    this.isFalling = false;
    this.isDucking = false;
    this.isShooting = false;
    this.turningLeft = false;
    this.turningRight = false;
    this.gravity = 150;
    this.weight = 0.155;
    this.walkFrameCount = 0;
    this.standing = 0;
    this.bullets = [];
    this.maxBullets = 10;
    this.direction = "right";
    this.sounds = game.sounds;
    this.jumpSound = this.sounds.effects.jumping;
    this.shootSound = this.sounds.effects.shooting;
    this.duckSound = this.sounds.effects.jumping;
    this.shootingSprite = new Image();
    this.shootingSprite.src = "assets/shooting.png";
    this.bulletBuffer = 2;
  }

  update(platforms,background,level) {
    this.weight = 0.155;
    this.Y += this.Velocity_Y;
   
    // Player fell off screen, stop movement, replace char
    if (this.Y > 540) {
      this.removeKeyboardEvents();
      setTimeout(() => {
        this.Y = -100,
        background.X = 0,
        this.game.platforms = level.getPlatforms(),
        this.gravity = 500,
        this.weight = 2,
        this.addKeyboardEvents()
      }, 1000);
    }

    if (this.turningLeft) {
      this.Velocity_X = -2.1;
      this.direction = "left";
    }

    if (this.turningRight) {
      this.Velocity_X = 2.1;
      this.direction = "right";
    }

    if (!this.turningLeft && !this.turningRight && this.Velocity_Y === 0) this.Velocity_X = 0;

    //fall logic
    // fall velocity with weight
    if (this.Velocity_Y < this.gravity) this.Velocity_Y += this.weight;

    // falling off platforms objects
    platforms.forEach(platform => {
      if (this.isColliding(platform) && this.Y + this.height < platform.Y + this.Velocity_Y) {
        this.Y = platform.Y - this.height;
        this.Velocity_Y = 0;
      }
    })
    // Jump logic
    if (this.isJumping && this.Velocity_Y === 0) {
      this.Velocity_Y = -5;
      this.jumpSound.play();
    }
    // Fall to next platform logic
    if (this.isFalling && this.Velocity_Y === 0) {
      this.gravity = 3;
      this.Velocity_Y = 6;
    }
  }

  selectSprite() {
    if (this.isShooting) {
      return ANIMATIONS.shooting;
    } else if (this.Velocity_X === 0 && this.Velocity_Y == 0 && this.isDucking) {
      return ANIMATIONS.ducking;
    } else if (this.Velocity_X === 0 && this.Velocity_Y == 0) {
      return ANIMATIONS.standing;
    } else if (this.Velocity_Y > 0) { 
      return ANIMATIONS.falling;
    } else if (this.Velocity_Y < 0) {
      return ANIMATIONS.jumping;
    } else if (this.walkFrameCount < 15) {
      this.walkFrameCount += 2;
      return ANIMATIONS.walk1;
    } else if (this.walkFrameCount < 25) {
      this.walkFrameCount += 2;
      return ANIMATIONS.walk2;
    } else if (this.walkFrameCount < 35) {
      this.walkFrameCount += 2;
      return ANIMATIONS.walk3;
    } else if (this.walkFrameCount < 45) {
      this.walkFrameCount += 2;
      return ANIMATIONS.walk4;
    } else if (this.walkFrameCount < 55) {
      this.walkFrameCount += 2;
      return ANIMATIONS.walk5;
    } else if (this.walkFrameCount < 65) {
      this.walkFrameCount += 2;
      return ANIMATIONS.walk4;
    } else if (this.walkFrameCount < 75) {
      this.walkFrameCount += 2;
      return ANIMATIONS.walk6;
    } else {
      this.walkFrameCount = 0;
      return ANIMATIONS.standing;
    }
  }

  draw() {
    let playerx = this.X;
    let spriteSheet = this.Sprite;
    if (this.isShooting) {
      spriteSheet = this.shootingSprite;
    }

    if (this.direction === 'left') {
      playerx = -this.X - 100;
      this.ctx.scale(-1, 1);
    }
    const sprite = this.selectSprite();
    this.ctx.drawImage(
      spriteSheet,
      sprite[0],
      sprite[1],
      sprite[2],
      sprite[3],
      playerx + 30,
      this.Y - 20,
      40,
      70
    );
    if (this.direction === "left") {
      this.ctx.scale(-1, 1);
    }
  }

  addKeyboardEvents() {
    document.onkeydown = (e) => this.keyboardMovements(e, true);
    document.onkeyup = (e) => this.keyboardMovements(e, false);
    document.onkeypress = (e) => this.pauseGame(e);
  }

  pauseGame(e) {
    if (e.keyCode === 112) {
      let muteButton = document.getElementById('mute');
      console.log(muteButton.innerHTML);
      let unmute = () => {};
      let mute = () => {};
      // Don't unmute if globally muted
      if (muteButton.innerHTML === 'Mute Sound') {
        mute = () => this.game.sounds.mute();
        unmute = () => this.game.sounds.unmute();
      }

      if (this.game.pause) {
        unmute();
        this.game.pause = false;
      } else {
        mute();
        this.game.pause = true;
      }
    }
  }

  removeKeyboardEvents() {
    document.onkeydown = null;
    document.onkeyup = null;
    this.Velocity_X = 0;
    this.isJumping = false;
    this.isFalling = false;
    this.isDucking = false;
    this.isShooting = false;
    this.turningLeft = false;
    this.turningRight = false;
  }

  keyboardMovements(e, boolean) {
    switch (e.keyCode) {
      case 13:
      if (e.type === "keydown") {
        this.shootBullet();
        setTimeout(() => this.isShooting = false, 100);
      } else {
        this.isShooting = boolean;
      }
        break
      case 32:
      case 38:
      case 87:
        //  UP
        this.isJumping = boolean;
        break
      case 40:
      case 83:
        //  DOWN
        this.isFalling = boolean;
        break
      case 37:
      case 65:
        // LEFT
        this.turningLeft = boolean;
        break
      case 39:
      case 68:
        //  RIGHT
        this.turningRight = boolean;
        break
      case 16:
      case 17:
        this.isDucking = boolean;
      default:
        break
    }
  }
  shootBullet() {
    if (this.bullets.length < this.maxBullets) {
      this.bullets.push(new __WEBPACK_IMPORTED_MODULE_1__bullet__["a" /* default */](this, this.direction, this.ctx));
      this.shootSound.play();
      this.isShooting = true;
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Player);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseObject__ = __webpack_require__(10);


class Background extends __WEBPACK_IMPORTED_MODULE_0__baseObject__["a" /* default */] {
    constructor(img, x, y, width, height){
        super(img, x, y, width, height);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Background);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const levelRender = function(canvas, player, platforms, background) {
    
    canvas.clearRect(0,0, 10000, 10000);
    canvas.drawImage(background.Sprite, background.X, background.Y, 7040, 600);
    platforms.forEach(platform => canvas.drawImage(platform.Sprite, platform.X, platform.Y, platform.width + 50, platform.height ));
    player.draw();
    player.bullets.forEach(bullet => bullet.draw());
    // canvas.drawImage(player.Sprite, 365,500,30,50,player.X, player.Y - 20, 40, 70);
}

/* harmony default export */ __webpack_exports__["a"] = (levelRender);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseObject__ = __webpack_require__(10);


class Bullet extends __WEBPACK_IMPORTED_MODULE_0__baseObject__["a" /* default */] {
  constructor(owner, direction, ctx) {
    super("assets/bullets.png", 0, 0, 0, 0);
    this.direction = direction;
    this.offset_x = 60;
    this.ctx = ctx;
    this.owner = owner;
    this.X = owner.X;
    this.Y = owner.Y;
  }

  draw() {
    if (this.direction === 'left') {
      this.offset_x = 28;
    }
    if (this.X > 1200 || this.X < -500) {
      this.owner.bullets = this.owner.bullets.slice(1);
    }
    if (this.direction === "right") {
      this.X += 10;
    } else {
      this.X -= 10;
    }
    this.ctx.drawImage(this.Sprite, 21, 55, 20, 10, this.X + this.offset_x, this.Y + 4, 10, 10);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Bullet);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__levels_one__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__background__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_levelRender__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sounds__ = __webpack_require__(16);






class Game {
  constructor() {
    this.score = 0;
    this.gameCanvas = document.getElementById('ricosrevenge');
    this.canvas = this.gameCanvas.getContext('2d');
    this.level = new __WEBPACK_IMPORTED_MODULE_1__levels_one__["a" /* default */]();
    this.sounds = new __WEBPACK_IMPORTED_MODULE_4__sounds__["a" /* default */]();
    this.pause = false;
    this.sounds.music.levelOne.loop = true;
    this.sounds.music.levelOne.play()
    this.player = new __WEBPACK_IMPORTED_MODULE_0__player__["a" /* default */]("assets/ricosprites.png", this.canvas, this);
    this.player.addKeyboardEvents();
    this.platforms = this.level.getPlatforms();
    this.background = new __WEBPACK_IMPORTED_MODULE_2__background__["a" /* default */]("assets/background.png", 0, 0, 1000, 1000);
  }

  render() {
     // Move objects in relation to character on screen
    this.platforms.forEach(platform => platform.X += -this.player.Velocity_X);
    // console.log(background.X, background.Y);
    this.background.X += -this.player.Velocity_X;
    // Update player logic with level platforms
    this.player.update(this.platforms, this.background, this.level);
    // Render all images onto canvas
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util_levelRender__["a" /* default */])(this.canvas, this.player, this.platforms, this.background);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Game);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Sounds {
  constructor() {
    this.music = {
      levelOne: new Audio("assets/levelone.mp3")
    }
    this.effects = {
      jumping: new Audio("assets/jump.wav"),
      shooting: new Audio("assets/shoot.wav")
    }
    this.muted = true;
  }

  mute() {
    for (const key of Object.keys(this.music)) {
      console.log(key);
      this.music[key].muted = true;
    }

    for (const key of Object.keys(this.effects)) {
      console.log(key);
      this.effects[key].muted = true;
    }

    this.muted = true;
  }

  unmute() {
    for (const key of Object.keys(this.music)) {
      console.log(key);
      this.music[key].muted = false;
    }

    for (const key of Object.keys(this.effects)) {
      console.log(key);
      this.effects[key].muted = false;
    }

    this.muted = false;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Sounds);

/***/ })
/******/ ]);
//# sourceMappingURL=ricosrevenge.js.map