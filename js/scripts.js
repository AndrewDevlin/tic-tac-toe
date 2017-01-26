///////////Busines End///////
var playerOneInput;
var boardGrid = [0,1,2,3,4,5,6,7,8];






///////////User Interface Logic////////

$(document).ready(function(event){
  alert("hello");

  playerOneInput=prompt("playerOne Input: ");
  boardGrid.splice(0, 1, "playerOne");
  alert(boardGrid);














});
