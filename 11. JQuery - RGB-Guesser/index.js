const scoreEl = $(".score");
let curScore = 100;

function renderColor() {
  const red = Math.floor(Math.random() * 266);
  const green = Math.floor(Math.random() * 266);
  const blue = Math.floor(Math.random() * 266);
  return `rgb( ${red}, ${green}, ${blue} )`;
}

function checkAnswer(e) {
  const target = e.target;
  if ($(target).hasClass("answer")) {
    curScore += 20;
    target.classList.remove("answer");
    $(".rgb-display").addClass("correct");
    setTimeout(() => {
      $(".rgb-display").removeClass("correct");
    }, 100);
    setup();
  } else {
    curScore -= 10;
    $(".rgb-display").addClass("wrong");
    setTimeout(() => {
      $(".rgb-display").removeClass("wrong");
    }, 100);
  }

  scoreEl.text(curScore);
  if (curScore <= 0) {
    scoreEl.text("GAME OVER");
    $(".option").off("click", checkAnswer);
  } else if (curScore >= 200) {
    scoreEl.text("YOU ARE AMAZING!!");
    $(".option").off("click", checkAnswer);
  }
}

function setup() {
  // asign random color to all the boards
  $(".option").css("background-color", renderColor);
  // choose a answer board
  const answer = $(".option")[Math.floor(Math.random() * 6)];
  $(answer).addClass("answer");
  //answer.classList.add("answer");
  // set color of answer board
  const answerColor = renderColor();
  $(".answer").css("background-color", answerColor);
  $(".rgb-display").text(answerColor.toUpperCase());
}
setup();
$(".option").on("click", checkAnswer);
