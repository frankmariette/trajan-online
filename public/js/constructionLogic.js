function constructionLogic(){


  switch (action){

    case 0:
      /* Move small player token to worker camp */
      littlePeople.forEach(makeActive, this, true);

    case 1:
      /* check if it is first time moving a worker to construction site*/
      
  }
}

function makeActive(currentTile){
currentTile.inputEnabled = true;
currentTile.events.onInputDown.add(listener, this); //if this piece is clicked, move it
}

function listener(tile){ //this is how you add a callback to move a piece!
tile.position.x = 580;
tile.position.y = 600;
}
