function trajanLogic(currentTile, arch){
	
	
//	var tSpace1 = tTiles.create(900, game.world.height - 300, 'trajan')
//	tSpace1.angle = 0;

//	var trajan = game.add.group();
//  	var arch = trajan.create(605, game.world.height-435, 'tArch');
//  	arch.angle = -28;
	
	
 	var trajan_Spaces = [	
		new Phaser.Rectangle(603, game.world.height-480, 100, 100),
 		new Phaser.Rectangle(830, game.world.height-470, 100, 100),
		new Phaser.Rectangle(900, game.world.height-300, 100, 100),
		new Phaser.Rectangle(795, game.world.height-100, 100, 100),
		new Phaser.Rectangle(630, game.world.height-139, 100, 100),
		new Phaser.Rectangle(515, game.world.height-300, 100, 100),
		new Phaser.Rectangle(709, game.world.height-300, 100, 100)

	]
	
	
	var spaces = [0,0,0,0,0,0];
	var index = 0;
	//check if arch is in the middle. If so then don't do anything else.
	if (trajan_Spaces[6].contains(trajan.getAt(0).position.x, trajan.getAt(0).position.y)){
		console.log("Can't do the Trajan Action.");
		return 0;
	}
	//check spaces to see if they are occupied.	
	for (i=0;i<6;i++) {
		if (trajan_Spaces[i].contains(trajan.getAt(0).position.x, trajan.getAt(0).position.y)) {
			spaces[i] = 2;
			index = i;
		}
		if (trajan_Spaces[i].contains(currentTile.position.x, currentTile.position.y)) {
			spaces[i] = 1;
		}
	}
	//OK THIS LOGIC IS TO MOVE THE "TILE" TO THE ARCH POSITION AND MOVE THE ARCH TO THE
	//NEXT SPOT!!
	if (spaces[index] = 2) {
		if (moveTile(currentTile, trajan.getAt(0), spaces)) {
				moveArch(trajan.getAt(0), trajan_Spaces, spaces, index);
				
		}
	}
}

function moveTile(tile, arch, spaces) {
	tile.position.x = arch.position.x;
	tile.position.y = arch.position.y;
	tile.angle = arch.angle;
	spaces[0] = 1;
	return true;
}

function moveArch(arch, trajanSpaces, spaces, index) {
	arch.position.x = trajanSpaces[index += 1].x;
	arch.position.y = trajanSpaces[index].y;
	if (index == 0 || index == 3) {
		arch.angle = -28;
	} else if (index == 1 || index == 4) {
		arch.angle = 28;
	} else if (index == 2 || index == 5) {
		arch.angle = 0;
	}
	spaces[index] = 2;
}




