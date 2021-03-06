window.onload = function() {
  canv = document.getElementById("board");
  ctx = canv.getContext("2d");
  canvScore = document.getElementById("score");
  ctxScore = canvScore.getContext("2d");
  document.addEventListener("keydown", keyPush);
  setInterval(game, 1000 / 15);
  //background music
  var rand = Math.random() * 10;
  var audioSRC = "";
  if (rand % 2 == 0) {
    audioSRC = "music/miiChannelPauses.mp3";
  } else {
    audioSRC = "music/wiiShopStroke.mp3";
  }


}

var snake_color = '#A7FF12';
//score locations
slg = 0;
slb = 24;
//location of snake
snakeX = snakeY = 10;
snakeX2 = snakeY2 = 12;
//grid size and tile count
gs = tc = 25;
//fruit x and fruit y
fx = fy = 15;
//x velocity and y velocity
xv = yv = 0;
xv2 = yv2 = 0;
trail = [];
trail2 = [];
tail = 1;
tail2 = 1;

player = "Hey";

function game() {
  snakeX += xv;
  snakeY += yv;
  snakeX2 += xv2;
  snakeY2 += yv2;
  if (snakeX2 < 0) {
    snakeX2 = tc - 1;
  }
  if (snakeX2 > tc - 1) {
    snakeX2 = 0;
  }
  if (snakeY2 < 0) {
    snakeY2 = tc - 1;
  }
  if (snakeY2 > tc - 1) {
    snakeY2 = 0;
  }
  if (snakeX < 0) {
    snakeX = tc - 1;
  }
  if (snakeX > tc - 1) {
    snakeX = 0;
  }
  if (snakeY < 0) {
    snakeY = tc - 1;
  }
  if (snakeY > tc - 1) {
    snakeY = 0;
  }
  ctx.fillStyle = "rgb(100,100,100)";
  ctx.fillRect(0, 0, canv.width, canv.height);

  ctx.fillStyle = snake_color;

  if (tail > 49) {
    DedSnek();
    player = "Green Wins!";
  }
  if (tail2 > 49) {
    DedSnek();
    player = "Blue Wins!";
  }

  function DedSnek() {
    window.location.href = "playAgain.html?player=" + player + "";
    var myAudio = new Audio('music/snake.mp3');
    myAudio.play();
  }
  for (var i = 0; i < trail.length; i++) {
    ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
    if (trail[i].x == snakeX && trail[i].y == snakeY || trail[i].x == snakeX2 && trail[i].y == snakeY2) {
      if (tail > 1) {
        player = "Blue Wins!";
      }
    }
  }


  ctx.fillStyle = '#3af';
  for (var i = 0; i < trail2.length; i++) {
    ctx.fillRect(trail2[i].x * gs, trail2[i].y * gs, gs - 2, gs - 2);
    if (trail2[i].x == snakeX2 && trail2[i].y == snakeY2 || trail2[i].x == snakeX && trail2[i].y == snakeY) {
      if (tail2 > 1) {
        player = "Green Wins!";
      }
    }
  }

  trail.push({
    x: snakeX,
    y: snakeY
  });
  while (trail.length > tail) {
    trail.shift();
  }
  trail2.push({
    x: snakeX2,
    y: snakeY2
  });
  while (trail2.length > tail2) {
    trail2.shift();
  }
  var oof = new Audio("music/oof.mp3");
  if (fx == snakeX && fy == snakeY) {
    tail++;
    fx = Math.floor(Math.random() * tc);
    fy = Math.floor(Math.random() * tc);
    oof.play();
  }
  if (fx == snakeX2 && fy == snakeY2) {
    tail2++;
    fx = Math.floor(Math.random() * tc);
    fy = Math.floor(Math.random() * tc);
    oof.play();
  }
  ctx.fillStyle = "red";
  ctx.fillRect(fx * gs, fy * gs, gs - 2, gs - 2);
  console.log('x: ' + fx);
  console.log('y: ' + fy);

  ctxScore.clearRect(0, 0, canvScore.width, canvScore.height);
  ctxScore.fillStyle = '#A7FF12';
  ctxScore.fillRect(slg * gs, 0, gs - 2, gs - 2);
  ctxScore.fillStyle = '#3af';
  ctxScore.fillRect(slb * gs, 0, gs - 2, gs - 2);
  ctxScore.fillStyle = '#000';
  ctxScore.font = "20px Ariel";
  ctxScore.fillText('' + tail, 25, 18);
  ctxScore.fillText('' + tail2, 23 * gs, 18);
}

var KEYCODE_W = 87;
var KEYCODE_A = 65;
var KEYCODE_S = 83;
var KEYCODE_D = 68;
var KEYCODE_UP = 37;
var KEYCODE_LEFT = 38;
var KEYCODE_RIGHT = 39;
var KEYCODE_DOWN = 40;

function keyPush(evt) {
  switch (evt.keyCode) {
    case KEYCODE_A:
      xv = -1;
      yv = 0;
      break;
    case KEYCODE_W:
      xv = 0;
      yv = -1;
      break;
    case KEYCODE_D:
      xv = 1;
      yv = 0;
      break;
    case KEYCODE_S:
      xv = 0;
      yv = 1;
      break;
    case KEYCODE_UP:
      xv2 = -1;
      yv2 = 0;
      break;
    case KEYCODE_LEFT:
      xv2 = 0;
      yv2 = -1;
      break;
    case KEYCODE_RIGHT:
      xv2 = 1;
      yv2 = 0;
      break;
    case KEYCODE_DOWN:
      xv2 = 0;
      yv2 = 1;
      break;
  }
}

function timer(display) {
  var gameInterval = setInterval(function gameTimer() {
    display.textContent = seconds;

    console.log(seconds);

    if (seconds == 0) {
      clearInterval(gameInterval);
      clearInterval(playerInterval);
      alert('You lost the game! Better luck next time!');
    } else {
      seconds--;
    }

  }, 1000);
}

function reload() {
  window.location.href = "index.html";
}
//go to play again or play again
function Timeout() {
  window.location.href = "playAgain.html?player=" + player + "";

}