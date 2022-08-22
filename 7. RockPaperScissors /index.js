// Doc elements
const playerPtsEl = document.getElementById("player-pts")
const compPtsEl = document.getElementById("comp-pts")  
const playerRes = document.getElementById("player")
const computerRes = document.getElementById("computer")
const btn = document.querySelectorAll("button")
// Variables
const RPC = ["Rock", "Paper", "Scissor"];
let playerPts = 0;
let compPts = 0;
let playerChoice = null;

function render(player){
  
  const computer = Math.floor(Math.random() * 3);
  playerRes.innerText = `Player: ${RPC[player]}`
  computerRes.innerText = `Computer: ${RPC[computer]}`
  if (computer === player) ;
  else if (computer === 0 ){
    if (player === 1 ) playerPts += 1;
    else compPts += 1;
  }
  else if (computer === 1 ){
    if (player === 2 ) playerPts += 1;
    else compPts += 1;
  }else{
    if (player === 0 ) playerPts += 1;
  else compPts += 1;
  } 
  playerPtsEl.innerText = `Player: ${playerPts}`
  compPtsEl.innerText = `Computer: ${compPts}`
}
btn.forEach(button => button.addEventListener("click", (e) => {
  playerChoice = parseInt(e.target.id);
  console.log(playerChoice);
  render(playerChoice);
}))
/*
for (let i =0; i <3; i++){
  btn[i].addEventListener("click", function(){
    
  } )
}
*/




