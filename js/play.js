/*
  INSTRUCTIONS
    - Write all of your code inside the `main` function below.
    - Use this file to build/test your programs.
    - To save your work, when you finish a challenge:
        - Make a copy of this file in this `js/` directory and name it e.g. `all-blue.js`
        - Clean out this `play.js` file so you can start fresh on a new challenge

  RESERVED WORDS (do not use as variable names)
      row, colors, kyrel, initial_state

  AVAILABLE METHODS
      moveRight(), moveLeft(),
      useGreen(), useBlue(), draw(), erase(),
      onGreen(), onBlue()

  You can also configure the initial state of the row using the following key:
    '.' => empty
    'b' => blue
    'g' => green

  * start:  [ 'g', 'b', '.', '.', '.' ]
  * finish: [ '.', 'b', '.', '.', '.' ]

  * start:  [ 'g', 'b', 'b', '.', '.' ]
  * finish: [ '.', '.', 'b', '.', '.' ]
*/

var initial_state = [ 'g', 'b', 'b', '.', '.' ];

 function main() {
debugger
  //////////////////////////////////
  ////                          ////
  //// v YOUR CODE BELOW HERE v ////
  ////                          ////
  //////////////////////////////////
for (i = 0; i < initial_state.length; i++) {

    if (onBlue()) {
        moveLeft();
        erase();
        moveRight();
    }
    moveRight();
}

  //////////////////////////////////
  ////                          ////
  //// ^ YOUR CODE ABOVE HERE ^ ////
  ////                          ////
  //////////////////////////////////

}// <--- be careful not to delete or comment-out this closing bracket!
