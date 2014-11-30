
// Class Definition
function Senate(){
  this.victory_points = 0;
  this.votes = 0;

  this.senate_spaces = [ 
    new Phaser.Circle(393, game.world.height-680, 25),
    new Phaser.Circle(456, game.world.height-680, 25),
    new Phaser.Circle(522, game.world.height-680, 25),
    new Phaser.Circle(585, game.world.height-680, 25),
    new Phaser.Circle(649, game.world.height-680, 25),
    new Phaser.Circle(715, game.world.height-680, 25),
    new Phaser.Circle(778, game.world.height-680, 25)
  ]
  

}

Senate.prototype.playerVPGain = function(currentPlayer) {
  // currentPlayer.inputEnabled = true;
  // currentPlayer.input.enableDrag();
  this.senateSpaces(currentPlayer.x, currentPlayer.y);

}




function senateLogic(){
  //senate stuff
  var senate = new Senate();
  senate.playerVPGain({ "x":391, "y":1120 });
  console.log(senate.victory_points);
  // senateGroup.forEach(senateSpaces, this, true);
}
Senate.prototype.senateSpaces = function(x,y){

  for (var i = 0; i < this.senate_spaces.length; i++) {
    if (this.senate_spaces[i].contains(x,y)) {
      this.victory_points = i+2;
    };
  };

}
