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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_player__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__levels_one__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_background__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_levelRender__ = __webpack_require__(13);





document.addEventListener("DOMContentLoaded", () => {
  let gameCanvas = document.getElementById('ricosrevenge');
  let canvas = gameCanvas.getContext('2d');
  let platforms = __WEBPACK_IMPORTED_MODULE_1__levels_one__["a" /* default */].platforms;
  let background = new __WEBPACK_IMPORTED_MODULE_2__objects_background__["a" /* default */]("assets/background.png", 0, 0, 1000, 1000);
  let player = new __WEBPACK_IMPORTED_MODULE_0__objects_player__["a" /* default */]("assets/ricosprites.png", canvas);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util_levelRender__["a" /* default */])(canvas, player, platforms, background);
    // Set FPS
    setTimeout(mainLoop, 1000 / 60);
  };

    mainLoop();
});

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
      this.drawLevel();
    }

    generatePlatform(platformLength, startPos, heightPos, platformSize) {
      for (var i = 0; i < platformLength; i++) {
        this.platforms.push(new __WEBPACK_IMPORTED_MODULE_0__objects_platform__["a" /* default */]("assets/platform50.png", startPos += 48, heightPos, platformSize, 5))
      }
    };

    platforms() {
        return this.platforms;
    }

    drawLevel() {
      this.generatePlatform(29, -10, 300, 30);
      this.generatePlatform(2, 105, 375, 30);
      this.generatePlatform(1, 355, 375, 30);
      this.generatePlatform(1, 195, 460, 1);
      this.generatePlatform(1, 292, 460, 5);
      this.generatePlatform(1, 230, 530, 30);
      this.generatePlatform(2, 575, 410, 20);
      this.generatePlatform(1, 560, 530, 20);
      this.generatePlatform(10, 1330, 220, 30);
      this.generatePlatform(4, 1810, 300, 30);
      this.generatePlatform(3, 2002, 220, 30);
      this.generatePlatform(1, 2191, 300, 35);
      this.generatePlatform(1, 2411, 300, 35);
      this.generatePlatform(1, 2541, 300, 35);
      this.generatePlatform(3, 2571, 370, 35);
      this.generatePlatform(4, 2941, 300, 35);
      this.generatePlatform(4, 1551, 375, 35);
      this.generatePlatform(2, 2127, 375, 10);
      this.generatePlatform(2, 1347, 530, 10);
      this.generatePlatform(4, 1667, 530, 10);
      this.generatePlatform(1, 1455, 410, 1);
      this.generatePlatform(1, 1870, 460, 10);
      this.generatePlatform(1, 1965, 460, 10);
      this.generatePlatform(2, 2990, 410, 1);
      this.generatePlatform(2, 2277, 370, 0.2);
      this.generatePlatform(1, 2467, 410, 3);
      this.generatePlatform(2, 2310, 460, 1);
      this.generatePlatform(1, 2450, 220, 1);
      this.generatePlatform(1, 2050, 410, 1);
      this.generatePlatform(1, 2430, 530, 1);
      this.generatePlatform(1, 2260, 530, 1);
      this.generatePlatform(5, 2935, 530, 1);
      this.generatePlatform(2, 2660, 530, 1);
      this.generatePlatform(1, 2800, 460, 1);
      this.generatePlatform(1, 2900, 375, 2);
      this.generatePlatform(1, 3080, 375, 1);
      this.generatePlatform(1, 3110, 455, 1);
    }
  }

  /* harmony default export */ __webpack_exports__["a"] = (new LevelOne());

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
  shooting: [55, 48, 30, 50]
}

class Player extends __WEBPACK_IMPORTED_MODULE_0__baseObject__["a" /* default */] {
  constructor(img, ctx) {
    super(img, 200, 0, 50, 50);
    this.ctx = ctx;
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
    this.shootSound = new Audio("assets/shoot.wav");
    this.jumpSound = new Audio("assets/jump.wav");
    this.duckSound = new Audio("assets/jump.wav");
  }

  update(platforms) {
    // Player fell off screen, stop movement, replace char
    if (this.Y > 540) {
      this.removeKeyboardEvents();
      setTimeout(() => {
        this.Y = -100,
        this.gravity = 500,
        this.weight = 2,
        this.addKeyboardEvents()
      }, 1000);
    }
    // Double jump when below certain height
    if (this.Y > 325) {
      this.weight = 0.125;
    } else {
      this.weight = 0.155;
    }
    // console.log(this.X, this.Y);
    this.Y += this.Velocity_Y;
    if (this.isShooting && this.Velocity_X > 0) {
      this.isShooting = false;
    };
    if (this.turningLeft) this.Velocity_X = -2.1;
    if (this.turningRight) this.Velocity_X = 2.1;
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

    if (this.isDucking) {
      this.duckSound.play();
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
    if (this.Velocity_X < 0) {
      playerx = -this.X - 100;
      this.ctx.scale(-1, 1);
    }
    const sprite = this.selectSprite();
    this.ctx.drawImage(
      this.Sprite,
      sprite[0],
      sprite[1],
      sprite[2],
      sprite[3],
      playerx + 30,
      this.Y - 20,
      40,
      70
    );
    if (this.Velocity_X < 0) {
      this.ctx.scale(-1, 1);
    }
  }

  addKeyboardEvents() {
    document.onkeydown = (e) => this.keyboardMovements(e, true);
    document.onkeyup = (e) => this.keyboardMovements(e, false);
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
      let direction = this.turningLeft ? "left" : "right";
      this.bullets.push(new __WEBPACK_IMPORTED_MODULE_1__bullet__["a" /* default */](this, direction, this.ctx));
      new Audio("assets/shoot.wav").play();
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
    canvas.drawImage(background.Sprite, background.X - 520, background.Y, 3840, 600);
    platforms.forEach(platform => canvas.drawImage(platform.Sprite, platform.X, platform.Y));
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
      this.offset_x = 15;
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

/***/ })
/******/ ]);
//# sourceMappingURL=ricosrevenge.js.map