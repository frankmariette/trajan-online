function turnLogic(){
  //let user know what to do
  text.text = "Select a Tray";

  var x = game.input.activePointer.positionDown.x;
  var y = game.input.activePointer.positionDown.y;

  tray1.removeAll();
  tray2.removeAll();
  tray3.removeAll();
  tray4.removeAll();
  tray5.removeAll();
  tray6.removeAll();

  graphics.lineStyle(2, 0xFFFF30, 1);
  if(t1.contains(x,y)){
    graphics.drawCircle(695, game.world.height-350, 50);
    //Place Action Markers in correct tray group
    aMarks.forEach(inTray, this, true);
    select(tray1);
    text.text = "TRAY 1";
  }
  else if(t2.contains(x,y)){
    graphics.drawCircle(802, game.world.height-350, 50);
    //Place Action Markers in correct tray group
    aMarks.forEach(inTray, this, true);
    select(tray2);
  }
  else if(t3.contains(x,y)){
    graphics.drawCircle(860, game.world.height-255, 50);
    //select(tray3);
  }
  else if(t4.contains(x,y)){
    graphics.drawCircle(805, game.world.height-160, 50);
    //select(tray4);
  }
  else if(t5.contains(x,y)){
    graphics.drawCircle(695, game.world.height-160, 50);
    //select(tray5);
  }
  else if(t6.contains(x,y)){
    graphics.drawCircle(640, game.world.height-255, 50);
    //select(tray6);
  }

  //check which tile is clicked
  cTiles.forEach(makeActive, this, true);
  bTiles.forEach(makeActive, this, true);
  mTiles.forEach(makeActive, this, true);
  tTiles.forEach(makeActive, this, true);
  fTiles.forEach(makeActive, this, true);

}

function select(sourceTray){
  sourceTray.forEach(lineUp, this, true);
  //sourceTray.forEach(move, this, true);
}
function lineUp(marker){
  marker.position.x = 640;
  marker.position.y = game.world.height-350;
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

  var mx = marker.position.x;
  var my = marker.position.y;


  if(t1.contains(mx,my)){
    tray1.add(marker);
    console.log("in tray 1");
  }
  else if(t2.contains(mx,my)){
    tray2.add(marker);
    console.log("in tray 2");
  }
  else if(t3.contains(mx,my)){

  }
  else if(t4.contains(mx,my)){

  }
  else if(t5.contains(mx,my)){

  }
  else{

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
