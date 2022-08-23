const grid = document.querySelector('.grid');
const scoreDisplay = document.querySelector('.score');
let score = 0;

const BLOCK_WIDTH = 100;
const BLOCK_HEIGHT = 20;
const BOARD_WIDTH = 560;
const BOARD_HEIGHT = 300;
const BALL_SPEED = 2;
const BALL_DIAMETER = 20;
const USER_SPEED = 40;
const USER_START = [230,10];
let currentPosition = USER_START;
const BALL_START = [230,40];
let ballCurrentPosition = BALL_START;

let xDirection = BALL_SPEED;
let yDirection = BALL_SPEED;
let timerId;

// create block
class Block{
  constructor(x, y){
    this.bottomLeft = [x, y]
    this.bottomRight = [x + BLOCK_WIDTH, y]
    this.topLeft = [x, y + BLOCK_HEIGHT]
    this.topRight = [x + BLOCK_WIDTH, y + BLOCK_HEIGHT]
  }
}
// all blocks
const blocks = [
  new Block(10,270),
  new Block(120,270),
  new Block(230,270),
  new Block(340,270),
  new Block(450,270),
  new Block(10,240),
  new Block(120,240),
  new Block(230,240),
  new Block(340,240),
  new Block(450,240),
  new Block(10,210),
  new Block(120,210),
  new Block(230,210),
  new Block(340,210),
  new Block(450,210),
  
]
// draw all blocks
function addBlock(){
  for (let i = 0; i < blocks.length; i++ ){
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + 'px';
    block.style.bottom= blocks[i].bottomLeft[1] + 'px';
    grid.appendChild(block); 
  }
}
addBlock();

// add user 
const user = document.createElement("div");
user.classList.add('user');
user.style.left = currentPosition[0] +'px';
user.style.bottom = currentPosition[1] +'px';
grid.appendChild(user);

// draw user function
function drawUser(){
  user.style.left = currentPosition[0] +'px';
}

// draw the ball
function drawBall(){
  ball.style.left = ballCurrentPosition[0] +'px';
  ball.style.bottom = ballCurrentPosition[1] +'px';
}

// move user 
function moveUser(e){
  switch (e.key){
    case 'ArrowLeft':
      if (currentPosition[0] - USER_SPEED <= 0){
        currentPosition[0] = 0;
      }else{
        currentPosition[0] -= USER_SPEED;
      }
      drawUser();
      break;
    case 'ArrowRight':
        if (currentPosition[0] + USER_SPEED >= BOARD_WIDTH - BLOCK_WIDTH ){
          currentPosition[0] = BOARD_WIDTH - BLOCK_WIDTH;
        }else{
          currentPosition[0] += USER_SPEED;
        }
        drawUser();
        break;
  }
}

document.addEventListener('keydown', moveUser);

// create the ball

const ball = document.createElement('div');
ball.classList.add('ball');
ball.style.left = ballCurrentPosition[0] +'px';
ball.style.bottom = ballCurrentPosition[1] +'px';
grid.appendChild(ball);

// move the ball
function moveBall(){
  ballCurrentPosition[0] += xDirection;
  ballCurrentPosition[1] += yDirection;
  drawBall();
  checkCollisions()
}
timerId = setInterval(moveBall, 20);

// check for collisions
function checkCollisions(){
  // check block collisions
  for (let i = 0; i < blocks.length; i++ ){
    if (
      ( // touching the bottom border
        ballCurrentPosition[0] > blocks[i].bottomLeft[0] && 
        ballCurrentPosition[0] < blocks[i].bottomRight[0] && 
        ballCurrentPosition[1] > blocks[i].bottomLeft[1] - BLOCK_HEIGHT && 
        ballCurrentPosition[1] < blocks[i].topLeft[1] - BLOCK_HEIGHT
      ) ||
      ( // touching the left border of block
        ballCurrentPosition[0] + BALL_DIAMETER > blocks[i].bottomLeft[0] && 
        ballCurrentPosition[0] + BALL_DIAMETER < blocks[i].bottomRight[0] && 
        ballCurrentPosition[1] - BALL_DIAMETER / 2  > blocks[i].bottomLeft[1] - BLOCK_HEIGHT && 
        ballCurrentPosition[1] - BALL_DIAMETER / 2  < blocks[i].topLeft[1] - BLOCK_HEIGHT
      ) ||
      (
        ballCurrentPosition[0] > blocks[i].bottomLeft[0] && 
        ballCurrentPosition[0]  < blocks[i].bottomRight[0] && 
        ballCurrentPosition[1] - BALL_DIAMETER / 2  > blocks[i].bottomLeft[1]  && 
        ballCurrentPosition[1] - BALL_DIAMETER / 2 < blocks[i].topLeft[1] 
      ) ||
      ( // touching the top border
        ballCurrentPosition[0] > blocks[i].bottomLeft[0] && 
        ballCurrentPosition[0] < blocks[i].bottomRight[0] && 
        ballCurrentPosition[1] - BALL_DIAMETER > blocks[i].bottomLeft[1]  && 
        ballCurrentPosition[1] - BALL_DIAMETER < blocks[i].topLeft[1] 
      ) ){
        changeDirection();
        const allBlocks = Array.from(document.querySelectorAll('.block'));
        allBlocks[i].classList.remove('block');
        
        blocks.splice(i,1);
        score++;
        scoreDisplay.textContent = score;
  
        // check for win
        if (blocks.length === 0){
          scoreDisplay.textContent += ' YOU WIN!!!';
          document.removeEventListener('keydown', 
          moveUser);
          clearInterval(timerId)
        }
    }
  }
  // check user collisions
  if ( 
    ballCurrentPosition[0] > currentPosition[0] && 
    ballCurrentPosition[0] < currentPosition[0] + BLOCK_WIDTH && 
    ballCurrentPosition[1] > currentPosition[1]  && 
    ballCurrentPosition[1] < currentPosition[1] + BLOCK_HEIGHT ){
      changeDirection();
  }

  // check wall collisions
  if (ballCurrentPosition[0] >= BOARD_WIDTH - BALL_DIAMETER || ballCurrentPosition[1] >= BOARD_HEIGHT - BALL_DIAMETER || ballCurrentPosition[0] <= 0){
    changeDirection();
  }
  // check for GAME OVER
  if (ballCurrentPosition[1] <= 0){
    clearInterval(timerId)
    scoreDisplay.textContent += ' YOU LOSE';
    document.removeEventListener('keydown', moveUser);
  }

}

function changeDirection(){
  if (xDirection== BALL_SPEED  && yDirection == BALL_SPEED){
    yDirection = - BALL_SPEED ;
    return;
  }
  if (xDirection == BALL_SPEED  && yDirection == - BALL_SPEED ){
    xDirection = - BALL_SPEED ;
    return;
  }
  if (xDirection == - BALL_SPEED  && yDirection == -BALL_SPEED ){
    yDirection = BALL_SPEED ;
    return;
  }
  if (xDirection == - BALL_SPEED  && yDirection == 2){
    xDirection = BALL_SPEED ;
    return;
  }
}