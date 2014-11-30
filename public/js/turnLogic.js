function turnLogic(){
  //let user know what to do
  text.text = "Select a Tray";

  //Place Action Markers in correct tray group
  aMarks.forEach(inTray, this, true);

  var x = game.input.activePointer.positionUp.x;
  var y = game.input.activePointer.positionUp.y;

  //check which tile is clicked
  cTiles.forEach(makeActive, this, true);
  bTiles.forEach(makeActive, this, true);
  mTiles.forEach(makeActive, this, true);
  tTiles.forEach(makeActive, this, true);
  fTiles.forEach(makeActive, this, true);

}

function ifPlacedInTray(x,y){
  if(t1.contains(x,y)){
    select(tray1);
    text.text = "TRAY 1";
  }
  else if(t2.contains(x,y)){
    select(tray2);
  }
  else if(t3.contains(x,y)){
    select(tray3);
  }
  else if(t4.contains(x,y)){
    select(tray4);
  }
  else if(t5.contains(x,y)){
    select(tray5);
  }
  else if(t6.contains(x,y)){
    select(tray6);
  }
}

function select(sourceTray){
  sourceTray.forEach(move, this, true);
}

function move(marker){
  marker.inputEnabled = true;
  marker.input.enableDrag();
  marker.events.onDragStop.add(stopDrag, this);
}
function stopDrag(marker){
  marker.input.draggable = false;
}
function inTray(marker){

  var x = marker.position.x;
  var y = marker.position.y;
  seaportTray.removeAll();
  forumnTray.removeAll();
  militaryTray.removeAll();
  senateTray.removeAll();
  trajanTray.removeAll();
  constructionTray.removeAll();

  if(t1.contains(x,y)){
    tray1.add(marker);
    console.log("in tray 1");
  }
  else if(t2.contains(x,y)){
    tray2.add(marker);
    console.log("in tray 2");
  }
  else if(t3.contains(x,y)){
    tray3.add(marker);
  }
  else if(t4.contains(x, y)){
    tray4.add(marker);
  }
  else if(t5.contains(x,y)){
    tray5.add(marker);
  }
  else{
    tray6.add(marker);
  }
}

function makeActive(currentTile){
  currentTile.inputEnabled = true;
  currentTile.events.onInputDown.add(listener, this);
}

function listener(tile){
  tile.position.x = 0;
  tile.position.y = 0;
}
