<?php

use \models\ConstructionAction as ConstructionAction();
use \helper\ConstructionHelper as ConstrucitionHelper();

  class ConstructionController extends BaseController {

    protected function ConstructionController(){

      /* construction helper class*/
      $ConstructionHelper = new ConstructionHelper();
      /* get number of actions user will make*/
      $NumActions = $ConstructionHelper->getNumActions();

      /* for each action user makes*/
      for ($num=0;$num<=$NumActions;$num++) {

        /* which of the two options did player choose*/
        $action = $ConstructionHelper->getConstructionAction();

        switch ($action){

          case 0:
            /* Move small player token to worker camp */
            $ConstructionHelper->MoveToWorkerCamp();

          case 1:
            /* check if it is first time moving a worker to construction site*/
            $IsFirstTime = $ConstructionHelper->getIsFirstTime();
            if ($IsFirstTime == TRUE)
            {
              /* Move worker to any construction space*/
              $ConstructionHelper->MoveWorkerAny();
              

            } else {
              /* Move worker to adjacent construction space*/
              $ConstructionHelper->MoveWorkerAdjacent();
            }

          default:
            echo "error";
        }

      }

    }
  }
