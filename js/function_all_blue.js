var initial_state = ['.', '.', '.', '.', '.']

 function main() {

  //////////////////////////////////
  ////                          ////
  //// v YOUR CODE BELOW HERE v ////
  ////                          ////
  //////////////////////////////////

for (var i = 0; i < initial_state.length; i++){
  if (i ===0) {  
    useBlue();
    draw();
  } else { 
    moveRight();
    draw();
  }

}  
  //////////////////////////////////
  ////                          ////
  //// ^ YOUR CODE ABOVE HERE ^ ////
  ////                          ////
  //////////////////////////////////

}// <--- be careful not to delete or comment-out this closing bracket!
