function Game(){

	// Attribrutes for the game to manage
	initialize(){
		this.players = [];
		this.turn = 0;
		this.quarter = 0;
		this.pause = false;
		this.Phaser = new Phaser.Game(1600, 1800, Phaser.AUTO, 'gameboard', {preload: preload, create: create, update: update});
	}
	
}