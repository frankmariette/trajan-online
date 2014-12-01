function cardsActive(card){
  if(busy != 'seaport'){return;}
  card.inputEnabled = true;
  card.events.onInputDown.add(move, this);

}
function move(card){
  if(hand[0]){
    card.position.x = 125;
    card.position.y = 1300;
    hand[0] = false;
    console.log("yessir");
  }
  else if(hand[1]){
    card.position.x = 125;
    card.position.y = 1500;
    hand[1] = false;
  }
  else if(hand[2]){
    card.position.x = 125;
    card.position.y = 1700;
    hand[2] = false;
  }
  else if(hand[3]){
    card.position.x = 125;
    card.position.y = 1900;
    hand[3] = false;
  }

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
