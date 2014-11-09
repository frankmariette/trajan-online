<? 
//add two random color markers to each tray
function randTray($tray){
	$color = array("pink", "orange", "yellow", "white", "green", "blue",);
	$color2 = $color;
	$count = array(1,2,3,4,5,6,);
	//$count2 = $count;
	$i = 0;
	while($color!=null){
		$check = array_rand($color);
		if($tray[$i]==null){
			$tray[$i][]=$color[$check];
			unset($color[$check]);
			$i++;
		}
		else
			echo "nope\n";
	}
	$i = 0;
	while($color2!=null){
		$check = array_rand($color2);
		if($tray[$i][1]==null){
			$tray[$i][]=$color2[$check];
			unset($color2[$check]);
			$i++;
		}
		else
			echo "nope\n";
	}
	return $tray;
}

$tray = randTray($tray);
echo "tray\n------\n";

function move(&$tray, $tid){
	$k = 0;
	while($tray[$tid][$k]!=null){//change to hard count, ...while < array_count
		$spot = $tid+$k+1;
		if($spot>5){
			$spot -= 6;
		}
		$tray[$spot][] = $tray[$tid][$k];
		unset($tray[$tid][$k]);
		$k++;
	}	
}
$test = array(array("pink", "pink", "yellow", "yellow", "green", "green"), array(),array(),array(),array(),array(),);
move($test, 0);
//move($tray, 4);

//var_dump($tray);
var_dump($test);
?>
