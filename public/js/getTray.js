function getTray(){
  if(busy != 'selectTray'){ //make sure code only executes on selectTray State of Game
    return;
  }
  else{
    busy = 'placeMarkers';

    var x = game.input.activePointer.positionDown.x;
    var y = game.input.activePointer.positionDown.y;
    //Get which tray the user selected!

    if(seaportTray.contains(x,y)){
      //Place Action Markers from tray to top!
      aMarks.forEach(lineUp, this, true, seaportTray);
      currentTray = seaportTray;
    }
    else if(forumTray.contains(x,y)){
      //Place Action Markers from tray to top!
      aMarks.forEach(lineUp, this, true, forumTray);
      currentTray = forumTray;
    }
    else if(militaryTray.contains(x,y)){
      //Place Action Markers from tray to top!
      aMarks.forEach(lineUp, this, true, militaryTray);
      currentTray = militaryTray;
    }
    else if(senateTray.contains(x,y)){
      //Place Action Markers from tray to top!
      aMarks.forEach(lineUp, this, true, senateTray);
      currentTray = senateTray;
    }
    else if(trajanTray.contains(x,y)){
      //Place Action Markers from tray to top!
      aMarks.forEach(lineUp, this, true, trajanTray);
      currentTray = trajanTray;
    }
    else if(constructionTray.contains(x,y)){
      //Place Action Markers from tray to top!
      aMarks.forEach(lineUp, this, true, constructionTray);
      currentTray = constructionTray;
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
