var canvas = document.getElementById('board');
var ctx = canvas.getContext('2d');
document.addEventListener("keydown", keyPush);

var grid = [];
var BOARD_WIDTH = 50;
var BOARD_HEIGHT = 32;
var BLOCK_SIZE = 20;
var BOARD_SPACES = (BOARD_HEIGHT * BOARD_WIDTH);
var rand = Math.floor(Math.random() * 4);

var traceback = [];
var possibleDir = [];
var currentPlace = [];

var snake1X;
var boxY;
var alive = true;
var snake_color = 'rgb(200,30,100)';
var FRUIT_COLOR = '#FF9000';

var time  = 0;
var inter = setInterval(interv, 1000);


//////////////////////////////////////////////////////////////////////////////

//build the baseline grid
function buildGrid(){
    for(var y=0; y<BOARD_HEIGHT; y++){
      for(var x=0; x<BOARD_WIDTH; x++){
        grid[x][y] = 0;
      }
    }
}

//draw an individual square space on the canvas
function drawSquare(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, BLOCK_SIZE, BLOCK_SIZE);
}

//draw the board on the canvas
function drawBoard(){
  for(var y=0; y<BOARD_HEIGHT; y++){
    for(var x=0; x<BOARD_WIDTH; x++){
      if(grid[x][y] === 0){
        drawSquare(x*BLOCK_SIZE, y*BLOCK_SIZE, 'rgb(100,100,100)');
      }
      else if(grid[x][y] == 1){
        drawSquare(x*BLOCK_SIZE, y*BLOCK_SIZE, snake_color);
      }
    }
  }
}

//adds x and y coords to traceback array
function addToStack(x, y){
  traceback.push( {x: x, y: y} );
}

//generate the starting point
function generateFirstBlock(){
  var startX;
  var startY;

  startX = 4;
  startY = 16;

  grid[startX][startY] = 1;
}

var snake1X;
var snake1Y;
var snake2X;
var snake2Y;
var fruitX;
var fruitY;
var tail = 5;
var trail = [];

//snake velocity
xv = yv = 0;

//creates starting location for snake
function initializeSnake1Location() {
  snake1X = 4 * BLOCK_SIZE;
  snake1Y = 16 * BLOCK_SIZE;
}

//reference video: https://youtu.be/xGmXxpIj6vs
//move the current place of the avatar
//not yet done
function move(){
  checkMove();

  snake1X+=xv;
  snake1Y+=yv;
  drawSquare(snake1X, snake1Y, snake_color);

  ctx.fillStyle = snake_color;
  for(var i = 0; i < trail.length; i++){
    ctx.fillRect(trail[i].x * BOARD_WIDTH, 
    trail[i].y * BOARD_HEIGHT,
     BOARD_SPACES - 2, BOARD_SPACES - 2);
    if(trail[i].x == snake1X && trail[i].y == snake1Y) {
      tail = 5;
    }
  }
  trail.push({x: snake1X, y: snake1Y});
  while (trail.length > tail) {
    trail.shift();
  }

  //place fruit and make snek go big
  //not working
  // if(fruitX == snake1X && fruitY == snake1Y){
  //   tail++;
  //   fruitX = Math.floor(Math.random()*BOARD_SPACES);
  //   fruitY = Math.floor(Math.random()*BOARD_SPACES);
  // }
  // drawSquare(fruitX, fruitY, FRUIT_COLOR);
}

//check to see if a move is possible
//not yet done
function checkMove(){

}

/////////////////////////////////////////////////////////////////////////////////////////

var gameInterval = setInterval(move, 100);

//start the game
function play(){
  buildGrid();
  generateFirstBlock();
  initializeSnake1Location();
  gameInterval;
  
  // do{
    // move();
  // }while(alive);

  drawBoard();
}

function interv(){
  time+=1;
}

// player 2 will be using arrow keys to move
// var KEYCODE_LEFT = 37;
// var KEYCODE_UP = 38;
// var KEYCODE_RIGHT = 39;
// var KEYCODE_DOWN = 40;

var KEYCODE_W = 87;
var KEYCODE_A = 65;
var KEYCODE_S = 83;
var KEYCODE_D = 68;

//event handler for key being pressed
function keyPush(evt) {
  if(!evt){ var evt = window.event; }  //browser compatibility
  switch(evt.keyCode) {
      case KEYCODE_A:
          xv=-BLOCK_SIZE;yv=0;
          break;
      case KEYCODE_W:
          xv=0;yv=-BLOCK_SIZE;
          break;
      case KEYCODE_D:
          xv=BLOCK_SIZE;yv=0;
          break;
      case KEYCODE_S:
          xv=0;yv=BLOCK_SIZE;
          break;
  }
}
////////////////////////////////////////////////////////////////////////////////////
//initializes the grid
for(var i = 0; i<BOARD_WIDTH; i++){
  grid[i] = [];
  for(var j=0; j<BOARD_HEIGHT; j++){
    grid[i][j] = 1;
  }
}

play();
