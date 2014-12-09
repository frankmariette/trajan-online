var linespot = 640;
var busy = 'selectTray';
//var vp = 0;
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
    text.text = "Click a draw pile or Click a ship";
    ships.forEach(shipsActive, this, true);
    cards.forEach(cardsActive, this, true);
    busy = 'selectTray';
    //call senate logic
  }
  if(busy == 'forum'){
    text.text = "Forum Action";
    //call forum logic
  }
  if(busy == 'military'){
    //call mil logic
    militaryLogic();
  }
  if(busy == 'senate'){
    busy = 'selectTray'
    text.text = "Click your senate marker";
    var senate = senateLogic();
    pMarks.forEach(senateListener, senate, true);
  }
  if(busy == 'trajan'){
    text.text = "Trajan Action";
    tTiles.forEach(trajanMakeActive, this, trajan.getAt(0), true);
    
  }
  if(busy == 'construction'){
    text.text = "Construction Action \n Press left arrow to move to constructioncamp\n Press right arrow to choose a tile";
    keys = this.game.input.keyboard.createCursorKeys();
    if (keys.left.isDown){
      constructionLogic(0);
    } else if (keys.right.isDown){
      constructionLogic(1);
    }
  }
    //call construct logic


  //check which tile is clicked
  cTiles.forEach(makeActive, this, true);
  bTiles.forEach(makeActive, this, true);
  mTiles.forEach(makeActive, this, true);
//  tTiles.forEach(makeActive, this, true);
  //mTiles.forEach(makeActive, this, true);
  tTiles.forEach(makeActive, this, true);
  fTiles.forEach(forumActive, this, true);


}

function makeActive(currentTile){
  currentTile.inputEnabled = true;
  currentTile.events.onInputDown.addOnce(listener, this); //if this piece is clicked, move it
}

function senateListener(senateTile){
  senateTile.inputEnabled = true;
  senateTile.events.onInputDown.add(this.senateSpaces, this);
}

function listener(tile){ //this is how you add a callback to move a piece!
  tile.position.x = 800;
  tile.position.y = 300;
}

function trajanMakeActive(currentTile, arch){
	currentTile.inputEnabled = true;
	currentTile.events.onInputDown.add(trajanLogic, this, arch);
}

