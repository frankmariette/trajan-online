<?php

use Trajan\helper\MilitaryHelper;
use Trajan\validators\MilitaryValidators;

class MilitaryController extends BaseController {

  public function action($playerNum)
  {
    //instantiate the helper in the main function (probably not here)
    $this->milHelper = new MilitaryHelper();
    //instantiate the validator function in the main function (probably not here)
    $this->milValidator = new MilitaryValidators();
    //make this action
    $this->military = new MilitaryAction(Input::get('subAction'), $playerNum);

    $numAction = Input::get('numActions');

    if(Input::get('discardTile') == true)
    {
      $this->military2 = new MilitaryAction(Input::get('subAction'), $playerNum);
    }
    else if(Input::get('discard2Tiles') == true)
    {
      $this->military2 = new MilitaryAction(Input::get('subAction'), $playerNum);
      $this->military3 = new MilitaryAction(Input::get('subAction'), $playerNum);
    }
  }


  }//end constructor

}
