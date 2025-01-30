
// detecting button press
var numberofdrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofdrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttoninnerhtml = this.innerHTML;
    makeSound(buttoninnerhtml);
    buttonAnimation(buttoninnerhtml);
    
  });
}
//detecting keyboard press
 document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    
});

function makeSound(Key){

    switch (Key) {
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
  
        case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
  
        case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
  
        case "d":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
  
        case "j":
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
          break;
  
        case "k":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;
  
        case "l":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
  
        default:
          console.log(buttoninnerhtml);
      }
}

function buttonAnimation(currentkey){
    var activeButton = document.querySelector("."+ currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
        
    }, 100); //second parameter

}