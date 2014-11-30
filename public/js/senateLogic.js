function senateLogic(){
  //senate stuff
  pMarks.forEach(senateSpaces, this, true);
}
function senateSpaces(currentPlayer){

  var s2 = new Phaser.Circle(393, game.world.height-680, 25);
  var s3 = new Phaser.Circle(456, game.world.height-680, 25);
  var s4 = new Phaser.Circle(522, game.world.height-680, 25);
  var s5 = new Phaser.Circle(585, game.world.height-680, 25);
  var s6 = new Phaser.Circle(649, game.world.height-680, 25);
  var s7 = new Phaser.Circle(715, game.world.height-680, 25);
  var s8 = new Phaser.Circle(778, game.world.height-680, 25);
  var x = currentPlayer.position.x;
  var y = currentPlayer.position.y;
  currentPlayer.inputEnabled = true;
  currentPlayer.input.enableDrag();
  if(s2.contains(x,y)){
    console.log("2 VP");
  }
  else if(s3.contains(x,y)){
    console.log("3 VP");
  }
  else if(s4.contains(x,y)){
    console.log("4 VP");
  }
  else if(s5.contains(x,y)){
    console.log("5 VP");
  }
  else if(s6.contains(x,y)){
    console.log("6 VP");
  }
  else if(s7.contains(x,y)){
    console.log("7 VP");
  }
  else if(s8.contains(x,y)){
    console.log("8 VP");
  }
  else{
    console.log("NO VP");
  }

}
