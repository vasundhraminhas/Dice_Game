var diceNumber = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + diceNumber + ".png";
var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);



var diceNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage2 = "dice" + diceNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(diceNumber > diceNumber2)
{
  document.querySelector("h1").innerHTML = "&#128681 Player 1 Wins!";
}
else if(diceNumber2 > diceNumber)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins!	&#128681"
}
else
{
  document.querySelector("h1").innerHTML = "Draw!";
}
