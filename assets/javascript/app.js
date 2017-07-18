var isPaused = false;
var questionAnswered = false;

var skippedGuesses = 0;
var correctGuesses = 0;
var wrongGuesses = 0;

var count = 30;
var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
  {
  if(!isPaused) {
    count--;
    if (count <= 0)
      {
       clearInterval(counter);
       //counter ended, send to results div
        seeResults();
        return;
      }
    }
  document.getElementById("display").innerHTML = count; 
}

window.onload = function() {
  $("body").css("overflow", "hidden");
  timer();
  isPaused = false;
}

function correctAnswer(num){
questionAnswered = true;
correctGuesses++;
console.log("correctGuess = " + correctGuesses);
isPaused = true;
clearInterval(counter);
$(".responseRight").eq(num).removeClass("hidden");
console.log("count = " + count);
}

function wrongAnswer(num){
questionAnswered = true;
wrongGuesses++;  
console.log("wrongGuess = " + wrongGuesses);
isPaused = true;
clearInterval(counter);
$(".responseWrong").eq(num).removeClass("hidden");
}

function nextQuestion(num){
 if (!questionAnswered) {
  skippedGuesses++;
  console.log("skippedGuess = " + skippedGuesses);
  $(".qCards").eq(num).addClass("hidden");
  //counter = setInterval(timer, 1000);
  counter;
  isPaused = false;
  questionAnswered = false;
  timer();
  }
  else {
  $(".qCards").eq(num).addClass("hidden");
  //counter = setInterval(timer, 1000);
  counter;
  isPaused = false;
  timer();
  }
}

function tryAgain(){
location.reload();
}

function seeResults(){
$(".qCards").eq(0).addClass("hidden");
$(".qCards").eq(1).addClass("hidden");
$(".qCards").eq(2).addClass("hidden");
$(".qCards").eq(3).addClass("hidden");
$(".qCards").eq(4).addClass("hidden");
$("#correctGuesses").text(correctGuesses);
$("#wrongGuesses").text(wrongGuesses);
$("#skippedGuesses").text(skippedGuesses);
}