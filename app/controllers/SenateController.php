<?php

use actions\SenateAction;


class SenateController extends Controller {

  public function action(){
    $this->senate = new SenateAction(Input::get('location'));
    return Response::json(array('senate' => $this->senate));
  }
}
