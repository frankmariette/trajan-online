<?php
namespace Trajan\helper;

class trajanHelper {

public $bTiles;
public $tileSpaces = array(null, null, null, null, null, null);


	public function getNumberOfTilesOwned() {
		//Need to get the number of tiles that the player owns from the gameboard.
		//Could use a marker or variable that keeps the Trajan Tile Spaces so I can see which spaces have been taken.
		$tileSpaces[] = [$this->$tTiles[0], $this->$tTiles[1], $this->$tTiles[2], $this->$tTiles[3], $this->$tTiles[4], $this->tTiles[5]]
		$i = 0;
		for ($i=0;$i < 6; $i++) {
			if (tileSpaces[$i] != null) {
				$count += 1;
			}
		}
		return $count;
	}
	
	public function checkDoubleAction() {
		//This should check to see if there is a bonus trajan action tile being used, if so then do the
		// trajan action again. If there are two bonus actions then decrement the bonus action before continuing.
		
	}
	
}
?>