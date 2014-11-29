<?php 
class Seaport{
	function __construct(){
		$this->playerCards;
		$this->display;
	}
	public function fillHand(){
		$this->playerCards = array(23, 24, 25, 26, 27);
	}
	public function shipCommodity(&$chosenCards){
		if(seaportValidity($chosenCards)){
			$vp = seaportValidity($chosenCards);
			return $vp;
		}
		else
			return $error;
	}
	/*input parameters are the facedown pile array and the two discard pile arrays*/
	public function drawTwo(&$faceDownCards, &$discardOne, &$discardTwo){
		//add two random cards from facedown pile to player hand
		$draw = array_rand($faceDownCards);
		$this->playerCards[] = $faceDownCards[$draw];
		unset($faceDownCards[$draw]);
		$draw = array_rand($faceDownCards);
		$this->playerCards[] = $faceDownCards[$draw];
		unset($faceDownCards[$draw]);
		//discard one random
		$disc_id = array_rand($this->playerCards);
		$choose = rand(1,2);
		if($choose == 1)
			$discardOne[] = $this->playerCards[$disc_id];
		else
			$discardTwo[] = $this->playerCards[$disc_id];
		unset($this->playerCards[$disc_id]);
	}
	public function drawOne(&$discardPile){
		$draw = array_rand($discardPile);	
		$this->playerCards[] = $discardPile[$draw];
		unset($discardPile[$draw]);
	}
	/*Second index is optional. */
	public function playCards($index1, $index2=null){
		if(!$index2){
			$this->display[] = $this->playerCards[$index1];
			unset($playerCards[$index1]);
		}
		else{
			$this->display[] = $this->playerCards[$index1];
			$this->display[] = $this->playerCards[$index2];
			unset($playerCards[$index1]);
			unset($playerCards[$index2]);
		}
	}
}
?>