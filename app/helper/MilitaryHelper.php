<?php
namespace MilitaryHelper;

class MilitaryHelper {
  /**
   * Helper function for Military Action
   */
  protected $tokenCount = 15;
  protected $enemyTroopCount
  protected $militaryTroopCount;
  protected $leaderLocation;
  protected $provVPArray = array(0,5,3,6,10,6,3,6,6,10,10);
  protected $troopLocationArray = array(
    array(0,0,0,0,0,0,0,0,0,0,0),
    array(0,0,0,0,0,0,0,0,0,0,0),
    array(0,0,0,0,0,0,0,0,0,0,0),
    array(0,0,0,0,0,0,0,0,0,0,0),
  );

  public function __construct(){
      //instantiate the object to use the methods
  }

  public function moveTroopsToProvidence($playernum, $providence){
    //moves one legionnaire from the military base to the selected providence
    $troopLocationArray[$playernum][$providence] = $troopLocationArray[$playernum][$providence] + 1;
    $troopLocationArray[$playernum][0] = $troopLocationArray[$playernum][0] - 1;
  }

  public function getMilitarySubAction(){
    /*recursive function
    * If its an invalid action selection, re-call this function
    * and make them select again.
    */
    $input; //get user input for the sub action

    //put this if else in the validator folder
    if($input == 1 && getTokenCount()<=0)
    {
      //"move tokens from playerboard mat to military camp" action
      //if this loop is hit, it means there isnt any available troops to move into
      //the military camp
      echo "You don't have any troops to move into the military camp!";
      getMilitarySubAction();
    }
    else if($input == 3 && getNumTroopsInMilitaryCamp($playernum)<=0)
    {
      //"move token from military camp to providence" action
      //if this loop is hit, it means there isnt any available troops in the military camp
      echo "You don't have any troops in your military camp to move to your leader!";
      getMilitarySubAction();
    }

    return $input;

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

  //these will need to be read in from another class, unless i set it in an array here?
  public function getTokenCount(){
    //grab token amount from gamestate
    return $tokenCount;
  }

  //these will need to be read in from another class, unless i set it in an array here?
  public function setTokenCount($num){
    $tokenCount = $num;
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

  //TODO
  public function moveNumVPPoints($vp){
    //move the gamestate the num of spaces to the input vp
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
}
