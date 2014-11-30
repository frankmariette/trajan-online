var currentTray;
function placeMarkers(marker){
  if(busy != 'placeMarkers'){
    return;
  }
  else{
    //get position of maker
    var mx = marker.position.x;
    var my = marker.position.y;

    marker.inputEnabled = true;

    if(marker.input.pointerOver()){ //get if pointer is over marker
      if(markerBounds.contains(mx, my)){ //make sure marker is part of source tray group
        if(currentTray == t1){ //add marker to next tray
          marker.position.x = t2.x;
          marker.position.y = t2.y;
          currentTray = t2;
        }
        else if(currentTray == t2){
          marker.position.x = t3.x;
          marker.position.y = t3.y;
          currentTray = t3;
        }
        else if(currentTray == t3){
          marker.position.x = t4.x;
          marker.position.y = t4.y;
          currentTray = t4;
        }
        else if(currentTray == t4){
          marker.position.x = t5.x;
          marker.position.y = t5.y;
          currentTray = t5;
        }
        else if(currentTray == t5){
          marker.position.x = t6.x;
          marker.position.y = t6.y;
          currentTray = t6;
        }
        else{
          marker.position.x = t1.x;
          marker.position.y = t1.y;
          currentTray = t1;
        }
      }
    }
  }
  var boxEmpty = true;
  aMarks.forEach(function(current){
    if(markerBounds.contains(current.position.x, current.position.y)){ //check that box is empty
      boxEmpty = false;
    }
  }, this, true);
  if(boxEmpty){ //set game state to correct action for next phase of turn logic
    if(currentTray == t1){
      busy = 'seaport';
    }
    else if(currentTray == t2){
      busy = 'forum';
    }
    else if(currentTray == t3){
      busy = 'military';
    }
    else if(currentTray == t4){
      busy = 'senate';
    }
    else if(currentTray == t5){
      busy = 'trajan';
    }
    else if(currentTray == t6){
      busy = 'construction';
    }
  }
}
