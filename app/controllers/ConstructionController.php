<?php

use Trajan\helper\ConstructionHelper;
use Trajan\validator\ConstructionValidator;

  class ConstructionController extends BaseController {

    protected function ConstructionController(){

      /* construction helper class*/
      /*$ConstructionHelper = new ConstructionHelper();
      /* get number of actions user will make*/
      $NumActions = $ConstructionHelper->getNumActions();
      $playernum;

      /* for each action user makes*/
      /*for ($num=0;$num<=$NumActions;$num++) {

        /* which of the two options did player choose*/
      $action = $ConstructionHelper->getConstructionAction();

      switch ($action){

        case 0:
          /* Move small player token to worker camp */

          $ConstructionHelper->SetNumWorkersInWorkerCamp($playernum, $ConstructionHelper->$getNumWorkersInWorkerCamp($playernum) + 1);
          $ConstructionHelper->SetTokenCount($playernum, $ConstructionHelper->$getTokenCount($playernum) - 1 );
          break;
        case 1:
          /* check if it is first time moving a worker to construction site*/
          $IsFirstTime = $ConstructionHelper->getIsFirstTime();
          if ($IsFirstTime == False)
          {
            /* Move worker to adjacent construction space*/
            $invariant = false;
            while ($invariant == false){
              $SelectedTile;
              $invariant = $ConstructionValidator->CheckForAdjacentTiles($SelectedTile,$playernum);
            }
            $ConstructionHelper->SetWorker($SelectedTile,$playernum);

          } else ($IsFirstTime == True){
            $invariant = false;
            while ($invariant == false){
              $SelectedTile;
              $invariant = $ConstructionValidator->CheckForAvailableTiles($SelectedTile,$playernum);
            }
          }
            $ConstructionHelper->SetWorker($SelectedTile,$playernum);

          break;


        default:
          echo "error";
      }

    }
  }
