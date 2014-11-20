<?php

namespace Trajan\Actions;

class MilitaryAction {

  /**
   * Setup the logic for Military Actions
   * 1 == Relocate small player token to military camp
   * 2 == move leader to adjacent province
   * 3 == Move legionnaire to current province of their leader
   * @return void
   */
  public function __construct($playernum, $action)
  {
    switch $action
    {
      case 1:
        /*
        * Relocate small player token to military camp
        */

        $this->milHelper->setNumTroopsInMilitaryCamp($playernum, $this->milHelper->$getNumTroopsInMilitaryCamp($playernum) + 1);
        $this->milHelper->setTokenCount($playernum, $this->milHelper->$this->getTokenCount($playernum) - 1);
        break;
      case 2:
        /*
        * move leader to adjacent province
        */
        $invariant = false;
        $this->leaderLoc = $this->milHelper->getLeaderLocation();
        while($invariant == false)
        {
          $selectedProvidence; //user input for a providence
          $invariant = $this->milValidator->checkForAdjacentProvidences($leaderloc, $selectedProvidence);
        }
        $this->milHelper->setLeaderLocation($selectedProvidence);
        $this->milHelper->grabTileOffProvidence($providence);
        break;
      case 3:
        /*
        * move legionnaire to current province of their leader
        */

        $leaderPos = $this->milHelper->getLeaderProvidence();

        $this->milHelper->moveTroopsToProvidence($playernum, $leaderPos);

        //get the number of vp for a providence
        $numVP = $this->milHelper->getProvidenceVP($leaderPos);

        //get num of enemy tokens on space variable
        //playernum is the id of the current players turn
        $enemyTokenCount = $this->milHelper->getEnemyCount($playernum, $leaderPos);
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
        $this->milHelper->moveNumVPPoints($playernum, $numVP);
        break;
      default:
        echo "No military sub-action was selected. Something broke. (hit default case)";
    }//end switch
  }
}
