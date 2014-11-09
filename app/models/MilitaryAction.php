<?php
use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class MilitaryAction extends Eloquent implements UserInterface, RemindableInterface {
  /**
   * The database table used by the model.
   *
   * @var string
   */
  protected $tokenCount;

  public function getTokenCount(){
    //grab token amount from gamestate
    return $tokenCount;
  }
  public function setTokenCount($num){
    $tokenCount = $num;
  }
  public function getProvidenceVP($pID){
    //grab the num of vp based on pID from gameboard
    return $numVP
  }
  public function getNumActions(){
    //check if tiles are discarded for multiple actions
    //if so, add them up and return them
    return $numActions
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
?>
