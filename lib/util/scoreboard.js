class Scoreboard {
  setCookie(username = "rico", score, expireDays = 30) {
    var date = new Date();
    date.setTime(date.getTime() + (expireDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = username + "=" + score + ";" + expires + ";path=/";
  }

  expireCookie(username = "rico") {
    var date = new Date();
    date.setTime(date.getTime() - (2 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = username + "=" + 0 + ";" + expires + ";path=/";
  }

  getCookie(username = "rico") {
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

  updateScoreboard(username, score) {
    let oldScore = this.getCookie(username);

    if (oldScore) {
      if (parseInt(this.getCookie(username)) < score) {
        this.setCookie(username, score);
      }
    } else {
      this.setCookie(username, score);
    }

    return this.getCookie(username);
  }
}

export default Scoreboard;