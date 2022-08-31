const grid = document.querySelector(".grid");
const result = document.querySelector(".result");
const invaders =[
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
  30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
];
const WIDTH = 15;
let currentShooterIndex = 202
let direction = 1;
let invaderID = null;
const invadersRemoved = [];

for (let i =0; i< 255; i++){
  const square = document.createElement("div");
  grid.appendChild(square);
}

const squares = document.querySelectorAll(".grid div");

function draw(){
  for (let i =0; i< invaders.length; i++){
    if (!invadersRemoved.includes(i)){
      squares[invaders[i]].classList.add("invader");
    }
  }
}
draw();
function remove(){
  for (let i =0; i< invaders.length; i++){
    squares[invaders[i]].classList.remove("invader")
  }
}

squares[currentShooterIndex].classList.add("shooter");

function moveShooter(e){
  squares[currentShooterIndex].classList.remove("shooter");
  switch (e.key){
    case 'ArrowLeft':
      if (currentShooterIndex % WIDTH !== 0)
        currentShooterIndex -= 1;
      break;
    case 'ArrowRight':
      if (currentShooterIndex % WIDTH < WIDTH - 1)
        currentShooterIndex += 1;
        break;
  }
  squares[currentShooterIndex].classList.add("shooter");
}

document.addEventListener('keydown', moveShooter);

function moveInvaders(){
  const leftEdge = invaders[0] % WIDTH === 0;
  const rightEdge = invaders[invaders.length - 1] % WIDTH === WIDTH - 1;

  remove();
  if (rightEdge && direction === 1 ){
    for (let i =0; i< invaders.length; i++){
      invaders[i] += WIDTH + 1;
    }
    direction = -1;
  }
  if (leftEdge && direction === -1 ){
    for (let i =0; i< invaders.length; i++){
      invaders[i] += WIDTH - 1;
    }
    direction = 1;
  }
  for (let i =0; i< invaders.length; i++){
    invaders[i] += direction;
  }

  
  draw();
  // check for Lose;
  if (squares[currentShooterIndex].classList.contains( "invader", "shooter")){
    result.innerHTML = "GAME OVER";
    clearInterval(invaderID);
  }
  invaders.forEach( index => {
    if (index >= squares.length - WIDTH){
      result.innerHTML = "GAME OVER";
      clearInterval(invaderID);
    }
  })
  // check for win
  if (invadersRemoved.length === invaders.length){
    result.innerHTML = "YOU WIN!";
      clearInterval(invaderID);
  }

}

invaderID = setInterval(moveInvaders, 300);

function shoot(e){
  if (e.key == 'ArrowUp'){
    let laserId;
    let laserPosition = currentShooterIndex;
    squares[laserPosition].classList.add('laser');

    function moveLaser(){
      
      squares[laserPosition].classList.remove('laser');
      laserPosition -= WIDTH;
      if (laserPosition < 0){
        clearInterval(laserId);
        return;
      }
      squares[laserPosition].classList.add('laser');

      if (squares[laserPosition].classList.contains("invader")){
        squares[laserPosition].classList.remove("invader");
        squares[laserPosition].classList.remove("laser");
        squares[laserPosition].classList.add("boom");
        setTimeout(()=> {
          squares[laserPosition].classList.remove("boom");
        }, 300);
        clearInterval(laserId);

        const invaderRemoved = invaders.indexOf(laserPosition);
        invadersRemoved.push(invaderRemoved);
      }
    }
    laserId = setInterval(moveLaser, 100);
  }
  
}
document.addEventListener("keyup", shoot)