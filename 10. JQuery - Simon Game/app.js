const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern =[];
let userChosenColour;
let started = false;
let level = 0;

// add a new rondom color to the game pattern
function nextSequence(){
  let randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  level += 1;
  $("#level-title").text("Level " + level);
}

// play sound when computer choose a color
// or user click a button
function playSound(color){
  switch (color){
    case "blue":
      const bAudio = new Audio("sounds/blue.mp3");
      bAudio.play();
      break;
    case "green":
      const gAudio = new Audio("sounds/green.mp3");      gAudio.play();
      break;
    case "red":
      const rAudio = new Audio("sounds/red.mp3");
      rAudio.play();
      break;
    case "yellow":
      const yAudio = new Audio("sounds/yellow.mp3");
      yAudio.play();
      break;
  }
}
// add event listener to buttons
$(".btn").click(function(){
  if (started){
    userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    // play effect, sound, and check ans
    animatePress(userChosenColour);
    playSound(userChosenColour);
    // check if the most recent click == the corresponding pattern in Gamepattern
    checkAns(userClickedPattern.length - 1);
  }
})

function animatePress(currentColour){
  $("." + currentColour).addClass("pressed");
  setTimeout(() => {
    $("." + currentColour).removeClass("pressed");
  }, 100);
}


  $(document).keydown(function(){
    if (!started){
      nextSequence();
      started = true;
    }
  })
// check answer after a user click a button
function checkAns(index){
  if (userClickedPattern[index] == gamePattern[index]){
    if (index + 1 == gamePattern.length){
      setTimeout(nextSequence, 1000);
      userClickedPattern = [];
    }
  }else{
    const gameover = new Audio("sounds/wrong.mp3");
    gameover.play();
    $("body").addClass("game-over");
    setTimeout(()=>{
      $("body").removeClass("game-over");
    }, 200);
    gameReset();
  }
  
}
// if game over, reset the variables
function gameReset(){
  gamePattern = [];
  level = 0;
  started = false;
  userClickedPattern = [];
  $("#level-title").text("GAME OVER. Press A Key to Restart");
}


