<?php
use \models\MilitaryAction as MilitaryAction;
use \helper\MilitaryHelper as MilitaryHelper;

class MilitaryController extends BaseController {

  /**
   * Setup the logic for Military Actions
   * setup the logic for the military action types
   * 1 == Relocate small player token to military camp
   * 2 == move leader to adjacent province
   * 3 == Move legionnaire to current province of their leader
   * @return void
   */

  public function MilitaryAction()
  {
    $milHelper= new MilitaryHelper();
    $numActions = $milHelper->getNumActions();
    $actionCount = 0;
    for($actionCount = 0; $actionCount<$numActions;$actionCount++)
    {
      //have player select one of 3 options for Military Action
      $action = $milHelper->getMilitarySubAction();
      switch $action
      {
        case 1:
          /*
          * Relocate small player token to military camp
          */
          $milHelper->MoveTokenToMilitaryBase();
          break;
        case 2:
          /*
          * move leader to adjacent province
          */
          //check for adjacent providence
          $providence = $milHelper->MoveToAdjProvidence();
          $numVP = $milHelper->getProvidenceVP($providence);

          //get num of enemy tokens on space variable
          $enemyTokenCount = $milHelper->getEnemyCount($providence);
          $i = 0;

          //subtract 3 points for each enemy token on the providence
          if($enemyTokenCount>0)
          {
            for($i =0;i<$enemyTokenCount;$i++)
            {
              $numVP = $numVP - 3;
              if($numVP<=0)
              {
                $numVP = 0;
              }
            }
          }
          else
          {
            //grab any tiles on the providence
            $milHelper->grabTilesOffProvidence($providence);
          }
          $milHelper->moveNumVPPoints($numVP);
          break;
        case 3:
          /*
          * move legionnaire to current province of their leader
          */

          if($milAction->checkProvidence($providence))
          {
            //move the legionnaire to this providence
          }
          else
          {
            echo "Illegal placement. Place on providence of Legionnaire";
          }
          break;
        default:
          echo "No military sub-action was selected. Something broke. (hit default case)";
      }//end switch
    }//end for loop
  }//end constructor

}
