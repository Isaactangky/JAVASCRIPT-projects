const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const time = document.getElementById("time-left");
const score = document.getElementById("score");
const startBtn = document.getElementById("start");

let result;
let molePos = null;
let currentTime;
let countDownTimer = null;
let timerId = null;

// randomly choose a square and add "mole" to its class list
function randomSquare(){
  squares.forEach(sq => {
    sq.classList.remove("mole");
  })
  let randSq = squares[ Math.floor(Math.random() * 9 ) ]; // select a random square
  randSq.classList.add("mole");
  molePos = randSq.id;
}

// move the mole 
function moveMole(){
  timerId = setInterval(randomSquare, 500)
}

// set up a timer to count down
function countDown(){
  currentTime--;
  time.textContent = currentTime;

  if (currentTime == 0){
    clearInterval(countDownTimer);
    clearInterval(timerId);
    molePos = -1;
    alert("GAME OVER! Your final score is " + result + "!");
  }
}

// if sq.id == mole.id, rise score and reset mole position
squares.forEach(sq => {
  sq.addEventListener("mousedown", () => {
    if (sq.id == molePos){
      result++;
      score.textContent = result;
      molePos = null;
    }
  })
} )

// start button to reset variables and 
// start the game
startBtn.addEventListener("click", ()=>{
  clearInterval(countDownTimer);
  clearInterval(timerId);
  currentTime = 60;
  time.textContent = currentTime;
  result = 0;
  score.textContent = result;

  countDownTimer = setInterval(countDown, 1000);
  moveMole()
})
