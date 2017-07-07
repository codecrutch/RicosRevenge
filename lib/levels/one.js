import Platform from '../objects/platform';  
  
  class LevelOne {
    constructor() {
      this.platforms = [];
      this.drawLevel();
    }

    generatePlatform(platformLength, startPos, heightPos, platformSize) {
      for (var i = 0; i < platformLength; i++) {
        this.platforms.push(new Platform("assets/platform50.png", startPos += 48, heightPos, platformSize, 5))
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
      this.generatePlatform(10, 1330, 230, 30);
      this.generatePlatform(4, 1810, 300, 30);
      this.generatePlatform(3, 2002, 230, 30);
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
      this.generatePlatform(1, 2287, 370, 2);
      this.generatePlatform(1, 2467, 410, 3);
      this.generatePlatform(2, 2310, 460, 1);
    }
  }

  export default new LevelOne();