<?php

namespace Trajan\Actions;

class SenateAction {

  protected $player;

  public function __construct($currentTileSpotPoints=null){
    // $this->player = new User($playerId);
    $this->currentTileSpotPoints = $currentTileSpotPoints;
  }

/**
 * Helper function for Military Action
 */
protected $tokenCount = array(15,15,15,15);
protected $VPPointArray = array(0,0,0,0);
protected $leaderLocation;
protected $provVPArray = array(0,5,3,6,10,6,3,6,6,10,10);
protected $troopLocationArray = array(
  array(0,0,0,0,0,0,0,0,0,0,0),
  array(0,0,0,0,0,0,0,0,0,0,0),
  array(0,0,0,0,0,0,0,0,0,0,0),
  array(0,0,0,0,0,0,0,0,0,0,0)
);

public function __construct(){
    //instantiate the object to use the methods
}

public function moveTroopsToProvidence($playernum, $providence){
  //moves one legionnaire from the military base to the selected providence
  $troopLocationArray[$playernum][$providence] = $troopLocationArray[$playernum][$providence] + 1;
  $troopLocationArray[$playernum][0] = $troopLocationArray[$playernum][0] - 1;
}

//TODO
public function grabTileOffProvidence($providence){
  //check if the providence has a tile, if so, grab it and place on playerboard mat

  //CHECK IF PROVIDENCE HAS A TILE

  //IF YES, GRAB IT
}

public function getEnemyCount($playernum,$providence){
  //get the number of enemy tokens in the providence
  $enemyTokenCount = 0;
  $arraySize = count($troopLocationArray);
  for($i = 0;$i<$arraySize;$i++)
  {
      if($i!=$playernum){
        if($troopLocationArray[i][$providence]>=0)
        {
          $enemyTokenCount = $enemyTokenCount + $troopLocationArray[i][$providence];
        }
      }

  }
  return $enemyTokenCount;
}

//TODO these will need to be read in from another class, unless i set it in an array here?
public function getTokenCount($playernum){
  //grab token amount from gamestate
  return $tokenCount[$playernum];
}

//TODO these will need to be read in from another class, unless i set it in an array here?
public function setTokenCount($playernum, $num){
  $tokenCount[$playernum] = $num;
}

public function getProvidenceVP($pID){
  //grab the num of vp based on pID from gameboard
  //setup array with different vp values based on index
  return $provVPArray[$pid];
}

//TODO?
public function getNumActions(){
  //check if tiles are discarded for multiple actions
  //if so, add them up and return them
  //this will be set outside of the military controller (before it is called)
  return $numActions;
}

public function setNumActions($actionCount){
  //this will be set outside of the military controller (before it is called)
  $numActions=$actionCount;
}

public function moveNumVPPoints($playernum, $vp){
  $VPPointArray[$playernum] = $VPPointArray[$playernum] + $vp;
}

public function getNumTroopsInMilitaryCamp($playernum)
{
  return $troopLocationArray[$playernum][0];
}

public function setNumTroopsInMilitaryCamp($playernum,$num)
{
  $troopLocationArray[$playernum][0] = $num;
}

//this might need to be set somehwere else as well
public function getLeaderLocation(){
  return $leaderLocation;
}

//this might need to be set somehwere else as well
public function setLeaderLocation($pid)
{
  $leaderLocation = $pid;
}
  private function addVictoryPointsToPlayerScore($points){
    $this->player->addVictoryPoints($points);
  }
}
