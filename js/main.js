//Create array for cards
var cards = ['queen', 'queen', 'king', 'king'];
//Create empty array that will contain cards in play
var cardsInPlay = [];

//Select game board
var gameBoard = document.getElementById('game-board');

function createBoard() {
  for (var i=0; i<cards.length; i++) {
  	var cardElement = document.createElement('div');
  	
  	//Add card class to div once created
  	cardElement.className = 'card';
  	//assign the data-card attribute to individual cards
    cardElement.setAttribute('data-card', cards[i]);

    cardElement.addEventListener('click', isTwoCards);

    //add the cards to the parent board
  	gameBoard.appendChild(cardElement);
  	gameBoard.appendChild(cardElement);
  }
}

createBoard();

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));

	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='king.png'>";
	} else {
		this.innerHTML = "<img src='queen.png'>";
	}

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}

}

function isMatch(cards) {
	if (cards[0] === cards[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}


/*if (cardOne === cardTwo) {
	alert("You found a match!")
  } else if (cardThree === cardFour) {
  	alert("You found a match!")
  } else {
	alert("Sorry, try again.")
  }
}*/

