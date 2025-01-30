
var buttonColours = ["red", "blue", "green" , "yellow"]; 
var gamePattern= [];
var userClickedPattern =[];

var started = false; 

var level = 0;


$(document).keypress(function() {
   if (!started) {
 
     $("#level-title").text("Level " + level);
     nextSequnence();
     started = true;
   }
 });

$(".btn").click(function () {
   var userChosenColour = $(this).attr("id");
   userClickedPattern.push(userChosenColour);

   playSound(userChosenColour);
   animatepress(userChosenColour);
   checkAnswer(userChosenColour);
});

function nextSequnence() {
   userClickedPattern = [];
   level++;

   $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() *4);
   
    var randomChosenColour = buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);


   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColour);

}
function playSound(name) {
   var audio = new Audio("sounds/" + name + ".mp3");
   audio.play();
   
}

function animatepress(currentcolor) {
   //add
   $("#"+ currentcolor).addClass("pressed");
 //remove 

  setTimeout(function () {
    $("#" + currentcolor).removeClass("pressed");
  }, 100);
  checkAnswer(userClickedPattern.length -1);

} 
  
function checkAnswer(currentLevel) {

   if (gamePattern[currentLevel] === userClickedPattern[currentLevel] ) {
      console.log("sucsess");
      if (userClickedPattern.length === gamePattern.length) {
         
         setTimeout(function () {
            nextSequnence();

         }, 1000);
      }



   }else{
      console.log("wrong");

      playSound("wrong");

      $("body").addClass("game-over");
      setTimeout(function () {
         $("body").removeClass("game-over");

      },200);

      $("#level-title").text("Game Over, Press Any Key to Restart");
      startOver();
   }
   
} 
function startOver(){
level = 0;
gamePattern = [];
started =false;
}

