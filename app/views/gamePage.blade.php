@extends('layouts.master')

@section('content')
  <style type="text/css">
   body{
    overflow: auto;
   }
  </style>

  <script src='//cdnjs.cloudflare.com/ajax/libs/phaser/2.1.2/phaser.min.js'></script>
  <script src="js/mainGame.js"></script>
  <script type="text/javascript">
    var G = new Game();
    setTimeout(G.turnLogic, 5000);





    function create() { //initial positions of all pieces on gameBoard
      Military();
      createSprites();
      
    }

    function update() {
      turnLogic(); //do we need to send current player info?
//      game.paused = true;
      // use this line to print out mouse coords. Useful for placement
      console.log(game.input.activePointer.positionDown.x, game.input.activePointer.positionDown.y);
    }
  </script>


@stop
