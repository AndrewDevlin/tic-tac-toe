///////////Busines End///////
var playerOneInput;
var gameWon = false;
var currentPlayer="playerOne";
var boardGrid = [0,1,2,3,4,5,6,7,8];
var currentPlayerInput;
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

// $(document).ready(function(event){
//   // alert("hello");
//
//   $("#play").click(function() {
//     alert("PlayerOne's turn");
//     while (gameWon === false) {
//       $(".field").click(function() {
//         currentPlayerInput=$(this).val();
//         console.log("currentPlayerInput: " + currentPlayerInput);
//         while (typeof boardGrid[currentPlayerInput] === "string" ) {
//           alert(currentPlayer + " please chose an available space: ");
//         }
//         boardGrid.splice(currentPlayerInput, 1, currentPlayer);
//         alert(boardGrid);
//         currentPlayer = playerToggle(currentPlayer);
//         gameWon=winner(boardGrid);
//         gameWon=true;
//       });
//       // field click
//     };
//     // while
//   alert("Suck it " + currentPlayer + "!!!");
//   });
//   // lets play click
// });
// document ready
$(document).ready(function(event){

  // $("#play").click(function() {
    alert("PlayerOne's turn");
      $(".field").click(function() {
          currentPlayerInput = $(this).val();
          console.log("currentPlayerInput: " + currentPlayerInput);
          while (typeof boardGrid[currentPlayerInput] === "string" ) {
            alert(currentPlayer + " please chose an available space: ");
          }
          boardGrid.splice(currentPlayerInput, 1, currentPlayer);

          if (currentPlayer === "playerOne") {
            $(this).parent().addClass("oprah");
          } else if (currentPlayer === "playerTwo") {
            $(this).parent().addClass("malcolm");
          }
          alert(boardGrid);
          currentPlayer = playerToggle(currentPlayer);
          gameWon=winner(boardGrid);
          // gameWon=true;
          if (gameWon ===true) {
            alert("Suck it " + currentPlayer + "!!!");
          }
      });
      // field click
// });
// // lets play click

});
