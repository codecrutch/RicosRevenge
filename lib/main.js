import Object from './object';

document.addEventListener("DOMContentLoaded", () => {
  const gameCanvas = document.getElementById('ricosrevenge');
  let graphics = gameCanvas.getContext('2d');
  let player = new Object("assets/rico.gif", 40, 0, 50, 50);
  let background = new Object("assets/background.png", 0, 0, 1000, 1000);

  //create long stretch platform
  // Platform specific variables
  let platformLength = 47;
  let startPos = 30;
  let heightPos = 300;
  const platforms = [];
  //

  for (var i = 0; i < platformLength; i++) {
    platforms.push(new Object("assets/platform50.png", startPos * i, heightPos, 30, 5));
  }

  const generatePlatform = (platformLength, startPos, heightPos, platformSize) => {
    for (var i = 0; i < platformLength; i++) {
      platforms.push(new Object("assets/platform50.png", startPos += 48, heightPos, platformSize, 5))
    }
  };


  generatePlatform(2, 105, 375, 30);
  generatePlatform(1, 370, 375, 35);
  generatePlatform(1, 195, 460, 1);
  generatePlatform(1, 292, 460, 5);
  generatePlatform(1, 239, 530, 20);
  generatePlatform(2, 575, 410, 20);
  generatePlatform(1, 560, 530, 20);
  generatePlatform(10, 1330, 230, 30);
  generatePlatform(4, 1810, 300, 30);
  generatePlatform(3, 2002, 230, 30);
  generatePlatform(1, 2191, 300, 35);
  generatePlatform(1, 2411, 300, 35);
  generatePlatform(1, 2541, 300, 35);
  generatePlatform(3, 2571, 370, 35);
  generatePlatform(4, 2941, 300, 35);
  generatePlatform(4, 1551, 375, 35);
  generatePlatform(2, 2127, 375, 10);
  generatePlatform(2, 1347, 530, 10);

  //Events
  let isLeft = false;
  let isRight = false;
  let isJump = false;
  let isFalling = false;
  player.gravity = 150;
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
    player.Y += player.Velocity_Y;



    //Logic
    if (isLeft) player.Velocity_X = -2.3;
    if (isRight) player.Velocity_X = 2.3;
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