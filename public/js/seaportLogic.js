function seaportLogic(){

}
//ship sprites go at 165, 600; 450, 430; 305, 520
function makeActive(currentTile){
  currentTile.inputEnabled = true;
  currentTile.events.onInputDown.add(listener, this); //if this piece is clicked, move it
}
function listener(tile){ //this is how you add a callback to move a piece!
  tile.position.x = 0;
  tile.position.y = 0;
}
