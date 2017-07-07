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
  let player = new __WEBPACK_IMPORTED_MODULE_0__objects_player__["a" /* default */]("assets/ricosprites.png", 40, 0, 50, 50);
  player.addKeyboardEvents();

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
        this.platforms.push(new __WEBPACK_IMPORTED_MODULE_0__objects_platform__["a" /* default */]("", startPos += 48, heightPos, platformSize, 5))
      }
    };

    platforms() {
        return this.platforms;
    }

    drawLevel() {
      this.generatePlatform(29, -10, 300, 30);
      this.generatePlatform(2, 105, 375, 30);
      this.generatePlatform(1, 370, 375, 35);
      this.generatePlatform(1, 195, 460, 1);
      this.generatePlatform(1, 292, 460, 5);
      this.generatePlatform(1, 239, 530, 20);
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
      this.generatePlatform(1, 1870, 460, 1);
      this.generatePlatform(1, 1970, 460, 1);
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


const ANIMATIONS = {
  standing: [0, -10, 35.5, 50],
  walk7: [58, -10, 35.5, 50],
  walk1: [58, -9, 35.5, 50],
  walk2: [108, -8, 30, 50],
  walk3: [168, -8, 30, 50],
  walk4: [232, -8, 30, 50],
  walk5: [299, -8, 30, 50],
  walk6: [369, -8, 30, 50],
  jump: [0, 190, 30, 50],
}

class Player extends __WEBPACK_IMPORTED_MODULE_0__baseObject__["a" /* default */] {
  constructor(img, x, y, width, height) {
    super(img, x, y, width, height);
    this.isJumping = false;
    this.isFalling = false;
    this.turningLeft = false;
    this.turningRight = false;
    this.gravity = 150;
    this.weight = 0.155;
    this.walkCycle = 0;
    this.standing = 0;
  }

  update(platforms) {
    if (this.Y > 325) {
      this.weight = 0.125;
    } else {
      this.weight = 0.155;
    }
    // console.log(this.X, this.Y);
    this.Y += this.Velocity_Y;

    if (this.turningLeft) this.Velocity_X = -2.3;
    if (this.turningRight) this.Velocity_X = 2.3;
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
    }
    // Fall to next platform logic
    if (this.isFalling && this.Velocity_Y === 0) {
      this.gravity = 3;
      this.Velocity_Y = 6;
    }
  }

  selectSprite() {
    if (this.Velocity_X === 0 && this.Velocity_Y == 0) {
      return ANIMATIONS.standing;
    } else if (this.Velocity_Y > 0 || this.Velocity_Y < 0) {
      return ANIMATIONS.jump;
    } else if (this.walkCycle < 5) {
      this.walkCycle += 1;
      return ANIMATIONS.walk1;
    } else if (this.walkCycle < 10) {
      this.walkCycle += 1;
      return ANIMATIONS.walk2;
    } else if (this.walkCycle < 15) {
      this.walkCycle += 1;
      return ANIMATIONS.walk3;
    } else if (this.walkCycle < 20) {
      this.walkCycle += 1;
      return ANIMATIONS.walk4;
    } else if (this.walkCycle < 25) {
      this.walkCycle += 1;
      return ANIMATIONS.walk5;
    } else if (this.walkCycle < 30) {
      this.walkCycle += 1;
      return ANIMATIONS.walk6;
    } else if (this.walkCycle < 35) {
      this.walkCycle += 1;
      return ANIMATIONS.walk7;
      } else if (this.walkCycle < 40) {
      this.walkCycle += 1;
      return ANIMATIONS.walk4;
    } else if (this.walkCycle < 45) {
      this.walkCycle += 1;
      return ANIMATIONS.walk5;
    } else if (this.walkCycle < 50) {
      this.walkCycle += 1;
      return ANIMATIONS.walk6;
    } else {
      this.walkCycle = 0;
      return ANIMATIONS.standing;
    }
  }

  draw(ctx) {
    let playerx = this.X;
    if(this.Velocity_X < 0) {
      playerx = -this.X - 100;
      ctx.scale(-1, 1);
    }
    const sprite = this.selectSprite();
    ctx.drawImage(
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
    if(this.Velocity_X < 0) {
      ctx.scale(-1, 1);
    }
  }

  addKeyboardEvents() {
    document.addEventListener("keydown", (e) => this.keyboardMovements(e, true));
    document.addEventListener("keyup", (e) => this.keyboardMovements(e, false));
  }

  keyboardMovements(e, boolean) {
    switch (e.keyCode) {
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
      default:
        break
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
    player.draw(canvas);
    // canvas.drawImage(player.Sprite, 369,-8,30,50,player.X, player.Y - 20, 40, 70);
}

/* harmony default export */ __webpack_exports__["a"] = (levelRender);

/***/ })
/******/ ]);
//# sourceMappingURL=ricosrevenge.js.map