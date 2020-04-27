



var randomNumber1 = Math.floor(Math.random() * 6 + 1);// number btw 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png";//string = dice1-6.png

var randomDiceSource = "images/" + randomDiceImage;//folder string = imgages/dice1-6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceSource);


var randomNumber2 = Math.floor(Math.random() * 6 + 1);//random number between 1-6

var randomDiceSource2 = "images/dice" + randomNumber2 + ".png"; // == images/dice1-6.png

var image2 = document.querySelectorAll("img")[1];//seelcts second image array

image2.setAttribute("src", randomDiceSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
}

else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}

else {
  document.querySelector("h1").innerHTML = "Draw! Roll again!";
}
