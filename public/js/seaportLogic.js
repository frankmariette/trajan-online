function seaportLogic(){

}
//ship sprites go at 165, 600; 450, 430; 305, 520
function shipsActive(ship){
  ship.inputEnabled = true;
  ship.animations.add("flip", 0, false);
  ship.events.onInputDown.add(flip, this); //if this piece is clicked, flip
}
var $side = "color"; //tracks which side is face up..sometimes
function flip(ship){
  ship.play("flip");
  if($side == "color")
    $side = "grey";
  else
    $side = "color";
}
