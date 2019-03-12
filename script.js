//reference video: https://www.youtube.com/watch?v=xGmXxpIj6vs
window.onload=function() {
  canv=document.getElementById("board");
  ctx=canv.getContext("2d");
  document.addEventListener("keydown",keyPush);
  setInterval(game,1000/15);
}
var snake_color = '#A7FF12';
//location of snake
snakeX=snakeY=10;
snakeX2=snakeY2=12;
//grid size and tile count
gs=tc=25;
//fruit x and fruit y
fx=fy=15;
//x velocity and y velocity
xv=yv=0;
xv2=yv2=0;
trail=[];
trail2=[];
tail = 1;
tail2 = 1;

player = "Hey";

function game() {
  snakeX+=xv;
  snakeY+=yv;
  snakeX2+=xv2;
  snakeY2+=yv2;
  if(snakeX < 0 || snakeY < 0 ) {
    player = "Blue Wins!";
    DedSnek();
  }
  if(snakeX > tc-1 || snakeY > tc-1) {
    player = "Blue Wins!";
    DedSnek();
  }
  if(snakeX2 < 0 || snakeY2 < 0) {
    player = "Green Wins!";
    DedSnek();
  }
  if(snakeX2 > tc-1 || snakeY2 > tc-1) {
    player = "Green Wins!";
    DedSnek();
  }
//   if(snakeX2<0) {
//       snakeX2= tc-1;
//   }
//   if(snakeX2>tc-1) {
//       snakeX2= 0;
//   }
//   if(snakeY2<0) {
//       snakeY2= tc-1;
//   }
//   if(snakeY2>tc-1) {
//       snakeY2= 0;
//   }
  ctx.fillStyle="rgb(100,100,100)";
  ctx.fillRect(0,0,canv.width,canv.height);

  ctx.fillStyle=snake_color;
  for(var i=0;i<trail.length;i++) {
    ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
    if(trail[i].x==snakeX && trail[i].y==snakeY || trail[i].x==snakeX2 && trail[i].y==snakeY2) {
        if (tail > 1) {
            player = "Blue Wins!";
            DedSnek();
        }
    }

  }

  ctx.fillStyle='#3af'
  for(var i=0;i<trail2.length;i++) {
    ctx.fillRect(trail2[i].x*gs,trail2[i].y*gs,gs-2,gs-2);
    if(trail2[i].x==snakeX2 && trail2[i].y==snakeY2 || trail2[i].x==snakeX && trail2[i].y==snakeY) {
        if (tail2 > 1) {
            player = "Green Wins!";
            DedSnek();
        }
    }
  }

  trail.push({x:snakeX,y:snakeY});
  while(trail.length>tail) {
    trail.shift();
  }
  trail2.push({x:snakeX2,y:snakeY2});
  while(trail2.length>tail2) {
    trail2.shift();
  }

  if(fx==snakeX && fy==snakeY) {
    tail++;
    fx=Math.floor(Math.random()*tc);
    fy=Math.floor(Math.random()*tc);
  }
  if(fx==snakeX2 && fy==snakeY2) {
    tail2++;
    fx=Math.floor(Math.random()*tc);
    fy=Math.floor(Math.random()*tc);
  }
  ctx.fillStyle="red";
  ctx.fillRect(fx*gs,fy*gs,gs-2,gs-2);
  console.log('x: '+ fx);
  console.log('y: '+ fy);
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
  switch(evt.keyCode) {
      case KEYCODE_A:
          xv=-1;yv=0;
          break;
      case KEYCODE_W:
          xv=0;yv=-1;
          break;
      case KEYCODE_D:
          xv=1;yv=0;
          break;
      case KEYCODE_S:
          xv=0;yv=1;
          break;
      case KEYCODE_UP:
          xv2=-1;yv2=0;
          break;
      case KEYCODE_LEFT:
          xv2=0;yv2=-1;
          break;
      case KEYCODE_RIGHT:
          xv2=1;yv2=0;
          break;
      case KEYCODE_DOWN:
          xv2=0;yv2=1;
          break;
  }
}
function reload(){
  window.location.href ="index.html"
}
//go to play again or play again
function DedSnek(){
  window.location.href = "playAgain.html?player=" + player + "";
}