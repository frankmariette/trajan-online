function Game(){

	// Attribrutes for the game to manage
	initialize(){
		this.players = [];
		this.turn = 0;
		this.quarter = 0;
		this.pause = false;

		// Phaser bootstrapping
		this.Phaser = new Phaser.Game(1600, 1800, Phaser.AUTO, 'gameboard', {preload: phaserPreload, create: phaserCreate, update: phaserUpdate});


	}
	
}


Game.prototype.phaserPreload = function() {
	loadImages();
}

Game.prototype.phaserUpdate = function() {
	// Stuff goes down here
}

Game.prototype.methodName = function(arguments) {
	// body...
}