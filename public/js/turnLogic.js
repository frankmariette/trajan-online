var linespot = 640;
var busy = 'selectTray';
function turnLogic(){

  if(busy == 'selectTray'){
    //let user know what to do
    text.text = "Select a Tray";
  }
  game.input.onUp.add(getTray);
  if(busy == 'placeMarkers'){
    text.text = "Move Cursor Over a Marker to Place it in the Next Tray";
    aMarks.forEach(placeMarkers, this, true);
  }
  if(busy == 'seaport'){
    text.text = "Seaport Action";
    //call senate logic
  }
  if(busy == 'forum'){
    text.text = "Forum Action";
    //call forum logic
  }
  if(busy == 'military'){
    text.text = "Military Action";
    //call mil logic
  }
  if(busy == 'senate'){
    text.text = "Senate Action";
    //call senate logic
  }
  if(busy == 'trajan'){
    text.text = "Trajan Action";
    //call trajan logic
  }
  if(busy == 'construction'){
    text.text = "Construction Action";
    //call construct logic
  }

  //check which tile is clicked
  cTiles.forEach(makeActive, this, true);
  bTiles.forEach(makeActive, this, true);
  mTiles.forEach(makeActive, this, true);
  tTiles.forEach(makeActive, this, true);
  fTiles.forEach(makeActive, this, true);

}

function makeActive(currentTile){
currentTile.inputEnabled = true;
currentTile.events.onInputDown.add(listener, this); //if this piece is clicked, move it
}
function listener(tile){ //this is how you add a callback to move a piece!
tile.position.x = 0;
tile.position.y = 1502;
}
