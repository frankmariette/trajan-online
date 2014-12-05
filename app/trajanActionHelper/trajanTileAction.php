<?php
public function trajanTileAction() {

	select case action
		case 'draw 2 cards' {
			commodityCardsInPossession + 2;
			break;
		}
		case 'games demand' {
			gameDemandsOwned + 1;
			break;
		}
		case 'none' {
			playerVP + 90;
			break;
		}
		case 'religion demand' {
			religionDemandsOwned + 1;
			break;
		}
		case 'bread demand' {
			breakDemandsOwned + 1;
			break;
		}
		case 'move 1 to construction' {
			movingConstructors(1);
			break;
		}
		case 'move 2 to construction' {
			movingConstructors(2);
			break;
		}
		case 'move 1 to military' {
			movingSoldiers(1);
			break;
		}
		case 'move 2 to military' {
			movingSoldiers(2);
			break;
		}
		case 'plus 2 marker' {
			addingPlus2Marker();
			break;
		}
}
?>