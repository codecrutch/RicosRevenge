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

export default Sounds;