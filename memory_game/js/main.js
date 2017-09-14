
var cards = [
{
	rank: "Queen",
	suit: "Hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "Queen",
	suit: "Diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "King",
	suit: "Hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "King",
	suit: "Diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];


var checkForMatch = function() {
	
	if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
  } else {
      alert("Sorry, try again.");
  }
};

var flipCard = function() {
var cardId = this.getAttribute('data-id');
this.setAttribute('src', cards[cardId].cardImage);
console.log("User flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
checkForMatch();
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
};


var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		var board = document.getElementById('game-board');
		board.appendChild(cardElement);
	}
};

var resetBoard = function() {
	if (cardsInPlay === 2) {
   	document.getElementById("game-board").reset();
	var resetButton = document.getElementById('reset');
	resetButton.addEventListener('click', resetBoard);
}
};

createBoard();

