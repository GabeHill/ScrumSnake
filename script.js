var canvas = document.getElementById('board');
var ctx = canvas.getContext('2d');

var grid = [];
var BOARD_WIDTH = 50;
var BOARD_HEIGHT = 32;
var BLOCK_SIZE = 20;
var BOARD_SPACES = (BOARD_HEIGHT * BOARD_WIDTH);

var traceback = [];
var possibleDir = [];
var currentPlace = [];

var alive = true;
var snake_color = 'rgb(200,30,100)';

var time  = 0;
var inter = setInterval(interv, 1000);

var START_POINT = {
    x : 0,
    y : 0
};

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
    }
  }
}

//generate the starting point
//Not yet done
function generateFirstBlock(){

}

//move the current place of the avatar
//not yet done
function move(){
  checkMove();
  
  
}

//check to see if a move is possible
//not yet done
function checkMove(){

}

/////////////////////////////////////////////////////////////////////////////////////////

//start the game
function play(){
  buildGrid();
  generateFirstBlock();
  
  // do{
  //   move();
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

//event handler for key being pressed
//moves player in direction of arrow keys while held down
function handleKeyDown(evt) {
  if(!evt){ var evt = window.event; }  //browser compatibility
    temp = {
      x: boxX,
      y: boxY
    };
  switch(evt.keyCode) {
    case KEYCODE_LEFT:  
      if(grid[(temp.x/BLOCK_SIZE) - 1][temp.y/BLOCK_SIZE] === 0 ){
        boxX -= BLOCK_SIZE;
      }
      break;
    case KEYCODE_RIGHT: 
      if(grid[(temp.x/BLOCK_SIZE) + 1][temp.y/BLOCK_SIZE] === 0){
        boxX +=BLOCK_SIZE;
      }
      break;
    case KEYCODE_UP: 
      if(grid[temp.x/BLOCK_SIZE][(temp.y/BLOCK_SIZE) - 1] === 0){
        boxY -=BLOCK_SIZE;
      }
      break;
    case KEYCODE_DOWN: 
      if(grid[temp.x/BLOCK_SIZE][(temp.y/BLOCK_SIZE) + 1] === 0){
        boxY +=BLOCK_SIZE;
      }
      break;
    default:
  }
  console.log("End: " + endPoint.x, endPoint.y);
  if(boxX/BLOCK_SIZE === endPoint.x && boxY/BLOCK_SIZE === endPoint.y){
    celbr();
  }
}
 
//event handler for a key being released
//currently breaks the previous event handler. Will need revision
function handleKeyUp(evt) {
  if(!evt){ var evt = window.event; }  //browser compatibility
  switch(evt.keyCode) {
    case KEYCODE_LEFT:  console.log(evt.keyCode+" up"); break;
    case KEYCODE_RIGHT:   console.log(evt.keyCode+" up"); break;
    case KEYCODE_UP:    console.log(evt.keyCode+" up"); break;
    case KEYCODE_DOWN:  console.log(evt.keyCode+" up"); break;
  }

  ctx.clearRect(0,0,500,500);
  drawBoard();
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
