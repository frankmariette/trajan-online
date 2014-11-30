// Class Definition
function Senate(){
  this.victory_points = 0;
  this.votes = 0;

  this.senate_spaces = [
    new Phaser.Circle(300, game.world.height-680, 175),
    new Phaser.Circle(393, game.world.height-680, 25),
    new Phaser.Circle(456, game.world.height-680, 25),
    new Phaser.Circle(522, game.world.height-680, 25),
    new Phaser.Circle(585, game.world.height-680, 25),
    new Phaser.Circle(649, game.world.height-680, 25),
    new Phaser.Circle(715, game.world.height-680, 25),
    new Phaser.Circle(778, game.world.height-680, 25)
  ]


}

Senate.prototype.movePlayerSenatePiece = function(currentPlayer, nextSpace) {
  currentPlayer.x = nextSpace.x;
  currentPlayer.y = nextSpace.y;
  // console.log(currentPlayer);
  return currentPlayer;
}

function senateLogic(){
  //senate stuff
  return new Senate();
  // senateGroup.forEach(senateSpaces, this, true);
}
/*<<<<<<< HEAD
Senate.prototype.senateSpaces = function(currentPlayer){
  for (var i = 0; i < this.senate_spaces.length-1; i++) {
    if (this.senate_spaces[i].contains(currentPlayer.x, currentPlayer.y)) {
      currentPlayer = this.movePlayerSenatePiece(currentPlayer, this.senate_spaces[i+1]);
      this.victory_points = i+2;
      break;
    };
  };
=======*/
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
>>>>>>> 57d84519443828cc439792bd3bde77319cb2cca5

}
