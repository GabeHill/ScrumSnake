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
//grid size and tile count
gs=tc=25;
//fruit x and fruit y
fx=fy=15;
//x velocity and y velocity
xv=yv=0;
trail=[];
tail = 1;
function game() {
  snakeX+=xv;
  snakeY+=yv;
  if(snakeX<0) {
      DedSnek();
  }
  if(snakeX>tc-1) {
    DedSnek();
  }
  if(snakeY<0) {
    DedSnek();
  }
  if(snakeY>tc-1) {
    DedSnek();
  }
  ctx.fillStyle="rgb(100,100,100)";
  ctx.fillRect(0,0,canv.width,canv.height);

  ctx.fillStyle=snake_color;


  for(var i=0;i<trail.length;i++) {
      ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
      if(trail[i].x==snakeX && trail[i].y==snakeY) {
        if(tail > 1){
          DedSnek();
        }
        
      }
  }

  trail.push({x:snakeX,y:snakeY});
  while(trail.length>tail) {
  trail.shift();
  }

  if(fx==snakeX && fy==snakeY) {
      tail++;
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
  }
}
function reload(){
  window.location.href ="index.html"
}
//go to play again or play again
function DedSnek(){
  window.location.href = "playAgain.html";
}