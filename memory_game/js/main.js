
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
//create cardOne variable
var cardOne = cards [0];
cardsInPlay.push ('cardOne');
//Display card that was flipped
console.log("User flipped Queen");
//Create cardTwo variable
var cardTwo = cards [2];
cardsInPlay.push ('cardTwo');
//display card flipped
console.log("User flipped King")

if (cardsInPlay.length === 2 && cardsInPlay[1]===cardsInPlay[0]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again")
}