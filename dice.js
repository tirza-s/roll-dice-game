
//first dice 
// 1 - 6
let randomNumber1 = Math.floor(Math.random()*6) + 1; 

// string .png - dice6.png
let randomDiceImage = "images/dice" + randomNumber1 + ".png";

// images/dice1.png - dice6.png
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

//second dice
let randomNumber2 = Math.floor(Math.random()*6) + 1;

// let randomDiceImage2 = 
let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll ("img")[1].setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = "🏆 Player 1 wins";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h2").innerHTML = "🏆 Player 2 wins";
}else {
    document.querySelector("h2").innerHTML = "Draw !";
}