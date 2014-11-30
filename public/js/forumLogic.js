function makeActive(currentTile){
currentTile.inputEnabled = true;
//if(/*tile == gamesTile*/)
	currentTile.events.onInputDown.add(orangeWildMovement, this); //if this piece is clicked, move it
//else if()
//	currentTile.events.onInputDown.add(breadMovement, this);
//else if()
//	currentTile.events.onInputDown.add(religionMovement, this);
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

function forumLogic(){

}

//religion, games, bread
//