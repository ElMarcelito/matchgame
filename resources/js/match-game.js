var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

 function getRandomIntInclusive(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
 }

MatchGame.generateCardValues = function () {
  var numbers = [];
  for (var i = 1; i < 9; i++) {
  numbers.push(i);
  numbers.push(i);
  }


//  console.log("cardValues: " + cardValues);
//  console.log("cardValueIndex: " + cardValueIndex);
//  console.log("currentCard: " + currentCard);

var cards = [];

  while (numbers.length !== 0){
    var index = getRandomIntInclusive(0, numbers.length-1);
    var pick = numbers[index];
    cards.push(pick);
    numbers.splice(index, 1);
//    return cards;
}

console.log(cards);
};


/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
