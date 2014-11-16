<?php
use \models\MilitaryAction as MilitaryAction;
use \helper\MilitaryHelper as MilitaryHelper;

class MilitaryController extends BaseController {

  /**
   * Setup the logic for Military Actions
   * 1 == Relocate small player token to military camp
   * 2 == move leader to adjacent province
   * 3 == Move legionnaire to current province of their leader
   * @return void
   */

  public function MilitaryAction()
  {
    //instantiate the helper in the main function;
    //$milHelper= new MilitaryHelper();
    $numActions = $milHelper->getNumActions();
    $actionCount = 0;
    $playernum; //the id of the player who is currently on his/her turn

    //have player select one of 3 options for Military Action
    $action = $milHelper->getMilitarySubAction();
    switch $action
    {
      case 1:
        /*
        * Relocate small player token to military camp
        */

        //TODO CHECK IF THEY HAVE TOKENS IN PLAYERBOARD MAT

        $milHelper->setNumTroopsInMilitaryCamp($playernum, $getNumTroopsInMilitaryCamp($playernum) + 1);
        $milHelper->setTokenCount($getTokenCount() - 1);
        break;
      case 2:
        /*
        * move leader to adjacent province
        */
        //TODO check for adjacent providence
        $selectedProvidence; //user input for a providence

        //TODO CHECK IF INPUT IS ADJACENT

        $milHelper->setLeaderLocation($selectedProvidence);
        $milHelper->grabTileOffProvidence($providence);
        break;
      case 3:
        /*
        * move legionnaire to current province of their leader
        */

        $leaderPos = $milHelper->getLeaderProvidence();

        $milHelper->moveTroopsToProvidence($playernum, $leaderPos);

        //get the number of vp for a providence
        $numVP = $milHelper->getProvidenceVP($leaderPos);

        //get num of enemy tokens on space variable
        //playernum is the id of the current players turn
        $enemyTokenCount = $milHelper->getEnemyCount($playernum, $leaderPos);
        $i = 0;

        //subtract 3 points for each enemy token on the providence
        if($enemyTokenCount>0)
        {
          $VPloss = 3*$enemyTokenCount;
          if($numVP<$VPloss)
          {
            $numVP = 0;
          }
          else
          {
            $numVP = $numVP - $VPloss;
          }
        }
        $milHelper->moveNumVPPoints($numVP);
        break;
      default:
        echo "No military sub-action was selected. Something broke. (hit default case)";
    }//end switch
  }//end constructor

}
