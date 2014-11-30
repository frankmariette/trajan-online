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
    //game.paused = true;
    text.text = "Military Action";
    text.text= text.text + "\nLeft- Move Token to Camp \nUp- Move Troop to Leader \nRight- Move leader to Adj Providence";
    var action=0;
    keys = game.input.keyboard.createCursorKeys();
    keys.start;
    if(keys.left.isDown)
    {
      action=1;
    }
    else if(keys.up.isDown)
    {
      action=2;
    }
    else if(keys.right.isDown)
    {
      action=3;
    }
    console.log(action);
    //call mil logic
    militaryLogic(action);
    //busy = 'selectTray';
    //game.paused = true;
    //game.paused = false;
    busy='selectTray';
  }
  if(busy == 'senate'){
    busy = 'selectTray'
    text.text = "Click your senate marker";
    var senate = senateLogic();
    pMarks.forEach(senateListener, senate, true);
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
