<?php

namespace Trajan\Actions;

class TrajanAction {

	public $pickedTrajanTile;
	public $archPosition;
	public $tilesOwned;
	
	public function __construct($pickedTrajanTile=null) {
		$this->pickedTrajanTile = $pickedTrajanTile;
		$this->archPosition = $archPosition;
		$this->tilesOwned = $tilesOwned;
	}
	
	public function storeTile() {
	//This function will do most of the work for the action. It will take the tile selected from the pile, put it into the array of
	// tiles owned then move the arch over the the next position available clockwise. Then it will check if there is a double action
	// and act accordingly.
		if ($this->archPosition < 6) {
			$maxTilesOwned = $this->trajanHelper->$this->getnumberofTilesOwned();
			$tilesOwned[$maxTilesOwned] = $pickedTrajanTile;
			$archPosition += 1;
			$this->moveArch();
			$this->trajanHelper->$this->checkDoubleAction();
		} else {
			return false;
		}
	}
	
	
	public function moveArch() {
		//First we check if the there is no space to move the arch, if so then we move it to the center.
		if (count($tilesOwned) == 6) {
			$archPosition = 6;
			return true;
		}
		//This will loop through the rest of the array from the arch position.
		for ($restRotation = $tilesOwned[$archPosition], $restRotation < 6; $restRotation+=1) {
			if ($tilesOwned[$restRotation] == null) {
				$archPosition = $tilesOwned[$restRotation];
				return true;
			}
		}
		//This will loop through the whole array after we have checked for the available spaces from the previous loop.
		for ($fullRotation = 0; $fullRotation < 6; $fullRotation+=1) {
			if ($tilesOwned[$fullRotation] == null) {
				$archPosition = $tilesOwned[$fullRotation];
				return true;
			}
		}
	}
}