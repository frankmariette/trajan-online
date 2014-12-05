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

Senate.prototype.senateSpaces = function(currentPlayer){
  for (var i = 0; i < this.senate_spaces.length-1; i++) {
    if (this.senate_spaces[i].contains(currentPlayer.x, currentPlayer.y)) {
      currentPlayer = this.movePlayerSenatePiece(currentPlayer, this.senate_spaces[i+1]);
      this.victory_points = i+2;
      break;
    };
  };

}
