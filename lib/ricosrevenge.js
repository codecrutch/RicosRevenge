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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseObject = function () {
  function BaseObject(img, x, y, width, height) {
    _classCallCheck(this, BaseObject);

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

  _createClass(BaseObject, [{
    key: "isColliding",
    value: function isColliding(obj) {
      if (this.X > obj.X + obj.width) return false;
      if (this.X + this.width < obj.X) return false;
      if (this.Y > obj.Y + obj.height) return false;
      if (this.Y + this.height < obj.Y) return false;
      return true;
    }
  }]);

  return BaseObject;
}();

exports.default = BaseObject;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(2);

var _game2 = _interopRequireDefault(_game);

var _scoreboard = __webpack_require__(12);

var _scoreboard2 = _interopRequireDefault(_scoreboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  var replay = document.getElementById("replay");
  var muted = document.getElementById("mute");
  var gameScreen = document.getElementById('ricosrevenge');
  var instructionsButton = document.getElementById("open-instructions");
  muted.onmousemove = muted.style['cursor'] = 'pointer';
  gameScreen.onmousemove = gameScreen.style['cursor'] = 'pointer';
  replay.onmouseover = replay.style['cursor'] = 'pointer';
  replay.addEventListener("click", function () {
    window.location.reload();
  });

  var game = new _game2.default();

  instructionsButton.addEventListener("click", function (e) {
    if (!game.paused) {
      game.pause();
      var intro = new Image();
      intro.src = "assets/instructions.png";
      intro.onload = function () {
        return game.canvas.drawImage(intro, 0, 0, 700, 600);
      };
    } else {
      game.unpause();
    }
    e.stopPropagation();
  });

  muted.addEventListener('click', function (e) {
    if (game.muted) {
      game.unmute();
      e.target.innerHTML = 'Mute Sound';
    } else {
      game.mute();
      e.target.innerHTML = 'Unmute';
    }
  });

  game.showInstructions();

  var mainLoop = function mainLoop() {
    game.render();
    // Set FPS
    setTimeout(mainLoop, 1000 / 80);
  };

  mainLoop();
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(3);

var _player2 = _interopRequireDefault(_player);

var _one = __webpack_require__(5);

var _one2 = _interopRequireDefault(_one);

var _background = __webpack_require__(8);

var _background2 = _interopRequireDefault(_background);

var _levelRender = __webpack_require__(9);

var _levelRender2 = _interopRequireDefault(_levelRender);

var _sounds = __webpack_require__(10);

var _sounds2 = _interopRequireDefault(_sounds);

var _scoreboard = __webpack_require__(12);

var _scoreboard2 = _interopRequireDefault(_scoreboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    var _this = this;

    _classCallCheck(this, Game);

    this.score = 0;
    this.gameCanvas = document.getElementById('ricosrevenge');
    this.canvas = this.gameCanvas.getContext('2d');
    this.level = new _one2.default(this);
    this.sounds = new _sounds2.default();
    this.paused = true;
    this.player = new _player2.default("assets/ricosprites.png", this.canvas, this);
    this.player.addKeyboardEvents();
    this.platforms = this.level.getPlatforms();
    this.enemies = this.level.getEnemies();
    this.boss = this.level.getBoss();
    this.background = new _background2.default("assets/background.png", 0, 0, 0, 0);
    this.beforeGround = new _background2.default("assets/outofbounds.png", 0, 0, 0, 0);
    this.afterGround = new _background2.default("assets/levelend.png", 0, 0, 0, 0);
    this.gameover = false;
    this.creditsY = 0;
    this.endingSound = true;
    this.muted = true;
    this.Scoreboard = new _scoreboard2.default();
    document.onkeypress = function (e) {
      return _this.pauseGame(e);
    };
    this.mute();
  }

  _createClass(Game, [{
    key: 'addScore',
    value: function addScore(points) {
      if (points < 0) {
        if (this.score + points < 0) {
          this.score = 0;
        } else {
          this.score += points;
        }
      } else {
        this.score += points;
      }
    }
  }, {
    key: 'highscore',
    value: function highscore() {
      return this.Scoreboard.getCookie();
    }
  }, {
    key: 'showInstructions',
    value: function showInstructions() {
      var _this2 = this;

      var intro = new Image();
      intro.src = "assets/instructions.png";
      intro.onload = function () {
        return _this2.canvas.drawImage(intro, 0, 0, 700, 600);
      };
      this.gameCanvas.onclick = this.startGame.bind(this);
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.paused = true;
    }
  }, {
    key: 'unpause',
    value: function unpause() {
      this.paused = false;
    }
  }, {
    key: 'mute',
    value: function mute() {
      this.sounds.mute();
      this.muted = true;
    }
  }, {
    key: 'unmute',
    value: function unmute() {
      this.sounds.unmute();
      this.muted = false;
    }
  }, {
    key: 'pauseGame',
    value: function pauseGame(e) {
      var _this3 = this;

      if (e.keyCode === 112) {
        var muteButton = document.getElementById('mute');
        var unmute = function unmute() {};
        var mute = function mute() {};
        // Don't unmute if globally muted
        if (muteButton.innerHTML === 'Mute Sound') {
          mute = function mute() {
            return _this3.sounds.mute();
          };
          unmute = function unmute() {
            return _this3.sounds.unmute();
          };
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
  }, {
    key: 'startGame',
    value: function startGame() {
      this.unpause();
      this.sounds.music.levelOne.loop = true;
      this.sounds.music.levelOne.play();
      this.gameCanvas.style['cursor'] = 'auto';
      this.gameStarted = true;
      document.getElementById("open-instructions").style['cursor'] = 'pointer';
      document.getElementById("open-instructions").style['display'] = 'block';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

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
        this.platforms.forEach(function (platform) {
          return platform.X += -_this4.player.Velocity_X;
        });
        this.enemies.forEach(function (enemy) {
          enemy.X += -_this4.player.Velocity_X;
          enemy.update();
        });

        this.boss.X += -this.player.Velocity_X;
        this.boss.update();

        this.background.X += -this.player.Velocity_X;
        this.player.update();
        // Render all images onto canvas
        (0, _levelRender2.default)(this);
      } else {
        this.Scoreboard.updateScoreboard("rico", this.score);
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
          var gameover = new Image();
          gameover.src = "./assets/gameover.png";
          gameover.onload = function () {
            return _this4.canvas.drawImage(gameover, 0, _this4.creditsY, 700, 2000);
          };
          if (this.endingSound) {
            this.sounds.music.levelOne.pause();
            setTimeout(function () {
              return _this4.sounds.music.credits.play();
            }, 2000);
            this.endingSound = false;
          }
        }
      }
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseObject = __webpack_require__(0);

var _baseObject2 = _interopRequireDefault(_baseObject);

var _bullet = __webpack_require__(4);

var _bullet2 = _interopRequireDefault(_bullet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ANIMATIONS = {
  standing: [0, -8, 30, 50],
  ducking: [365, 492, 30, 50],
  walk1: [168, -8, 30, 50],
  walk2: [202, -8, 30, 50],
  walk3: [234, -8, 30, 50],
  walk4: [266, -8, 30, 50],
  walk5: [299, -8, 30, 50],
  walk6: [367, -8, 30, 50],
  jumping: [188, 190, 30, 50],
  falling: [0, 190, 30, 50],
  shooting: [-1, -3, 31, 50]
};

var Player = function (_BaseObject) {
  _inherits(Player, _BaseObject);

  function Player(img, ctx, game) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, img, 200, 0, 50, 50));

    _this.ctx = ctx;
    _this.game = game;
    _this.isJumping = false;
    _this.isFalling = false;
    _this.isDucking = false;
    _this.isShooting = false;
    _this.turningLeft = false;
    _this.turningRight = false;
    _this.gravity = 150;
    _this.weight = 0.155;
    _this.walkFrameCount = 0;
    _this.standing = 0;
    _this.bullets = [];
    _this.maxBullets = 10;
    _this.direction = "right";
    _this.sounds = game.sounds;
    _this.jumpSound = _this.sounds.effects.jumping;
    _this.shootSound = _this.sounds.effects.shooting;
    _this.duckSound = _this.sounds.effects.jumping;
    _this.shootingSprite = new Image();
    _this.shootingSprite.src = "assets/shooting.png";
    _this.bulletBuffer = 2;
    return _this;
  }

  _createClass(Player, [{
    key: 'update',
    value: function update() {
      var _this2 = this;

      this.weight = 0.155;
      this.Y += this.Velocity_Y;

      if (this.game.background.X > 0) {
        this.V;
      }
      // Player fell off screen, stop movement, replace char
      if (this.Y > 540) {
        this.removeKeyboardEvents();
        setTimeout(function () {
          _this2.Y = -100, _this2.game.background.X = 0, _this2.game.platforms = _this2.game.level.getPlatforms(), _this2.game.boss.X = _this2.game.boss.originalX;
          _this2.gravity = 500, _this2.weight = 2, _this2.game.score = 0;
          setTimeout(_this2.addKeyboardEvents.bind(_this2), 1500);
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
      this.game.platforms.forEach(function (platform) {
        if (_this2.isColliding(platform) && _this2.Y + _this2.height < platform.Y + _this2.Velocity_Y) {
          _this2.Y = platform.Y - _this2.height;
          _this2.Velocity_Y = 0;
        }
      });

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
  }, {
    key: 'selectSprite',
    value: function selectSprite() {
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
  }, {
    key: 'draw',
    value: function draw() {
      var playerx = this.X;
      var spriteSheet = this.Sprite;
      if (this.isShooting) {
        spriteSheet = this.shootingSprite;
      }

      if (this.direction === 'left') {
        playerx = -this.X - 100;
        this.ctx.scale(-1, 1);
      }
      var sprite = this.selectSprite();
      this.ctx.drawImage(spriteSheet, sprite[0], sprite[1], sprite[2], sprite[3], playerx + 30, this.Y - 20, 40, 70);
      if (this.direction === "left") {
        this.ctx.scale(-1, 1);
      }
    }
  }, {
    key: 'addKeyboardEvents',
    value: function addKeyboardEvents() {
      var _this3 = this;

      document.onkeydown = function (e) {
        return _this3.keyboardMovements(e, true);
      };
      document.onkeyup = function (e) {
        return _this3.keyboardMovements(e, false);
      };
    }
  }, {
    key: 'removeKeyboardEvents',
    value: function removeKeyboardEvents() {
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
  }, {
    key: 'keyboardMovements',
    value: function keyboardMovements(e, boolean) {
      var _this4 = this;

      switch (e.keyCode) {
        case 13:
          if (e.type === "keydown") {
            this.shootBullet();
            setTimeout(function () {
              return _this4.isShooting = false;
            }, 100);
          } else {
            this.isShooting = boolean;
          }
          break;
        case 32:
        case 38:
        case 87:
          //  UP
          this.isJumping = boolean;
          break;
        case 40:
        case 83:
          //  DOWN
          this.isFalling = boolean;
          break;
        case 37:
        case 65:
          // LEFT
          this.turningLeft = boolean;
          break;
        case 39:
        case 68:
          //  RIGHT
          this.turningRight = boolean;
          break;
        case 16:
        case 17:
          this.isDucking = boolean;
        default:
          break;
      }
    }
  }, {
    key: 'shootBullet',
    value: function shootBullet() {
      if (this.bullets.length < this.maxBullets) {
        this.bullets.push(new _bullet2.default(this, this.direction, this.ctx));
        this.shootSound.play();
        this.isShooting = true;
      }
    }
  }]);

  return Player;
}(_baseObject2.default);

exports.default = Player;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseObject = __webpack_require__(0);

var _baseObject2 = _interopRequireDefault(_baseObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bullet = function (_BaseObject) {
  _inherits(Bullet, _BaseObject);

  function Bullet(owner, direction, ctx) {
    _classCallCheck(this, Bullet);

    var _this = _possibleConstructorReturn(this, (Bullet.__proto__ || Object.getPrototypeOf(Bullet)).call(this, "assets/bullets.png", 0, 0, 60, 10));

    _this.direction = direction;
    _this.offset_x = 60;
    _this.ctx = ctx;
    _this.owner = owner;
    _this.X = owner.X;
    _this.Y = owner.Y;
    return _this;
  }

  _createClass(Bullet, [{
    key: 'draw',
    value: function draw() {
      if (this.direction === 'left') {
        this.offset_x = 28;
      }
      if (this.X > 600 || this.X < -500) {
        this.owner.bullets = this.owner.bullets.slice(1);
      }
      if (this.direction === "right") {
        this.X += 10;
      } else {
        this.X -= 10;
      }
      this.ctx.drawImage(this.Sprite, 21, 55, 20, 10, this.X + this.offset_x, this.Y + 4, 10, 10);
    }
  }]);

  return Bullet;
}(_baseObject2.default);

exports.default = Bullet;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _platform = __webpack_require__(6);

var _platform2 = _interopRequireDefault(_platform);

var _enemy = __webpack_require__(7);

var _enemy2 = _interopRequireDefault(_enemy);

var _boss = __webpack_require__(11);

var _boss2 = _interopRequireDefault(_boss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LevelOne = function () {
  function LevelOne(game) {
    _classCallCheck(this, LevelOne);

    this.game = game;
    this.platforms = [];
    this.enemies = [];
    this.maxEnemies = 25;
  }

  _createClass(LevelOne, [{
    key: 'generatePlatform',
    value: function generatePlatform(startPos, heightPos, platformWidth) {
      var platformHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5;
      var img = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";

      this.platforms.push(new _platform2.default(img, startPos += 48, heightPos, platformWidth, platformHeight));
    }
  }, {
    key: 'getEnemies',
    value: function getEnemies() {
      while (this.enemies.length < this.maxEnemies) {
        this.enemies.push(new _enemy2.default(this.game));
      }
      return this.enemies;
    }
  }, {
    key: 'getPlatforms',
    value: function getPlatforms() {
      this.platforms = [];
      this.drawLevel();
      return this.platforms;
    }
  }, {
    key: 'getBoss',
    value: function getBoss() {
      return new _boss2.default("assets/boss.png", 6750, 390, 282, 262, 15000, this.game);
    }
  }, {
    key: 'drawLevel',
    value: function drawLevel() {
      this.generatePlatform(1000, 530, 75, 20, "assets/platform.png");
      this.generatePlatform(1400, 372, 15, 10, "assets/platform.png");
      this.generatePlatform(1400, 352, 15, 10, "assets/platform.png");
      this.generatePlatform(1400, 332, 15, 10, "assets/platform.png");
      this.generatePlatform(1400, 312, 15, 10, "assets/platform.png");
      this.generatePlatform(2900, 450, 25, 20, "assets/platform.png");
      this.generatePlatform(3000, 372, 25, 20, "assets/platform.png");
      this.generatePlatform(1250, 450, 25, 20, "assets/platform.png");
      this.generatePlatform(5370, 470, 25, 20, "assets/platform.png");
      this.generatePlatform(5500, 540, 100, 30, "assets/platform.png");
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
      this.generatePlatform(1250, 530, 85);
      this.generatePlatform(2937, 530, 155);
      this.generatePlatform(3610, 530, 340);
      this.generatePlatform(4895, 530, 35);
      this.generatePlatform(5230, 530, 35);
      this.generatePlatform(5700, 530, 175);
      this.generatePlatform(6315, 530, 462);
      this.generatePlatform(6850, 530, 10, 1000);
    }
  }]);

  return LevelOne;
}();

exports.default = LevelOne;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _baseObject = __webpack_require__(0);

var _baseObject2 = _interopRequireDefault(_baseObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Platform = function (_BaseObject) {
    _inherits(Platform, _BaseObject);

    function Platform(img, x, y, width, height) {
        _classCallCheck(this, Platform);

        return _possibleConstructorReturn(this, (Platform.__proto__ || Object.getPrototypeOf(Platform)).call(this, img, x, y, width, height));
    }

    return Platform;
}(_baseObject2.default);

exports.default = Platform;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseObject = __webpack_require__(0);

var _baseObject2 = _interopRequireDefault(_baseObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ANIMATIONS = {
  fly1: [32, 96, 32, 32],
  fly2: [64, 96, 32, 32],
  fly3: [96, 96, 32, 32],
  fly4: [0, 96, 32, 32]
};

var Enemy = function (_BaseObject) {
  _inherits(Enemy, _BaseObject);

  function Enemy(game) {
    _classCallCheck(this, Enemy);

    var _this = _possibleConstructorReturn(this, (Enemy.__proto__ || Object.getPrototypeOf(Enemy)).call(this, "assets/bat.png", Math.random() * 1000, Math.random() * 1000, 20, 30));

    _this.game = game;
    _this.weight = 2;
    _this.gravity = 20;
    _this.direction = 'right';
    _this.flyingFrameCount = Math.floor(Math.random() * 45);
    _this.effects = game.sounds.effects;
    _this.randomX = Math.random() * 1;
    return _this;
  }

  _createClass(Enemy, [{
    key: 'draw',
    value: function draw() {
      var enemyX = this.X;
      if (this.direction === 'left') {
        enemyX = -this.X - 100;
        this.game.canvas.scale(-1, 1);
      }
      var sprite = this.selectSprite();
      this.game.canvas.drawImage(this.Sprite, sprite[0], sprite[1], sprite[2], sprite[3], this.X, this.Y - 10, 64, 64);
      if (this.direction === "left") {
        this.game.canvas.scale(-1, 1);
      }
    }
  }, {
    key: 'update',
    value: function update() {
      var _this2 = this;

      this.X -= 1 + this.randomX;

      this.game.player.bullets.forEach(function (bullet) {
        if (_this2.isColliding(bullet)) {
          _this2.effects.hit.play();
          _this2.game.addScore(500);
          _this2.game.player.bullets = _this2.game.player.bullets.slice(1);
          _this2.X = _this2.game.player.X + 1000;
        }
      });

      if (this.isColliding(this.game.player)) {
        this.game.addScore(-5);
      }

      if (this.X < this.game.player.X - 220) {
        setTimeout(function () {
          _this2.X = _this2.game.player.X + 500, _this2.Y = Math.random() * 1000;
        }, 1);
      }
    }
  }, {
    key: 'selectSprite',
    value: function selectSprite() {
      if (this.flyingFrameCount < 25) {
        this.flyingFrameCount += 2;
        return ANIMATIONS.fly1;
      } else if (this.flyingFrameCount < 35) {
        this.flyingFrameCount += 2;
        return ANIMATIONS.fly2;
      } else if (this.flyingFrameCount < 45) {
        this.flyingFrameCount += 2;
        return ANIMATIONS.fly3;
      } else {
        this.flyingFrameCount = 0;
        return ANIMATIONS.fly4;
      }
    }
  }]);

  return Enemy;
}(_baseObject2.default);

exports.default = Enemy;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _baseObject = __webpack_require__(0);

var _baseObject2 = _interopRequireDefault(_baseObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Background = function (_BaseObject) {
    _inherits(Background, _BaseObject);

    function Background(img, x, y, width, height) {
        _classCallCheck(this, Background);

        return _possibleConstructorReturn(this, (Background.__proto__ || Object.getPrototypeOf(Background)).call(this, img, x, y, width, height));
    }

    return Background;
}(_baseObject2.default);

exports.default = Background;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var levelRender = function levelRender(game) {
  var canvas = game.canvas;
  var player = game.player;
  var platforms = game.platforms;
  var background = game.background;
  var enemies = game.enemies;
  var beforeGround = game.beforeGround;
  var afterGround = game.afterGround;
  var boss = game.boss;

  canvas.clearRect(0, 0, 1000, 1000);
  canvas.drawImage(background.Sprite, background.X, background.Y, 7040, 600);
  canvas.drawImage(afterGround.Sprite, background.X + 7020, background.Y, 750, 600);
  canvas.drawImage(beforeGround.Sprite, background.X - 730, background.Y + 3, 750, 600);
  platforms.forEach(function (platform) {
    return canvas.drawImage(platform.Sprite, platform.X, platform.Y, platform.width + 50, platform.height);
  });
  enemies.forEach(function (enemy) {
    return enemy.draw();
  });
  boss.draw();
  player.draw();
  player.bullets.forEach(function (bullet) {
    return bullet.draw();
  });
  // canvas.drawImage(player.Sprite, 365,500,30,50,player.X, player.Y - 20, 40, 70);
  if (boss.dead) {
    canvas.font = "35px 'Press Start 2P'";
    canvas.fillStyle = "smoke";
    canvas.fillText("You've done it?!", 350, 280);
    canvas.font = "20px 'Press Start 2P'";
    canvas.fillText("to be continued...", 350, 300);
  }
  // Write score
  canvas.font = "10px 'Press Start 2P'";
  canvas.fillStyle = "white";
  canvas.textAlign = "center";
  canvas.fillText("Score: " + game.score, 500, 15);
  // Write high score
  canvas.font = "10px 'Press Start 2P'";
  canvas.fillStyle = "white";
  canvas.textAlign = "center";
  var highscore = game.highscore() === "" ? 0 : game.highscore();
  canvas.fillText("High Score: " + highscore, 300, 15);
};

exports.default = levelRender;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sounds = function () {
  function Sounds() {
    _classCallCheck(this, Sounds);

    this.music = {
      levelOne: new Audio("assets/levelone.mp3"),
      victory: new Audio("assets/victory.mp3"),
      title: new Audio("assets/title.mp3"),
      credits: new Audio("assets/credits.mp3")
    };
    this.effects = {
      jumping: new Audio("assets/jump.wav"),
      shooting: new Audio("assets/shoot.wav"),
      hit: new Audio("assets/bulletcollision.wav")
    };
    this.muted = true;
  }

  _createClass(Sounds, [{
    key: "mute",
    value: function mute() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Object.keys(this.music)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          this.music[key].muted = true;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = Object.keys(this.effects)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _key = _step2.value;

          this.effects[_key].muted = true;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.muted = true;
    }
  }, {
    key: "unmute",
    value: function unmute() {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = Object.keys(this.music)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var key = _step3.value;

          this.music[key].muted = false;
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = Object.keys(this.effects)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _key2 = _step4.value;

          this.effects[_key2].muted = false;
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      this.muted = false;
    }
  }]);

  return Sounds;
}();

exports.default = Sounds;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseObject = __webpack_require__(0);

var _baseObject2 = _interopRequireDefault(_baseObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ANIMATIONS = {
  b1: [5, 0, 190, 170],
  b2: [185, 0, 190, 170],
  b3: [5, 181, 190, 170],
  b4: [185, 181, 190, 170],
  b5: [185, 362, 190, 170],
  hit: [5, 362, 190, 170]
};

var Boss = function (_BaseObject) {
  _inherits(Boss, _BaseObject);

  function Boss(img, xpos, ypos, width, height, health, game) {
    _classCallCheck(this, Boss);

    var _this = _possibleConstructorReturn(this, (Boss.__proto__ || Object.getPrototypeOf(Boss)).call(this, img, xpos, ypos, width, height));

    _this.game = game;
    _this.health = health;
    _this.dead = false;
    _this.bossFrameCycle = 0;
    _this.beingInjured = false;
    _this.effects = game.sounds.effects;
    _this.width = 100;
    _this.height = 120;
    _this.originalX = xpos;
    return _this;
  }

  _createClass(Boss, [{
    key: 'draw',
    value: function draw() {
      if (this.dead) {
        return;
      } else {
        var sprite = this.selectSprite();
        this.game.canvas.drawImage(this.Sprite, sprite[0], sprite[1], sprite[2], sprite[3], this.X, this.Y, 182, 150);
      }
    }
  }, {
    key: 'update',
    value: function update() {
      var _this2 = this;

      if (this.health <= 0) {
        this.dead = true;
        this.game.sounds.music.title.play();
        this.game.sounds.music.levelOne.pause();
        setTimeout(function () {
          return _this2.game.gameover = true;
        }, 3200);
      }

      if (!this.dead) {
        this.game.player.bullets.forEach(function (bullet) {
          if (_this2.isColliding(bullet)) {
            _this2.effects.hit.play();
            _this2.game.addScore(10 * Math.floor(_this2.Y));
            _this2.health -= 500;
            _this2.Y = 0;
            while (_this2.Y < 170 || _this2.Y > 450) {
              _this2.Y = 170 + Math.floor(Math.random() * 480);
            }
            _this2.beingInjured = true;
            setTimeout(function () {
              return _this2.beingInjured = false;
            }, 100);
            _this2.game.player.bullets = _this2.game.player.bullets.slice(1);
          }
        });
      }

      if (this.isColliding(this.game.player) && !this.dead) {
        this.game.player.removeKeyboardEvents();
        this.game.player.Velocity_X = -6.1;
        this.game.player.Velocity_Y = -2;
        this.game.player.Velocity_X = -4.1;
        this.game.boss.X += -this.game.player.Velocity_X;
        this.game.background.X += -this.game.player.Velocity_X;
        this.game.platforms.forEach(function (platform) {
          return platform.X += -_this2.game.player.Velocity_X;
        });
        this.game.addScore(-1000);
        this.health += 1000;
        this.game.player.addKeyboardEvents();
      }
    }
  }, {
    key: 'selectSprite',
    value: function selectSprite() {
      if (this.beingInjured) {
        return ANIMATIONS.hit;
      } else if (this.bossFrameCycle < 25) {
        this.bossFrameCycle += 0.2;
        return ANIMATIONS.b1;
      } else if (this.bossFrameCycle < 35) {
        this.bossFrameCycle += 0.2;
        return ANIMATIONS.b2;
      } else if (this.bossFrameCycle < 45) {
        this.bossFrameCycle += 0.2;
        return ANIMATIONS.b3;
      } else if (this.bossFrameCycle < 55) {
        this.bossFrameCycle += 0.2;
        return ANIMATIONS.b4;
      } else {
        this.bossFrameCycle = 0;
        return ANIMATIONS.b5;
      }
    }
  }]);

  return Boss;
}(_baseObject2.default);

exports.default = Boss;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scoreboard = function () {
  function Scoreboard() {
    _classCallCheck(this, Scoreboard);
  }

  _createClass(Scoreboard, [{
    key: "setCookie",
    value: function setCookie() {
      var username = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "rico";
      var score = arguments[1];
      var expireDays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;

      var date = new Date();
      date.setTime(date.getTime() + expireDays * 24 * 60 * 60 * 1000);
      var expires = "expires=" + date.toUTCString();
      document.cookie = username + "=" + score + ";" + expires + ";path=/";
    }
  }, {
    key: "expireCookie",
    value: function expireCookie() {
      var username = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "rico";
      var score = arguments[1];

      var date = new Date();
      date.setTime(date.getTime() - 2 * 24 * 60 * 60 * 1000);
      var expires = "expires=" + date.toUTCString();
      document.cookie = username + "=" + score + ";" + expires + ";path=/";
    }
  }, {
    key: "getCookie",
    value: function getCookie() {
      var username = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "rico";

      var name = username + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
  }, {
    key: "updateScoreboard",
    value: function updateScoreboard(username, score) {
      var oldScore = this.getCookie(username);

      if (oldScore) {
        if (parseInt(this.getCookie(username)) < score) {
          this.setCookie(username, score);
        }
      } else {
        this.setCookie(username, score);
      }

      return this.getCookie(username);
    }
  }]);

  return Scoreboard;
}();

// Add for demo day


window.Scoreboard = new Scoreboard();

exports.default = Scoreboard;

/***/ })
/******/ ]);
//# sourceMappingURL=ricosrevenge.js.map