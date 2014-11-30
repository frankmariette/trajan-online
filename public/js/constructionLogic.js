function Construction(){
  console.log("initiating construction object.");
}

function constructionLogic(action){

  if (action == 0){
      /* Move small player token to worker camp */
      littlePeople.forEach(makeActiveLP, this, true);
  }

  if (action == 1)
  {
      /* check if it is first time moving a worker to construction site*/
      cTiles.forEach(makeActiveCT, this, true);
  }

}

function makeActiveLP(LittlePerson){
LittlePerson.inputEnabled = true;
LittlePerson.events.onInputDown.add(listener2, this); //if this piece is clicked, move it
}

function listener2(tile){ //this is how you add a callback to move a piece!
tile.position.x = 580;
tile.position.y = 600;
}

function makeActiveCT(currentTile){
currentTile.inputEnabled = true;
currentTile.events.onInputDown.add(listener3, this); //if this piece is clicked, move it
}

function listener3(tile){ //this is how you add a callback to move a piece!
tile.position.x = 300;
tile.position.y = 1500;
}
