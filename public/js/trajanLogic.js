function trajanLogic(currentTile, arch){
	
	var trajan = game.add.group();
    var arch = trajan.create(605, game.world.height-435, 'tArch');
    arch.angle = -28;
	
	//This is the coordinates for if the arch is in the middle
	var tSpace1 = tTiles.create(900, game.world.height - 300, 'trajan')
	tSpace1.angle = 0;
	
	
	
	var space6 = new Phaser.Rectangle(709, game.world.height-300, 100, 100);
	var space5 = new Phaser.Rectangle(515, game.world.height-300, 100, 100);
	var space4 = new Phaser.Rectangle(600, game.world.height-139, 100, 100);
	var space3 = new Phaser.Rectangle(795, game.world.height-100, 100, 100);
	var space2 = new Phaser.Rectangle(900, game.world.height-300, 100, 100);
	var space1 = new Phaser.Rectangle(800, game.world.height-470, 100, 90);
	var space0 = new Phaser.Rectangle(603, game.world.height-480, 100, 90);
	
	
	
	var spaces = [0,0,0,0,0,0];
	console.log(arch.position.x);
	
		if (space6.contains(arch.x, arch.y)){
		console.log("Can't do the Trajan Action.");
		}
	
	//check spaces to see if they are occupied.	
	if (space0.contains(tSpace1.x, tSpace1.y)) {
		spaces[0] = 1;
	} else if (space1.contains(tSpace1.x, tSpace1.y)){
		spaces[1] = 1;
	} else if (space2.contains(tSpace1.x, tSpace1.y)){
		spaces[2] = 1;
	} else if (space3.contains(tSpace1.x, tSpace1.y)){
		spaces[3] = 1;
	} else if (space4.contains(tSpace1.x, tSpace1.y)){
		spaces[4] = 1;
	} else if (space5.contains(tSpace1.x, tSpace1.y)){
		spaces[5] = 1;
	} 

	
//	tTiles.forEach(trajanTileSelection, this, arch, true);
	
}

function trajanTileSelection(currentTile, arch) {
	currentTile.inputEnabled = true;
	console.log("now in trajanTileSelection func.");
	currentTile.events.onInputDown.add(moveTile, this, arch);
}

function moveTile(tile, arch) {
	console.log("Now in move tile func.");
	tile.position.x = arch.position.x;
	tile.position.y = arch.position.y;
	tile.angle = arch.angle;
}
