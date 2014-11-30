<?php 
class Seaport{
	public $playerCards;
	public $faceDownCards;
	public $discardOne;
	public $discardTwo;
	public function doAction(){}
	public function shipCommodity(&$chosenCards){
		if(seaportValidity($chosenCards)){
			$vp = seaportValidity($chosenCards);
			return $vp;
		}
		else
			return $error;
	}
	public function drawTwo(&$faceDownCards, &$discardOne, &$discardTwo){
		//add two random cards to player hand
		$playerCards[] = array_rand($faceDownCards);
		$playerCards[] = array_rand($faceDownCards);
		//discard one random
		$choose = rand(1,2);
		if($choose == 1)
			$discardOne = $playerCards[$disc_id];
		else
			$discardTwo = $playerCards[$disc_id];
		unset($playerCards[$disc_id]);
	}
	public function drawOne(&$discardOne, &$discardTwo){
		if($choice == 1)
			$playerCards[] = array_rand($discardOne);
		else
			$playerCards[] = array_rand($discardTwo);
	}
	public function playCards(&$playerCards){
		if($playOne){
			$display[] = $playerCards[$index];
			unset($playerCards[$index]);
		}
		else{
			$display[] = $playerCards[$choice1];
			$display[] = $playerCards[$choice2];
			unset($playerCards[$choice1]);
			unset($playerCards[$choice2]);
		}
	}
}
?>
