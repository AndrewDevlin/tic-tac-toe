





Objective: Tic-tac-toe (also known as noughts and crosses or Xs and Os) is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.

Specifications:
| Desired Behaviour | Input Example | Output Example |
|:------------------|:-------------:|---------------:|
|1)PlayerOne selects a field to fill and her input is displayed on the screen| 0 | playerOne,1,2,3,4,5,6,7,8|
|2)PlayerTwo selects a field to fill and his input is displayed on the screen| 1 | playerOne,playerTwo,2,3,4,5,6,7,8|
|3)Players take turns selecting fields and the game toggles to prompt the each player in turn. | PlayerOne: 0 PlayerTwo: 2, PlayerOne: 4, PlayerTwo: 5| PlayerOne,1,PlayerTwo,3,PlayerOne,PlayerTwo,6,7,8|
|4)PlayerOne wins the game, the game ends and players are notified|PlayerOne: 0,1,2 | alert: "Suck it PlayerTwo!!!"|
|5)Players cannot override each others input | PlayerOne: 0,0 | alert: "Please choose an available field." and prompt again.|

* End of Specifications
