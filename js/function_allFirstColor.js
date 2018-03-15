var initial_state = ['g', '.', '.', '.', '.'];

 function main() {

  //////////////////////////////////
  ////                          ////
  //// v YOUR CODE BELOW HERE v ////
  ////                          ////
  //////////////////////////////////
  for (let i = 0; i < initial_state.length; i++) {
    // if I am in first box, 
    if (i === 0) {
      // I need to check which color i need to use, then moveRight
      if (onBlue()) {
        useBlue()
        moveRight();
      } else {
        useGreen()
        moveRight();
      }
    } else {
      // If I am not in first box, I am going to draw, then moveRight
      draw();
      moveRight();
    }
  }



  //////////////////////////////////
  ////                          ////
  //// ^ YOUR CODE ABOVE HERE ^ ////
  ////                          ////
  //////////////////////////////////

}// <--- be careful not to delete or comment-out this closing bracket!
