// var aud = document.getElementById('audio');

// var a = new Audio("music/snake.mp3");
// a.load();
// // a.play();


window.onload = function() {
  // aud.muted = false;
}

function reload() {
  window.location.href = "index.html"
}



function processWinner() {

  // new Audio('music/snake.mp3').play().catch(function() {});

  var parameters = location.search.substring(1).split('&');

  var temp = parameters[0].split('=');
  w = unescape(temp[1]);



  document.getElementById('winner').innerHTML = w;
}


processWinner();