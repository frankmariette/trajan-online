<?php 
class Seaport{
	public $playerCards;
	public $faceDownCards;
	public $discardOne;
	public $discardTwo;
	public function doAction();
	public function tradeCommodity(&$playerCards){
	
	}
	public function drawTwo(&$faceDownCards){
		$playerCards[] = array_rand($faceDownCards);
		$playerCards[] = array_rand($faceDownCards);
	}
	public function drawOne($discardOne, $discardTwo);
}
?>
