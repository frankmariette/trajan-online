<?php

namespace Trajan\Actions;

class SenateAction {

  public $currentTileSpotPoints;
  protected $player;

  public function __construct($currentTileSpotPoints=null){
    // $this->player = new User($playerId);
    $this->currentTileSpotPoints = $currentTileSpotPoints;
  }

  public function advanceTile(){
    if ($this->currentTileSpotPoints < 8){
      $nextSpacePoints = $this->getNextTilesVictoryPoints();
      $this->addVictoryPointsToPlayerScore($nextSpacePoints);
      return true;
    }
    // If player is unable to advance
    return false;
  }

  private function addVictoryPointsToPlayerScore($points){
    $this->player->addVictoryPoints($points);
  }

  private function getNextTilesVictoryPoints(){
    // This function called doesnt exist. Estimation for how it would work.
    // return GameBoard::returnNextLocationVictoryPoints($this->currentTileSpot);
  }

}
