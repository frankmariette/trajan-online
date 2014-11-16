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

  public function __construct(){
      //instantiate the object to use the methods
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
    else if($input == 3 && getNumTroopsInMilitaryCamp()<=0)
    {
      //"move token from military camp to providence" action
      //if this loop is hit, it means there isnt any available troops in the military camp
      echo "You don't have any troops in your military camp to move to your leader!";
      getMilitarySubAction();
    }

    return $input;

  }

  public function grabTileOffProvidence($providence){
    //check if the providence has a tile, if so, grab it and place on playerboard mat

    //CHECK IF PROVIDENCE HAS A TILE

    //IF YES, GRAB IT
  }

  public function getEnemyCount($providence){
    //get the number of enemy tokens in the providence
    //not sure how to handle this yet
    return $enemyTokenCount;
  }

  public function getTokenCount(){
    //grab token amount from gamestate
    return $tokenCount;
  }

  public function setTokenCount($num){
    $tokenCount = $num;
  }

  public function getProvidenceVP($pID){
    //grab the num of vp based on pID from gameboard
    //setup array with different vp values based on index
    return $numVP;
  }

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

  public function moveNumVPPoints($vp){
    //move the gamestate the num of spaces to the input vp
  }

  public function checkProvidence($pID){
    //check the providence for allied troops
    $legionnairePresent;
    if($legionnairePresent)
      return true;
    else
      return false;
  }

  public function getNumTroopsInMilitaryCamp()
  {
    return $militaryTroopCount;
  }

  public function setNumTroopsInMilitaryCamp($num)
  {
    $militaryTroopCount = $num;
  }

  public function getLeaderLocation(){
    return $leaderLocation;
  }

  public function setLeaderLocation($pid)
  {
    $leaderLocation = $pid;
  }
}
