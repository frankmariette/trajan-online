function makeActive(currentTile){
currentTile.inputEnabled = true;

if(currentTile.tileType == "games")
	currentTile.events.onInputDown.add(gamesMovement, this);

else if(currentTile.tileType == "bread")
	currentTile.events.onInputDown.add(breadMovement, this);

else if(currentTile.tileType == "religion")
	currentTile.events.onInputDown.add(religionMovement, this);

else if(currentTile.tileType == "yellow")
	currentTile.events.onInputDown.add(yellowWildMovement, this);

else if(currentTile.tileType == "orange")
	currentTile.events.onInputDown.add(orangeWildMovement, this);

else if(currentTile.tileType == "green")
	currentTile.events.onInputDown.add(greenWildMovement, this);

else if(currentTile.tileType == "red")
	currentTile.events.onInputDown.add(redWildMovement, this);
}

/////////////////////////////////   STACK TILES
function stackTiles(tile){
	tile.position.y += 10;
}


/////////////////////////////////   RESOURCES MOVEMENT
function gamesMovement(tile){
tile.position.x = 530;
tile.position.y = 1402;
}

function breadMovement(tile){
tile.position.x = 375;
tile.position.y = 1402;
}

function religionMovement(tile){
tile.position.x = 452;
tile.position.y = 1402;
}

//////////////////////////////////////   WILD CARD MOVEMENT
function yellowWildMovement(tile){
tile.position.x = 382;
tile.position.y = 1482;
}

function orangeWildMovement(tile){
tile.position.x = 448;
tile.position.y = 1482;
}

function greenWildMovement(tile){
tile.position.x = 382;
tile.position.y = 1545;
}

function redWildMovement(tile){
tile.position.x = 448;
tile.position.y = 1545;
}