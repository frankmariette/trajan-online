<?php

class ForumAction{
	
	protected $player;

public function __construct($playerId, $forumTilePositions){

	$this->player = new User($playerId);
	$this->$forumTilePositions = $forumTilePositions;
}

public function getTile($playerId){
	$this->player->$userSelection  //Get user selected tile
	//GET TILE
}

}

?>