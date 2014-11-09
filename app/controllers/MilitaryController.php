<?php

class MilitaryController extends Controller {

  /**
   * Setup the logic for Military Actions
   * setup the logic for the military action types
   * 1 == Relocate small player token to military camp
   * 2 == move leader to adjacent province
   * 3 == Move legionnaire to current province of their leader
   * @return void
   */
  protected function MilitaryAction()
  {
    $action //set this from gamestate
    $this->gameData = new \models\MilitaryAction();
    $tokenCount= $this->gameData->getTokenCount();
    $numActions = this->gameData->getNumActions();
    $actionCount = 0;
    for($actionCount = 0; $actionCount<$numActions;$actionCount++)
    {
      switch $action{
        case 1:
          //Relocate small player token to military camp
          //check num of military tokens on playermat
          $numTokens = $tokenCount;
          if($numTokens<=0)
          {
            //Can't add a token to military camp
            //prevent the move and inform the user to reselect subaction
          }
          else
          {
            //move token to military camp

            //subtract token from game logic
            this->gameData->setTokenCount($tokenCount-1);
          }
          break;
        case 2:
          //move leader to adjacent province

          //check for adjacent providence

          //get num of enemy tokens on space
          $enemyTokenCount = 0;
          $i = 0;
          $providence
          $numVP = this->gameData->getProvidenceVP($providence);
          //grab any tiles on the providence

          //subtract 3 points for each enemy token on the providence
          if($enemyTokenCount>0)
          {
            for($i =0;i<$enemyTokenCount;i++)
            {
              $numVP = $numVP - 3;
              if($numVP<=0)
              {
                $numVP =0;
              }
            }
          }
          this->gameData->moveNumVPPoints($numVP);
          break;
        case 3:
          //move legionnaire to current province of their leader

          if(this->gameData->checkProvidence($providence))
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
      }
    }
  }

}
