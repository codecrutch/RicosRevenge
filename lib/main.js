import Object from './object';

document.addEventListener("DOMContentLoaded", () => {
  const gameCanvas = document.getElementById('ricosrevenge');
  let graphics = gameCanvas.getContext('2d');
  let player = new Object("assets/rico.gif", 40, 0, 50, 50);
  let background = new Object("assets/background.png", 0, 0, 1000, 1000);

  //create long stretch platform
  let platformLength = 47;
  let startPos = 30;
  let heightPos = 300;
  const platforms = [];
  for (var i = 0; i < platformLength; i++) {
    platforms.push(new Object("assets/platform50.png", startPos * i, heightPos, 30, 5));
  }

  // second level platform
  platformLength = 2;
  startPos = 105;
  heightPos = 375;
  for (var i = 0; i < platformLength; i++) {
    platforms.push(new Object("assets/platform50.png", startPos += 48, heightPos, 30, 5));
  }

  platformLength = 1;
  startPos = 370;
  heightPos = 375;
  for (var i = 0; i < platformLength; i++) {
     platforms.push(new Object("assets/platform50.png", startPos += 48, heightPos, 35, 5));
  }

  // lower two platform
  platformLength = 1;
  startPos = 195;
  heightPos = 460;
  for (var i = 0; i < platformLength; i++) {
     platforms.push(new Object("assets/platform50.png", startPos += 48, heightPos, 1, 1));
  }

  platformLength = 1;
  startPos = 292;
  heightPos = 460;
  for (var i = 0; i < platformLength; i++) {
     platforms.push(new Object("assets/platform50.png", startPos += 48, heightPos, 5, 1));
  }
 
 // bottom platform
  platformLength = 1;
  startPos = 239;
  heightPos = 530;
  for (var i = 0; i < platformLength; i++) {
     platforms.push(new Object("assets/platform50.png", startPos += 48, heightPos, 20, 1));
  }

  platformLength = 2;
  startPos = 575;
  heightPos = 410;
  for (var i = 0; i < platformLength; i++) {
     platforms.push(new Object("assets/platform50.png", startPos += 48, heightPos, 20, 1));
  }

   platformLength = 1;
  startPos = 555;
  heightPos = 530;
  for (var i = 0; i < platformLength; i++) {
     platforms.push(new Object("assets/platform50.png", startPos += 48, heightPos, 20, 1));
  }

  platformLength = 10;
  startPos = 1330;
  heightPos = 230;
  for (var i = 0; i < platformLength; i++) {
     platforms.push(new Object("assets/platform50.png", startPos += 48, heightPos, 30, 5));
  }
  
  platformLength = 4;
  startPos = 1810;
  heightPos = 300;
  for (var i = 0; i < platformLength; i++) {
     platforms.push(new Object("assets/platform50.png", startPos += 48, heightPos, 30, 5));
  }

  platformLength = 3;
  startPos = 2002;
  heightPos = 230;
  for (var i = 0; i < platformLength; i++) {
     platforms.push(new Object("assets/platform50.png", startPos += 48, heightPos, 30, 5));
  }

  platformLength = 1;
  startPos = 2191;
  heightPos = 300;
  for (var i = 0; i < platformLength; i++) {
     platforms.push(new Object("assets/platform50.png", startPos += 48, heightPos, 35, 5));
  }

  platformLength = 1;
  startPos = 2411;
  heightPos = 300;
  for (var i = 0; i < platformLength; i++) {
     platforms.push(new Object("assets/platform50.png", startPos += 48, heightPos, 35, 5));
  }

  platformLength = 1;
  startPos = 2541;
  heightPos = 300;
  for (var i = 0; i < platformLength; i++) {
     platforms.push(new Object("assets/platform50.png", startPos += 48, heightPos, 35, 5));
  }

  platformLength = 3;
  startPos = 2571;
  heightPos = 370;
  for (var i = 0; i < platformLength; i++) {
     platforms.push(new Object("assets/platform50.png", startPos += 48, heightPos, 35, 5));
  }

  platformLength = 4;
  startPos = 2941;
  heightPos = 300;
  for (var i = 0; i < platformLength; i++) {
     platforms.push(new Object("assets/platform50.png", startPos += 48, heightPos, 35, 5));
  }
//   platforms[1] = new Object("assets/platform50.png", 140, 375, 50, 5);
//   platforms[2] = new Object("assets/platform50.png", 170, 375, 50, 4);
  
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