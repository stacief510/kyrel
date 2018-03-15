var initial_state = ['b', 'b', 'b', 'b', 'b'];

 function main() {

  //////////////////////////////////
  ////                          ////
  //// v YOUR CODE BELOW HERE v ////
  ////                          ////
  //////////////////////////////////
var n = 5

  for (let i = 0; i < initial_state.length; i++) {
    if ((i + 1) % n == 0) {
      erase();
      moveRight();
    } else {
      moveRight();
    }
  }
  //////////////////////////////////
  ////                          ////
  //// ^ YOUR CODE ABOVE HERE ^ ////
  ////                          ////
  //////////////////////////////////

}// <--- be careful not to delete or comment-out this closing bracket!
