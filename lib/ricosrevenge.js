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
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object__ = __webpack_require__(6);


document.addEventListener("DOMContentLoaded", () => {
  const gameCanvas = document.getElementById('ricosrevenge');
  let graphics = gameCanvas.getContext('2d');
  let player = new __WEBPACK_IMPORTED_MODULE_0__object__["a" /* default */]("assets/rico.gif", 40, 0, 50, 50);
  let background = new __WEBPACK_IMPORTED_MODULE_0__object__["a" /* default */]("assets/background.png", 0, 0, 1000, 1000);

  //create run1 platforms
  let platformLength = 47;
  let startPos = 30;
  let heightPos = 300;
  const platforms = [];
  for (var i = 0; i < platformLength; i++) {
    platforms[i] = new __WEBPACK_IMPORTED_MODULE_0__object__["a" /* default */]("assets/platform50.png", startPos * i, heightPos, 30, 5);
  }

  platforms.push(new __WEBPACK_IMPORTED_MODULE_0__object__["a" /* default */]("assets/platform50.png", 140, 375, 30, 5));
  platforms.push(new __WEBPACK_IMPORTED_MODULE_0__object__["a" /* default */]("assets/platform50.png", 190, 375, 30, 5));

  platformLength = 10;
  startPos = 1330;
  heightPos = 230;
  for (var i = 0; i < platformLength; i++) {
     platforms.push(new __WEBPACK_IMPORTED_MODULE_0__object__["a" /* default */]("assets/platform50.png", startPos += 48, heightPos, 30, 5));
  }
  
  platformLength = 4;
  startPos = 1810;
  heightPos = 300;
  for (var i = 0; i < platformLength; i++) {
     platforms.push(new __WEBPACK_IMPORTED_MODULE_0__object__["a" /* default */]("assets/platform50.png", startPos += 48, heightPos, 30, 5));
  }
//   platforms[1] = new Object("assets/platform50.png", 140, 375, 50, 5);
//   platforms[2] = new Object("assets/platform50.png", 170, 375, 50, 4);
  
  //Events
  let isLeft = false;
  let isRight = false;
  let isJump = false;
  let isFalling = false;
  player.gravity = 30;
  player.weight = 0.155;


  document.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
      case 32:
      case 38:
      case 87:
        //  up
        isJump = true;
        break
      case 37:
      case 65:
        // left
        isLeft = true;
        break
      case 40:
      case 83:
        //  down
        isFalling = true;
        break
      case 39:
      case 68:
        //  right
        isRight = true;
        break
      default:
        console.log('wrong key')
    }
  });

  document.addEventListener("keyup", (e) => {
    switch (e.keyCode) {
      case 32:
      case 38:
      case 87:
        //  up
        isJump = false;
        break
      case 37:
      case 65:
        // left
        isLeft = false;
        break
      case 40:
      case 83:
        //  down
        isFalling = false;
        break
      case 39:
      case 68:
        //  right
        isRight = false;
        break
      default:
        console.log('wrong key')
    }
  });


  const mainLoop = () => {
    //Pre Variable Adjustments pan screen based on char
    platforms.forEach(platform => platform.X += -player.Velocity_X);
    background.X += -player.Velocity_X;
    // player.X += player.Velocity_X;
    player.Y += player.Velocity_Y;

    //Logic
    if (isLeft) player.Velocity_X = -3;
    if (isRight) player.Velocity_X = 3;
    if (!isLeft && !isRight && player.Velocity_Y === 0) player.Velocity_X = 0;

    // fall velocity with weight
    if (player.Velocity_Y < player.gravity) player.Velocity_Y += player.weight;

    // falling off platforms objects
    platforms.forEach(platform => {
      if (player.isColliding(platform) && player.Y + player.height < platform.Y + player.Velocity_Y) {
        player.Y = platform.Y - player.height;
        player.Velocity_Y = 0;
      }
    })

    //jump logic
    if (isJump && player.Velocity_Y === 0) {
      player.Velocity_Y = -5;
    }

    //fall logic
    if (isFalling && player.Velocity_Y === 0) {
      player.gravity = 3;
      player.Velocity_Y = 6;
    }

    //Post Variable Adjustments

    //render platformss
    graphics.clearRect(0, 0, gameCanvas.width, gameCanvas.height);

    graphics.drawImage(background.Sprite, background.X - 520, background.Y, 3840, 600);
    platforms.forEach(platform => graphics.drawImage(platform.Sprite, platform.X, platform.Y));
    graphics.drawImage(player.Sprite, player.X, player.Y, 70, 50);


    setTimeout(mainLoop, 1000 / 60);
  };
  mainLoop();

});

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Object {
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

/* harmony default export */ __webpack_exports__["a"] = (Object);

/***/ })

/******/ });
//# sourceMappingURL=ricosrevenge.js.map