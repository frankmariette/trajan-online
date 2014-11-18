<?php

	namespace Trajan\Actions;
	
	class TrajanTileAction {
	
	public $pickedTrajanTile;
	public $archPosition;
	public $trajanTilesOwned;
	public $trajanTilePosition;

	/*if (archPosition == 6) {
		printf("Can't perform action until there is an open Trajan space.");
		return 0;
	}*/
	
	//picking up tile and place where arch was.
	public function pickingNewTrajanTile($trajanTilesOwned, $pickedTrajanTile, $archPosition, $trajanTilePosition) {
		int pickedTrajanTile; //get the tile the player picked up
		int maxTrajanTilesOwned = count(trajanTilesOwned[]);
		trajanTilesOwned[maxTrajanTilesOwned - 1] = pickedTrajanTile; //adds new tile to the player collection
		trajanTilePosition[trajanArchPosition] = pickedTrajanTile; //places new tile where arch was.
		int tilesOwned + 1;
		moveArch(trajanTilePosition, trajanArchPosition);
		if (trajanDoubleAction == 1 || trajanDoubleAction == 2) {
			trajanDoubleAction - 1;
			TrajanTileAction();
		}
	}
	//Move the arch to next open position (clockwise)
	public function moveArch($archPosition, $trajanTilePosition) {
		int fullRotation = 0;
		int restRotation = trajanTilePosition[archPosition];
		int possibleArchPosition;
		
		//This will loop through the remains of the tile array to see if there is an open space. If there isn't
		//Then we will loop through the entire array to find the spaces before the arch.
		for (restRotation = trajanTilePosition[trajanArchPosition]; restRotation < 6; restRotation++) {
			if (trajanTilePosition[restRotation] == 0) {
				archPosition = trajanTilePosition[restRotation]
				return 0;
			}
		}
		
		//The loop that will go through the full array to determine any open spaces before the arch.
		for (fullRotation = 0; fullRotation < 6; fullRotation++) {
			if (trajanTilePosition[fullRotation] == 0) {
				archPosition = trajanTilePosition[fullRotation];
				return 0;
			}
		}
		moveArchToMiddle();
		return 0;
	}
	
	// if there is nowhere to put the arch then put it in the middle
	public function moveArchToMiddle() {
		if (tilesOwned == 6) { //check to make sure all trajan spaces have been taken.
			archPosition = 6; //move arch to the middle
		}
	}
	
	
	}
	
?>