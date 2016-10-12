//normal Javascript
function chgColor (event) {
  var target = event.target;
  var randomNum = Math.floor(Math.random() * 4095);
  var randomColor = `#${randomNum.toString(16)}`;

  target.style.color = randomColor;
};

//example of jQuery
var heading = $("#heading");
// heading.on() -->another example. Look it up!
//$("heading").click(chgColor);
//This line is the same as the var example
//written above.

heading.click(chgColor);

//var player1 = "X";
//var player2 = "O";

var currentPlayer = "X";

function switchPlayer () {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  }
  else {
    currentPlayer = "X";
  }
};

function toggleColor (event) {
  var target = $(event.target);
  var playerClass;

  if (currentPlayer === "X") {
    playerClass = "red";
  }
  else {
    playerClass = "black";
  }
  target.toggleClass(playerClass);
};

$(".space").click(toggleColor);
