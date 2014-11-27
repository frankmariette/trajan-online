<?php

use Trajan\actions\TrajanAction;

class TrajanController extends BaseController {

	public function action() {
		$this->trajan = new TrajanAction(Input::get('tTile'));
		if ($this->trajan->storeTile()) {
			return Response::json(array('trajan' => $this->trajan->tilesOwned));
		} else {
			return false;
		}
	}
	
}

?>