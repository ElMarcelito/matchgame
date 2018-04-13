$(document).ready(function() {
    var $game = $("#game");
    MatchGame.generateCardValues();
    MatchGame.renderCards(cardValues, $game);
    $('.btn').click(function() {
      location.reload();
    });
});

var MatchGame = {};
var cardValues = [];

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

  while (numbers.length !== 0){
    var index = getRandomIntInclusive(0, numbers.length-1);
    var pick = numbers[index];
    cardValues.push(pick);
    numbers.splice(index, 1);
}
return cardValues;
};


/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

  var colors = [
    'hsl(25, 85%, 65%)',
    'hsl(55, 85%, 65%)',
    'hsl(90, 85%, 65%)',
    'hsl(160, 85%, 65%)',
    'hsl(220, 85%, 65%)',
    'hsl(265, 85%, 65%)',
    'hsl(310, 85%, 65%)',
    'hsl(360, 85%, 65%)'];

    $game.empty();
    $game.data('flippedCards', []); // creating a data attribute in the $game object that specifies flippedCards as an (empty) array
    $game.data('scoredCards', []); //creating an array for scored cards to track when game is over.

    for (var valueIndex = 0; valueIndex < cardValues.length; valueIndex++) {
      var value = cardValues[valueIndex];
      var color = colors[value - 1];
      var data = {
        value: value,
        color: color,
        isFlipped: false
      }; // this generates the data objects that will be attached to each html element that is created. the html is NOT just anohter attribute of the object. It is created below and then the data is appended to it.

      var $cardElement = $('<div class="card col-3"></div>'); //this is the html portion.

      $cardElement.data(data); //this adds the data object (above) to the html.

      $game.append($cardElement);
      }

      $('.card').click(function() {
        MatchGame.flipCard($(this), $('#game'));
      });
  };



/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

 MatchGame.flipCard = function($card, $game) {
console.log(cardValues);

while ($game.data('flippedCards').length < 2) {
 if ($card.data('isFlipped')) {
   return;
 } else {
   $card.css('background-color', $card.data('color'));
   $card.data('isFlipped', true);
   $card.text($card.data('value'));
   $game.data('flippedCards').push($card);
 };
};

var $card1 = $game.data('flippedCards')[0];
var $card2 = $game.data('flippedCards')[1];

if ($game.data('scoredCards').length < 14) {
if ($card1.data('value') == $card2.data('value')) {
  setTimeout(function(){
    $card1.addClass('flipped');
    $card1.css('background-color', 'rgb(153, 153, 153)');
    $card2.addClass('flipped');
    $card2.css('background-color', 'rgb(153, 153, 153)');
    $game.data('scoredCards').push($card1);
    $game.data('scoredCards').push($card2);
    $game.data('flippedCards', []);
//    console.log($game.data('scoredCards').length);
    return;
  }, 350);
} else {
  setTimeout(function() {
    $card1.css('background-color', 'rgb(32, 64, 86)');
    $card1.data('isFlipped', false);
    $card1.text('');
    $card2.css('background-color', 'rgb(32, 64, 86)');
    $card2.data('isFlipped', false);
    $card2.text('');
    $game.data('flippedCards', []);
    return;
  }, 450);
};
} else {
  setTimeout(function(){
    $card1.addClass('flipped');
    $card1.css('background-color', 'rgb(153, 153, 153)');
    $card2.addClass('flipped');
    $card2.css('background-color', 'rgb(153, 153, 153)');
    $game.data('scoredCards').push($card1);
    $game.data('scoredCards').push($card2);
    $game.data('flippedCards', []);
    $game.data('scoredCards', []);
    alert('You did it! Congratulations! Dale!');
    $('.btn').removeClass('hide');
    return;
  }, 350);
//  console.log("game over!");

}
// console.log(score);
// if (score == 8) {
//   console.log("you are done!");
// } else {
//   return;
// };
};
