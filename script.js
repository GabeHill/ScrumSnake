var canvas = document.getElementById('board');
var ctx = canvas.getContext('2d');

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

function initializeSnake1Location() {
  snake1X = 4 * BLOCK_SIZE;
  snake1Y = 16 * BLOCK_SIZE;
}

//move the current place of the avatar
//not yet done
function move(){
  checkMove();

  var gridX;
  var gridY;
  drawSquare(snake1X, snake1Y, snake_color);
  
  if(leftkey){
    snake1X -= BLOCK_SIZE;
    gridX = snake1X / BLOCK_SIZE;
    gridY = snake1Y / BLOCK_SIZE;
    if(grid[gridX][gridY] == 0){
      snake1X -= BLOCK_SIZE / 25;
    }
  }
  if(rightkey){
    snake1X += BLOCK_SIZE;
    gridX = snake1X / BLOCK_SIZE;
    gridY = snake1Y / BLOCK_SIZE;
    if(grid[gridX][gridY] == 0){
      snake1X += BLOCK_SIZE / 25;
    }
  }
  if(upkey){
    snake1Y -= BLOCK_SIZE;
    gridX = snake1X / BLOCK_SIZE;
    gridY = snake1Y / BLOCK_SIZE;
    if(grid[gridX][gridY] == 0){
      snake1Y -= BLOCK_SIZE / 25;
    }
  }
  if(downkey){
    snake1Y += BLOCK_SIZE;
    gridX = snake1X / BLOCK_SIZE;
    gridY = snake1Y / BLOCK_SIZE;
    if(grid[gridX][gridY] == 0){
      snake1Y += BLOCK_SIZE / 25;
    }
  }
  drawSquare(snake1X, snake1Y, snake_color);
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

var KEYCODE_LEFT = 37;
var KEYCODE_UP = 38;
var KEYCODE_RIGHT = 39;
var KEYCODE_DOWN = 40;

var leftkey = false;
var rightkey = false;
var upkey = false;
var downkey = false;

//event handler for key being pressed
//moves player in direction of arrow keys while held down
function handleKeyDown(evt) {
  if(!evt){ var evt = window.event; }  //browser compatibility
  
  switch (evt.keyCode) {
    case KEYCODE_LEFT:
      leftkey = true;
      return false;
    case KEYCODE_RIGHT:
      rightkey = true;
      return false;
    case KEYCODE_UP:
      upkey = true;
      return false;
    case KEYCODE_DOWN:
      downkey = true;
      return false;
    }
  }
 
//event handler for a key being released
//currently breaks the previous event handler. Will need revision
function handleKeyUp(evt) {
  if(!evt){ var evt = window.event; }  //browser compatibility
  switch(evt.keyCode) {
    case KEYCODE_LEFT:
      leftkey = false;
      break;
    case KEYCODE_RIGHT:
      rightkey = false;
      break;
    case KEYCODE_UP:
      upkey = false;
      break;
    case KEYCODE_DOWN:
      downkey = false;
      break;
  }
}

document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;

////////////////////////////////////////////////////////////////////////////////////
//initializes the grid
for(var i = 0; i<BOARD_WIDTH; i++){
  grid[i] = [];
  for(var j=0; j<BOARD_HEIGHT; j++){
    grid[i][j] = 1;
  }
}

play();
