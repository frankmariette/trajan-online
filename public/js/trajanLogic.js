function trajanLogic(currentTile, arch){
	
	var trajan = game.add.group();
    var arch = trajan.create(605, game.world.height-435, 'tArch');
    arch.angle = -28;
	
	var tSpace1 = tTiles.create(900, game.world.height - 300, 'trajan')
	tSpace1.angle = 0;
	
	
 	var trajan_Spaces = [	
		new Phaser.Rectangle(603, game.world.height-480, 100, 100),
 		new Phaser.Rectangle(800, game.world.height-470, 100, 100),
		new Phaser.Rectangle(900, game.world.height-300, 100, 100),
		new Phaser.Rectangle(795, game.world.height-100, 100, 100),
		new Phaser.Rectangle(600, game.world.height-139, 100, 100),
		new Phaser.Rectangle(515, game.world.height-300, 100, 100),
		new Phaser.Rectangle(709, game.world.height-300, 100, 100)

	]
	
	
	var spaces = [0,0,0,0,0,0];
	console.log(arch.position.x);
	
	//check if arch is in the middle. If so then don't do anything else.
	if (trajan_Spaces[6].contains(arch.x, arch.y)){
		console.log("Can't do the Trajan Action.");
		return 0;
	}
	
	//check spaces to see if they are occupied.	
	for (i=0;i<6;i++) {
		if (trajan_Spaces[i].contains(currentTile.x, currentTile.y)) {
			spaces[i] = 1;
		}
	}

	
//	tTiles.forEach(trajanTileSelection, this, arch, true);
	
}

function moveTile(tile, arch) {
	console.log("Now in move tile func.");
	tile.position.x = arch.position.x;
	tile.position.y = arch.position.y;
	tile.angle = arch.angle;
	this.moveTArch(arch);
}

function moveTArch(

function trajanTileSelection(currentTile, arch) {
	currentTile.inputEnabled = true;
	console.log("now in trajanTileSelection func.");
//	currentTile.events.onInputDown.add(moveTile, this, true, arch);
}


