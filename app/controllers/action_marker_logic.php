<?
 
/******************************************************************/
/* randTray() will generate a random action tray array for setup. */
/* Two pieces will be put in each of the six trays.               */
/* The generated tray array is returned as the output.            */
/******************************************************************/
function randTray($tray){
	$color = array("pink", "orange", "yellow", "white", "green", "blue",);
	$color2 = $color;
	$count = array(1,2,3,4,5,6,);
	$i = 0;
	while($color!=null && $color2!=null){
		if($tray[$i]==null && $tray[$i][1]==null){
			$check = array_rand($color);
			$tray[$i][]=$color[$check];
			unset($color[$check]);
			$check = array_rand($color2);
			$tray[$i][]=$color2[$check];
			unset($color2[$check]);
			$i++;
		}		
	}
	return $tray;
}

/*****************************************************************************/
/* move() will take an action tray array (&$tray) and a selected tray($tid). */
/* It splits the pieces in the tray one by one to the next consecutive tray. */
/*****************************************************************************/
function move(&$tray, $tid){
	$k = 0;
	$count = count($tray[$tid]);
	while($k<$count){
		$spot = $tid+$k+1;
		if($spot>5){
			$spot -= 6;
		}
		$tray[$spot][] = $tray[$tid][$k];
		unset($tray[$tid][$k]);
		$k++;
	}	
}

/******************************************************************************/
/* Notes:																	  */
/* 	  Additional functionality to be added--                                  */
/*      1. Ability to manually create tray array.				     		  */
/*      2. In move() - Ability to choose which pieces to move to next tray.   */
/******************************************************************************/

?>