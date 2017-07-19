function setCookie(username = "rico", score, expireDays = 30) {
    var date = new Date();
    date.setTime(date.getTime() + (expireDays*24*60*60*1000));
    var expires = "expires="+ date.toUTCString();
    document.cookie = username + "=" + score + ";" + expires + ";path=/";
}
  
function getCookie(username = "rico") {
    var name = username + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
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

function updateScoreboard(username,score) {
  let oldScore = getCookie(username);

  if (oldScore) {
    if (parseInt(getCookie(username)) < score) {
      setCookie(username, score);
    }
  } else {
    setCookie(username, score);
  }

  return getCookie(username);
}

export default updateScoreboard;