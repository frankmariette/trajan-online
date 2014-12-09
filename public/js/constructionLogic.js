function Construction(){
  console.log("initiating construction object.");

  lastPositionX = 0;
  lastPositionY = 0;
}



function constructionLogic(action){


  if (action == 0){
      /* Move small player token to worker camp */
      littlePeople.forEach(makeActiveLP, this, true);
      busy = 'selectTray'
  }

  if (action == 1)
  {
      /* check if it is first time moving a worker to construction site*/
      cTiles.forEach(makeActiveCT, this, true);
  //    littlePeople.forEach(makeActiveLP2, this, true);
      busy = 'selectTray'

  }

}

function makeActiveLP2(LittlePerson){
  LittlePerson.inputEnabled = true;
  LittlePerson.events.onInputDown.add(moveToConstructionSpace, this);
}

function makeActiveLP(LittlePerson){
  LittlePerson.inputEnabled = true;
  LittlePerson.events.onInputDown.add(moveToWorkerCamp, this); //if this piece is clicked, move it
}

function makeActiveCT(currentTile){
  currentTile.inputEnabled = true;
  currentTile.events.onInputDown.add(moveToPlayerCard, this); //if this piece is clicked, move it
}

function moveToWorkerCamp(LittlePerson){ //this is how you add a callback to move a piece!
  LittlePerson.position.x = 580;
  LittlePerson.position.y = 600;
}

function moveToConstructionSpace(LittlePerson){
  console.log(" variable is " + this.lastPositionX);
  LittlePerson.position.x = this.lastPositionX;
  LittlePerson.position.y = this.lastPositionY;
}

function moveToPlayerCard(tile){ //this is how you add a callback to move a piece!
  this.lastPositionX = tile.position.x;
  this.lastPositionY = tile.position.y;
  tile.position.x = 300;
  tile.position.y = 1500;
  littlePeople.forEach(makeActiveLP2, this, true);
  
}
