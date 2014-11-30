function Military(){

  console.log(5);
  incX = 0;
  incY = 0;
  incX2 = 0;
  incY2 = 0;
}

function militaryLogic()
{
  var victory_points = 0;
  var actionInput = 0;
  console.log("military logic call");
  text.text = "Military Action";
  text.text= text.text + "\nLeft- Move Token to Camp \nUp- Move Troop to Leader \nRight- Move leader to Adj Providence";
  keys = game.input.keyboard.createCursorKeys();
  if(keys.left.isDown)
  {
    actionInput=1;
  }
  else if(keys.up.isDown)
  {
    actionInput=2;
  }
  else if(keys.right.isDown)
  {
    actionInput=3;
  }
  switch (actionInput){
    case 1:
      console.log("Military Sub action 1")
      for(i=0;i<littlePeople.length;i++)
      {
        if(lpStartBox.contains(littlePeople.getAt(i).position.x,littlePeople.getAt(i).position.y))
        {
          littlePeople.getAt(i).position.x = 750+this.incX;
          littlePeople.getAt(i).position.y = 280+this.incY;
          //game.world.bringToTop(littlePeople.getAt(i));
          this.incX=this.incX+10;
          if(this.incX>40)
          {
            this.incX=0;
            this.incY=this.incY+10;
          }
          break;
        }
      }
      busy='selectTray';
      //game.paused = false;
      break;
    case 2:
      console.log("Military Sub action 2")
      //move a token to the leader's location
      var victory_points = 0;
      for(i=0;i<littlePeople.length;i++)
      {
        if(legionairreCamp.contains(littlePeople.getAt(i).position.x,littlePeople.getAt(i).position.y))
        {
          //console.log("x position thing is " + this.incX2 + " y position thing is " + this.incY2);
          littlePeople.getAt(i).position.x = leader.getAt(0).position.x+this.incX2;
          littlePeople.getAt(i).position.y = leader.getAt(0).position.y+this.incY2;
          //game.world.bringToTop(littlePeople.getAt(i));
          this.incX2 = this.incX2+10;
          if(this.incX2>40)
          {
            this.incX2=0;
            this.incY2=this.incY2+15;
          }
          break;
        }
      }
      busy='selectTray';
      //game.paused = false;
      break;
    case 3:
      console.log("Military Sub action 3")
      //move your leader to an adjacent space
      //possible overlap function?
      //this.moveLeader();

      //busy='selectTray';
      //game.paused = false;
      break;
    default:
      //You broke it
      break;
    }

    return victory_points;
}

Military.prototype.moveTokenToMilitaryCamp = function() {
  //TODO move tokens from player's token board to the military camp
    //add a token to the military camp

}


Military.prototype.moveLeader = function() {
  //TODO move the current player's leader to an adjacent space


}

Military.prototype.moveTokenToLeader = function() {
  //TODO move a token from the military camp to the current leader's position

}
