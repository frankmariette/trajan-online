<?php

public function trajanTilePlacement() {

	int totalTrajanTiles = 54;

	for (i=0;i<6;i++) {
		if (TilePlace[i] == 0) {
			newTile = rand(TrajanTile);
			for (j=0;j<5;j++) {
				if (newTile != currentTile[j]) {
					currentTile[i] = newTile;
				}
			}
		}
	}

}
?>