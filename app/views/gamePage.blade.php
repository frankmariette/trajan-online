@extends('layouts.master')

@section('content')
  <style type="text/css">
   body{
    overflow: auto;
   }
  </style>
  <div id="gameboard"></div>

  <script src='//cdnjs.cloudflare.com/ajax/libs/phaser/2.1.2/phaser.min.js'></script>
  <script src='/assets/loadGame.js'></script>
  <script src='/assets/createSprites.js'></script>
  <script src='/assets/turnLogic.js'></script>
  <script src='/assets/seaportLogic.js'></script>
  <script src='/assets/forumLogic.js'></script>
  <script src='/assets/militaryLogic.js'></script>
  <script src='/assets/senateLogic.js'></script>
  <script src='/assets/trajanLogic.js'></script>
  <script src='/assets/constructionLogic.js'></script>
  <script>

    var game = new Phaser.Game(1300, 1800, Phaser.AUTO, 'gameboard', {preload: preload, create: create, update: update});
    // var game = new Phaser.Game('100', '100', Phaser.AUTO, 'gameboard', {preload: preload, create: create, update: update});

    function preload() { //load images for each game piece
      loadStuff();
    }

    var cTiles, tTiles, bTiles, mTiles, fTiles, aMarks, pMarks, tray1, tray2, tray3, tray4, tray5, tray6, text;
    var graphics, t1, t2, t3, t4, t5, t6;

    function create() { //initial positions of all pieces on gameBoard
      createSprites();
    }

    function update() {
      turnLogic(); //do we need to send current player info?
    }
  </script>


@stop
