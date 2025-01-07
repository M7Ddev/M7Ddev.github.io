var randomNumber1 =Math.floor( Math.random()* 6)+1 ;//1-6
 
var randomdiceimage = "dice" + randomNumber1 + ".png"; //dice 1 - dice6 
var randomsourceimage = "images/" + randomdiceimage; //images   dice1-dice6

var image1 =document.querySelectorAll("img")[0]; //for first one 
image1.setAttribute("src" , randomsourceimage);


//for dice 2
var randomNumber2 =Math.floor( Math.random()* 6)+1 ;//1-6

var randomdiceimage2 = "dice" + randomNumber2 + ".png"; //dice 1 - dice6 
var randomsourceimage2 = "images/" + randomdiceimage2; //images   dice1-dice6

document.querySelectorAll("img")[1].setAttribute("src", randomsourceimage2);



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player 1 wins!";

}else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}