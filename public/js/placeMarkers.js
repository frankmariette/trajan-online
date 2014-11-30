var currentTray;
var i = 0;
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
        if(currentTray == seaportTray){ //add marker to next tray
          marker.position.x = forumTray.x;
          marker.position.y = forumTray.y;
          currentTray = forumTray;
        }
        else if(currentTray == forumTray){
          marker.position.x = militaryTray.x;
          marker.position.y = militaryTray.y;
          currentTray = militaryTray;
        }
        else if(currentTray == militaryTray){
          marker.position.x = senateTray.x;
          marker.position.y = senateTray.y;
          currentTray = senateTray;
        }
        else if(currentTray == senateTray){
          marker.position.x = trajanTray.x;
          marker.position.y = trajanTray.y;
          currentTray = trajanTray;
        }
        else if(currentTray == trajanTray){
          marker.position.x = constructionTray.x;
          marker.position.y = constructionTray.y;
          currentTray = constructionTray;
        }
        else{
          marker.position.x = seaportTray.x;
          marker.position.y = seaportTray.y;
          currentTray = seaportTray;
        }
        i += 5;
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
    if(currentTray == seaportTray){
      busy = 'seaport';
    }
    else if(currentTray == forumTray){
      busy = 'forum';
    }
    else if(currentTray == militaryTray){
      busy = 'military';
    }
    else if(currentTray == senateTray){
      busy = 'senate';
    }
    else if(currentTray == trajanTray){
      busy = 'trajan';
    }
    else if(currentTray == constructionTray){
      busy = 'construction';
    }
  }
}
