function Military(){
  this.victory_points = 0;

  //continents
  this.britannia = mTiles.create(380, game.world.height - 1783, 'forum');
  this.germaniaInferior = mTiles.create(725, game.world.height - 1735, 'forum');
  this.germaniaSuperior = mTiles.create(910, game.world.height - 1700, 'forum');
  this.belgica = mTiles.create(553, game.world.height - 1676, 'forum');
  this.lugudunensis = mTiles.create(388, game.world.height - 1650, 'forum');
  this.aquitania = mTiles.create(220, game.world.height - 1598, 'forum');
  this.narbonensis = mTiles.create(280, game.world.height - 1485, 'forum');
  this.alpes = mTiles.create(490, game.world.height - 1555, 'forum');
  this.raetia = mTiles.create(780, game.world.height - 1614, 'forum');
  this.noricum = mTiles.create(960, game.world.height - 1596, 'forum');
}

function militaryLogic(actionInput)
{
  switch (actionInput)
    case 1:
      //add a token to the military camp
      this.moveTokenToMilitaryCamp();
      break;
    case 2:
      //move a token to the leader's location
      this.moveLeader();
      break;
    case 3:
      //move your leader to an adjacent space
      //possible overlap function?
      break;
    default:
      break;
    return this.victory_points;
}
