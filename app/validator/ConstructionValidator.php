<?php

  use Trajan\helper\ConstructionHelper;
  use Trajan\validator\ConstructionValidator;

Class ConstructionValidators{

  protected $WorkerLocationArray = array(
      array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
      array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
      array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
      array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0));

  protected $AdjacencyList = array(
    array(2,6),
    array(1,3,7),
    array(2,4,8),
    array(3,5,9),
    array(4,10),
    array(1,7,11),
    array(2,6,8,12),
    array(3,7,9,13),
    array(4,8,10,14),
    array(5,9,15),
    array(6,12,16),
    array(7,11,13,17),
    array(8,12,14,18),
    array(9,13,15,19),
    array(10,14,20),
    array(11,17),
    array(12,16,18),
    array(13,17,19),
    array(14,18,20),
    array(15,19)

  );


  public function CheckForAdjacentTiles($SelectedTile, $playerid){
    $subArraySize = count($AdjacencyList[$SelectedTile]);


  }



}
