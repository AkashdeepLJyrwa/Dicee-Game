// RandomNumber Generation Start

var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

// RandomNumber Generation Ends

// Player1 Dice Start

document.querySelector(".dice .img1").setAttribute("src","images/dice"+randomNumber1+".png");

// Player1 Dice Ends

// Player2 Dice

document.querySelector(".dice .img2").setAttribute("src","images/dice"+randomNumber2+".png");

// Player2 Dice Ends

// Winner Title Text Starts

var winner;

if(randomNumber1 > randomNumber2)
{
    winner = "🚩Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2)
{
    winner = "🚩Player 2 Wins!";
}
else
{
    winner = "Draw!"
}

document.querySelector("h1").innerHTML = winner;

// Winner Title Text Ends