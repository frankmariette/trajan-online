function Military(){

  console.log(5);
}

function militaryLogic()
{
  actionInput = 0;
  var boolCheck = false;
  console.log("military logic call");
  text.text = "Military Action";
  text.text= text.text + "\nLeft- Move Token to Camp \nUp- Move Troop to Leader \nRight- Move leader to Adj Providence";
  keys = game.input.keyboard.createCursorKeys();
  //keys.start;
  // while(boolCheck == false)
  // {
    //console.log("Military Logic while loop = " + actionInput)
    if(keys.left.isDown)
    {
      actionInput=1;
      boolCheck=true;
    }
    else if(keys.up.isDown)
    {
      actionInput=2;
      boolCheck=true;
    }
    else if(keys.right.isDown)
    {
      actionInput=3;
      boolCheck=true;
    }
    console.log("Military Logic while loop = " + actionInput)
  //}
  var victory_points = 0;
  switch (actionInput){
    case 1:
      console.log("Military Sub action 1")
      //add a token to the military camp
      for(i=0;i<littlePeople.length;i++)
      {
        if(lpStartBox.contains(littlePeople.getAt(i).position.x,littlePeople.getAt(i).position.y))
        {
          littlePeople.getAt(i).position.x = 800;
          littlePeople.getAt(i).position.y = 300;
          break;
        }
      }
      //this.moveTokenToMilitaryCamp();
      busy='selectTray';
      //game.paused = false;
      break;
    case 2:
      console.log("Military Sub action 2")
      //move a token to the leader's location
      //var victory_points = this.moveTokenToLeader();
      busy='selectTray';
      //game.paused = false;
      break;
    case 3:
      console.log("Military Sub action 3")
      //move your leader to an adjacent space
      //possible overlap function?
      //this.moveLeader();
      busy='selectTray';
      //game.paused = false;
      break;
    default:
      //YOU DIDNT CHOOSE THE RIGHT SHIT. GO BACK AND CHOOSE THE RIGHT SHIT.
      break;
    }

    return victory_points;
}

Military.prototype.moveTokenToMilitaryCamp = function(currentPlayer) {
  //TODO move tokens from player's token board to the military camp

}

Military.prototype.moveTokenToLeader = function(currentPlayer) {
  //TODO move a token from the military camp to the current leader's position

}

Military.prototype.moveLeader = function(currentPlayer) {
  //TODO move the current player's leader to an adjacent space

}
