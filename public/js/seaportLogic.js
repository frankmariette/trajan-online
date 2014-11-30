function SeaportShip(){
  this.vp = 0;
}
function shipsActive(ship){
  if(busy != 'seaport'){
    return;
  }
  ship.inputEnabled = true;
  ship.animations.add("flip", 0, false);
  ship.events.onInputDown.add(flip, this); //if this piece is clicked, flip

}
var $side = "color"; //tracks which side is face up..sometimes
function flip(ship){
  ship.play("flip");
  if($side == "color"){
    $side = "grey";
    vp += 5;
    console.log(vp);
  }
  else{
    $side = "color";
    vp += 2;
    console.log(vp);
  }
}
