<?php
use Trajan\models\MilitaryAction as MilitaryAction;
use Trajan\helper\MilitaryHelper as MilitaryHelper;
use Trajan\validators\MilitaryValidators as MilitaryValidators;

Class MilitaryValidators{
  /**
  * Validator class for the military action
  */

  //Adjacency Array by manually labeling the providences (index 0 is military base)
  //each index(providence) has an array of indexes(providences) that are adjacent to it
  protected $adjArray = array(
    array(1,2,6),
    array(0,2),
    array(0,1,3,5,6),
    array(2,4),
    array(3,5,10),
    array(2,4,6,9,10),
    array(0,2,5,7,9),
    array(6,8,9),
    array(7,9),
    array(5,6,7,8,10),
    array(4,5,9)
  );

  public function __construct(){
      //instantiate the object to use the methods
  }

  public function getMilitarySubAction($playernum){
    /*recursive function
    * If its an invalid action selection, re-call this function
    * and make them select again.
    */
    $invariant = false;
    while($invariant == false)
    {
      $input; //get user input for the sub action

      //put this if else in the validator folder
      if($input == 1 && MilitaryHelper->getTokenCount($playernum)<=0)
      {
        //"move tokens from playerboard mat to military camp" action
        //if this loop is hit, it means there isnt any available troops to move into
        //the military camp
        echo "You don't have any troops to move into the military camp!";
      }
      else if($input == 3 && getNumTroopsInMilitaryCamp($playernum)<=0)
      {
        //"move token from military camp to providence" action
        //if this loop is hit, it means there isnt any available troops in the military camp
        echo "You don't have any troops in your military camp to move to your leader!";
      }
      else
      {
        $invariant = true;
      }
    }
    return $input;
  }

  public function checkForAdjacentProvidences($troopLoc, $pID){
    $subArraySize = count($adjArray[$troopLoc]);
    for($i = 0;$i<$subArraySize;$i++)
    {
      if($adjArray[$troopLoc][$i] == $pID)
      {
        return true;
      }
    }
    return false;
  }
}
?>
