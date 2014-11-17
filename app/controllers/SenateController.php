<?php

use Trajan\actions\SenateAction;


class SenateController extends BaseController {

  public function action(){
    $this->senate = new SenateAction(Input::get('location'));
    if ($this->senate->advanceTile()){
      return Response::json(array('senate' => $this->senate->currentTileSpotPoints));
    } else {
      return 'false';
    }

  }
}
