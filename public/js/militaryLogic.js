function Military(){
  var countries = [
   new Phaser.Rectangle(615,248,350,120), //base
   new Phaser.Rectangle(885,210,150,100), //noricum
   new Phaser.Rectangle(682,155,240,125), //raetia
   new Phaser.Rectangle(713,108,250,80), //germaniaSup
   new Phaser.Rectangle(643,24,210,110), //germaniaInf
   new Phaser.Rectangle(465,73,300,150), //belgica
   new Phaser.Rectangle(325,94,220,200), //lugudunensis
   new Phaser.Rectangle(220,2,420,125), //britannia
   new Phaser.Rectangle(150,162,160,110), //aquitania
   new Phaser.Rectangle(202,236,250,120), //narbonensis
   new Phaser.Rectangle(440,194,280,130) //aepes
  ]

  var vpPts = [
    0,5,3,6,10,6,6,10,10,6,3
  ]

  var incX = 0;
  var incY = 0;
  var incX2 = 0;
  var incY2 = 0;
  var leaderLocVPPts = 0;
  var leaderLoc = countries[0];
  var actionInput = 0;
  var milCheck = false;
}

function militaryLogic()
{
  //game.paused=true;
  var victory_points = 0;
  var actionInput = 0;
  //console.log("military logic call");
  if(milCheck==false)
  {
    G.phaser.textAction.text = "Military Action";
    G.phaser.textAction.text= text.text + "\nLeft- Move Token to Camp \nUp- Move Troop to Leader \nRight- Move leader to Adj Providence";
  }
  keys = G.phaser.input.keyboard.createCursorKeys();
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
      G.moveTokenToMilitaryCamp();
      break;
    case 2:
      //move a token to the leader's location
      var victory_points = 0;
      G.moveTokenToLeader();
      break;
    case 3:
      //move your leader to an adjacent space
      G.moveLeader();
      break;
    default:
      //You broke it
      break;
    }

    return victory_points;
}

function moveTokenToMilitaryCamp() {
  //move tokens from player's token board to the military camp
  //add a token to the military camp
  for(i=0;i<littlePeople.length;i++)
  {
    if(lpStartBox.contains(littlePeople.getAt(i).position.x,littlePeople.getAt(i).position.y))
    {
      littlePeople.getAt(i).position.x = 750+incX;
      littlePeople.getAt(i).position.y = 280+incY;
      //game.world.bringToTop(littlePeople.getAt(i));
      incX=incX+10;
      if(incX>40)
      {
        incX=0;
        incY=incY+10;
      }
      break;
    }
  }
}

function moveTokenToLeader() {
  //move a token from the military camp to the current leader's position
  for(i=0;i<littlePeople.length;i++)
  {
    if(legionairreCamp.contains(littlePeople.getAt(i).position.x,littlePeople.getAt(i).position.y))
    {
      //console.log("x position thing is " + this.incX2 + " y position thing is " + this.incY2);
      littlePeople.getAt(i).position.x = leader.getAt(0).position.x+incX2;
      littlePeople.getAt(i).position.y = leader.getAt(0).position.y+incY2;
      console.log("You get "+leaderLocVPPts + " Vp Points!");
      //game.world.bringToTop(littlePeople.getAt(i));
      incX2 = incX2+10;
      if(incX2>40)
      {
        incX2=0;
        incY2=incY2+15;
      }
      break;
    }
  }
}

function moveLeader() {
  //move the current player's leader to an adjacent
  milCheck = true;
  G.phaser.textAction.text="Select an adjacent providence to move your leader. (click the middle)";
  //game.paused = true;

  G.phaser.input.onUp.add(checkAdj);
}

function checkAdj(){
  //console.log("hit the checkAdj function");
  var xInput = G.phaser.input.activePointer.positionDown.x;
  var yInput = G.phaser.input.activePointer.positionDown.y;
  //console.log("clicked at location: " + xInput + ", "+yInput);
  leader.inputEnabled=true;
  for(i=0;i<countries.length;i++)
    {
      if(countries[i].contains(xInput,yInput))
      {
        console.log("your click has found a square");
        if(Phaser.Rectangle.intersects(leaderLoc,countries[i]))
        {
          //console.log("your click is adjacent to current leader providence");
          //console.log("Country is located at coordinates " + countries[i].x+", "+countries[i].y);
          //console.log("leader is located at coordinates " + leader.getAt(0).position.x+", "+leader.getAt(0).position.y);

          leader.getAt(0).position.x = countries[i].x + 100;
          leader.getAt(0).position.y = countries[i].y -50;
          incX = 0;
          incY = 0;
          leaderLoc = countries[i];
          leaderLocVPPts = vpPts[i];
          milCheck = false;
          leader.inputEnabled=false;
        }
      }
    }
}
