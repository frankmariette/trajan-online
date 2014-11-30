function SeaportShip(){
  this.vp = 0;

}

//ship sprites go at 165, 600; 450, 430; 305, 520
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
    this.vp += 5;
    console.log(this.vp)
  }
  else{
    $side = "color";
    this.vp += 2;
  }
}
