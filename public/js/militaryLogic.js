function Military(){

  console.log(5);
  this.countries = [
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
  incX = 0;
  incY = 0;
  incX2 = 0;
  incY2 = 0;
  leaderLoc = countries[0];
  actionInput = 0;
  milCheck = false;
}

function militaryLogic()
{
  //game.paused=true;
  var victory_points = 0;
  var actionInput = 0;
  //console.log("military logic call");
  if(milCheck==false)
  {
    text.text = "Military Action";
    text.text= text.text + "\nLeft- Move Token to Camp \nUp- Move Troop to Leader \nRight- Move leader to Adj Providence";
  }
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
      this.moveTokenToMilitaryCamp();
      busy='selectTray';
      //game.paused = false;
      break;
    case 2:
      console.log("Military Sub action 2")
      //move a token to the leader's location
      var victory_points = 0;
      this.moveTokenToLeader();
      busy='selectTray';
      //game.paused = false;
      break;
    case 3:
      console.log("Military Sub action 3")
      //move your leader to an adjacent space
      this.moveLeader();
      //busy='selectTray';
      //game.paused = false;
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
}

function moveTokenToLeader() {
  //move a token from the military camp to the current leader's position
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
}

function moveLeader() {
  //move the current player's leader to an adjacent
  milCheck = true;
  text.text="Select an adjacent providence to move your leader. (click the middle)";
  //game.paused = true;

  game.input.onUp.add(checkAdj);
}

function checkAdj(){
  //console.log("hit the checkAdj function");
  var xInput = game.input.activePointer.positionDown.x;
  var yInput = game.input.activePointer.positionDown.y;
  //console.log("clicked at location: " + xInput + ", "+yInput);
  for(i=0;i<this.countries.length;i++)
    {
      if(this.countries[i].contains(xInput,yInput))
      {
        console.log("your click has found a square");
        if(Phaser.Rectangle.intersects(leaderLoc,countries[i]))
        {
          console.log("your click is adjacent to current leader providence");
          console.log("Country is located at coordinates " + countries[i].x+", "+countries[i].y);
          console.log("leader is located at coordinates " + leader.getAt(0).position.x+", "+leader.getAt(0).position.y);

          leader.getAt(0).position.x = countries[i].x + 100;
          leader.getAt(0).position.y = countries[i].y -50;
          leaderLoc = countries[i];
          milCheck = true;
          busy='selectTray';
        }
      }
    }
}
