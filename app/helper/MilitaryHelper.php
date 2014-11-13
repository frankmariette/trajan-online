<?php

class MilitaryHelper {
  /**
   * The database table used by the model.
   *
   * @var string
   */
  protected $tokenCount;

  public function __construct(){
      //instantiate the object to use the methods
  }

  public function getMilitarySubAction(){
    //loop through until they select a valid action
  }

  public function MoveTokenToMilitaryBase(){
    //move a token to the military base and subtract one from the playerboard mat
  }

  public function MoveToAdjProvidence(){
    //check for adjacent areas and move to it if its adjacent
    //idea:
    //  1) look at gameboard and number each space 1 to numOfSpaces
    //  2) create adjacency list of this "graph"
    //  3) check adjacency list and only allow the player to move to providences
    //      which are part of the current providences index-1 index of the list
  }

  public function grabTilesOffProvidence($providence){
    //check if the providence has a tile, if so, grab it and place on playerboard mat
  }
  public function getEnemyCount($providence){
    //get the number of enemy tokens in the providence
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
    return $numVP;
  }

  public function getNumActions(){
    //check if tiles are discarded for multiple actions
    //if so, add them up and return them
    return $numActions;
  }

  public function setNumActions($actionCount){
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
}
