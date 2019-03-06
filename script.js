var canvas = document.getElementById('board');
var ctx = canvas.getContext('2d');

var grid = [];
var BOARD_WIDTH = 231;
var BOARD_HEIGHT = 231;
var BLOCK_SIZE = 20;
var BOARD_SPACES = (BOARD_HEIGHT * BOARD_WIDTH);
var a = '';

var snake_color = 'rgb(200,30,100)';

var START_POINT = {
    x = 0,
    y = 0
};

function buildGrid(){
    for(var y=0; y<MAZE_HEIGHT; y++){
      for(var x=0; x<MAZE_WIDTH; x++){
        grid[x][y] = 0;
      }
    }
  }

  function drawSquare(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, BLOCK_SIZE, BLOCK_SIZE);
  }
  
  function drawMaze(){
    for(var y=0; y<MAZE_HEIGHT; y++){
      for(var x=0; x<MAZE_WIDTH; x++){
        if(grid[x][y] === 0){
          drawSquare(x*BLOCK_SIZE, y*BLOCK_SIZE, 'rgb(100,100,100)');
        } 
      }
    }
    drawStartSquare();
  }

  function generateFirstBlock(){
    do{
      newX = (Math.floor(((Math.random()*((MAZE_WIDTH-1)/2))))*2)+1;
      newY = (Math.floor(((Math.random()*((MAZE_HEIGHT-1)/2))))*2)+1;
      
      temp = {
        x: newX,
        y: newY
      };
    }while(!isValid(temp.x, temp.y));
  
    currentPlace = [JSON.parse(JSON.stringify(temp))];
  
    visited.push(temp);
    traceback.push(temp);
  
    startPoint = {
      x: newX,
      y: newY
    };
  
  
  };