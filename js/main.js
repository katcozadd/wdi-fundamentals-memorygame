var cards = ["queen", "queen", "king", "king",];
var cardsInPlay = [];

cards[0] = 'cardOne';
cardsInPlay.push('cardOne');
console.log("User flipped queen");
cards[1] = 'cardTwo';
cardsInPlay.push('cardTwo');
console.log("User flipped king")

if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You've found a match!"); 
} else {
	alert("Sorry, try again.");
}