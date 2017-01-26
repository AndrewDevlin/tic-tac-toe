///////////Busines End///////
var playerOneInput;
var gameWon = false;
var currentPlayer="playerOne";
var boardGrid = [0,1,2,3,4,5,6,7,8];
var playerToggle = function(player) {
  if (player === "playerOne") {
    currentPlayer = "playerTwo";
  }
  else {
    currentPlayer = "playerOne";
  }
  return currentPlayer;
}
var winner = function(grid){
  if (grid[0]===grid[1] && grid[0]===grid[2]){
    gameWon=true;
  }
  return gameWon;
}




///////////User Interface Logic////////

$(document).ready(function(event){
  alert("hello");
  while (gameWon === false) {
    currentPlayerInput=prompt(currentPlayer + "Input: ");
    boardGrid.splice(currentPlayerInput, 1, currentPlayer);
    alert(boardGrid);
    currentPlayer = playerToggle(currentPlayer);
    gameWon=winner(boardGrid);
  };

  alert(currentPlayer + "Wins!!!!")













});
