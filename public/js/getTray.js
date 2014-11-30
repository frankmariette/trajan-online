function getTray(){
  if(busy != 'selectTray'){ //make sure code only executes on selectTray State of Game
    return;
  }
  else{
    busy = 'placeMarkers';

    var x = game.input.activePointer.positionDown.x;
    var y = game.input.activePointer.positionDown.y;
    //Get which tray the user selected!

    if(t1.contains(x,y)){
      //Place Action Markers from tray to top!
      aMarks.forEach(lineUp, this, true, t1);
      currentTray = t1;
    }
    else if(t2.contains(x,y)){
      //Place Action Markers from tray to top!
      aMarks.forEach(lineUp, this, true, t2);
      currentTray = t2;
    }
    else if(t3.contains(x,y)){
      //Place Action Markers from tray to top!
      aMarks.forEach(lineUp, this, true, t3);
      currentTray = t3;
    }
    else if(t4.contains(x,y)){
      //Place Action Markers from tray to top!
      aMarks.forEach(lineUp, this, true, t4);
      currentTray = t4;
    }
    else if(t5.contains(x,y)){
      //Place Action Markers from tray to top!
      aMarks.forEach(lineUp, this, true, t5);
      currentTray = t5;
    }
    else if(t6.contains(x,y)){
      //Place Action Markers from tray to top!
      aMarks.forEach(lineUp, this, true, t6);
      currentTray = t6;
    }
  }
}

function lineUp(marker, sourceTray){ //get position of marker, and check it is in the selected tray, send to top if true
  var mx = marker.position.x;
  var my = marker.position.y;

  if(sourceTray.contains(mx, my)){
    marker.position.x = linespot;
    marker.position.y = game.world.height-500;
    linespot += 35;
  }
}
