const score = $(".score")

function setup(){
  // asign random color to all the boards
  $(".option").css("background-color", renderColor);
  // choose a answer board
  const answer = $(".option")[Math.floor(Math.random()*6)];
  $(answer).addClass("answer")
  //answer.classList.add("answer");
  // set color of answe board
  const answerColor = renderColor();
  $(".answer").css("background-color", answerColor);
  $(".rgb-display").text(answerColor.toUpperCase())
}

function renderColor(){
  const red = Math.floor(Math.random() * 266);
  const green = Math.floor(Math.random() * 266);
  const blue = Math.floor(Math.random() * 266);
  const rgb = `rgb( ${red}, ${green}, ${blue} )`;
  return rgb;
}

function checkAnswer(e){
  let newScore = parseInt(score.text());
  const target = e.target;
  if ($(target).hasClass("answer")){
    newScore += 20;
    target.classList.remove("answer");
    $(".rgb-display").addClass("correct");
    setTimeout(()=>{
      $(".rgb-display").removeClass("correct");
    }, 100);
    setup();
  }else{
    $(".rgb-display").addClass("wrong");
    setTimeout(()=>{
      $(".rgb-display").removeClass("wrong");
    }, 100);
    newScore -= 10;
  }
  score.text(newScore);
  if (newScore <= 0){
    score.text("GAME OVER");
    $(".option").off("click", checkAnswer);
  }else if( newScore >= 200){
    score.text("YOU ARE AMAZING!!");
    $(".option").off("click", checkAnswer);
  }
}
setup();
$(".option").on("click", checkAnswer);