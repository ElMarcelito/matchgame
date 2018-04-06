$(document).ready(function() {
    MatchGame.generateCardValues();
    MatchGame.renderCards(cardValues, $game);
});

var MatchGame = {};
var cardValues = [];
var $game = $("#game");

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

//var cardValues = [];

  while (numbers.length !== 0){
    var index = getRandomIntInclusive(0, numbers.length-1);
    var pick = numbers[index];
    cardValues.push(pick);
    numbers.splice(index, 1);
}
return cardValues;
//console.log(cardValues);
};


/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

  $game.empty();

  var cardColor = ["hsl(25, 85%, 65%)", "hsl(55, 85%, 65%)", "hsl(90, 85%, 65%)", "hsl(160, 85%, 65%)", "hsl(220, 85%, 65%)", "hsl(265, 85%, 65%)", "hsl(310, 85%, 65%)", "hsl(360, 85%, 65%)"]


  var card = [];

  for (var i = 0; i < cardValues.length; i++) {
    card[i] = {
          data: cardValues[i],
          html: $('<div class="card col-3">' + cardValues[i] + '</div>'),
          flipped: false,
          color: cardColor[cardValues[i]-1]
    }
    $game.append(card[i].html);
    }
//    console.log(cardValues);
//    console.log($game);
//    console.log(card);
  };



/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
