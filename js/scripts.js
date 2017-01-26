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

var winner = function(grid) {
  var won=false;
  if (grid[0]===grid[1] && grid[0]===grid[2]){
    won=true;
  }
  else if (grid[3]===grid[4] && grid[3]===grid[5]){
    won=true;
  }
  else if (grid[6]===grid[7] && grid[6]===grid[8]){
    won=true;
  }
  else if (grid[0]===grid[3] && grid[0]===grid[6]){
    won=true;
  }
  else if (grid[1]===grid[4] && grid[1]===grid[7]){
    won=true;
  }
  else if (grid[2]===grid[5] && grid[2]===grid[8]){
    won=true;
  }
  else if (grid[2]===grid[4] && grid[2]===grid[6]){
    won=true;
  }
  else if (grid[0]===grid[4] && grid[0]===grid[8]){
    won=true;
  }
  return won;
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
    // gameWon=true;
  };

  alert("Suck it " + currentPlayer + "!!!")













});
