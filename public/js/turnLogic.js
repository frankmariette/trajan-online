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
  if(seaportTray.contains(x,y)){
    select(seaportTrayGroup);
    text.text = "Seaport Tray";
  }
  else if(forumnTray.contains(x,y)){
    select(forumnTrayGroup);
  }
  else if(militaryTray.contains(x,y)){
    select(militaryTrayGroup);
  }
  else if(senateTray.contains(x,y)){
    select(senateTrayGroup);
  }
  else if(trajanTray.contains(x,y)){
    select(trajanTrayGroup);
  }
  else if(constructionTray.contains(x,y)){
    select(constructionTrayGroup);
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

  if(seaportTray.contains(x,y)){
    seaportTrayGroup.add(marker);
    console.log("in seaport tray");
  }
  else if(forumnTray.contains(x,y)){
    forumnTray.add(marker);
    console.log("in forum tray");
  }
  else if(militaryTray.contains(x,y)){
    militaryTrayGroup.add(marker);
  }
  else if(senateTray.contains(x, y)){
    senateTrayGroup.add(marker);
  }
  else if(trajanTray.contains(x,y)){
    trajanTrayGroup.add(marker);
  }
  else if(constructionTray.contains(x,y){
    constructionTrayGroup.add(marker);
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
