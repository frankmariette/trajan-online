@extends('layouts.master')

@section('content')
  <style type="text/css">
   body{
    overflow: auto;
   }
  </style>
  <div id="gameboard"></div>

  <script src='//cdnjs.cloudflare.com/ajax/libs/phaser/2.1.2/phaser.min.js'></script>
  <script src='/js/loadGame.js'></script>
  <script src='/js/createSprites.js'></script>
  <script src='/js/turnLogic.js'></script>
  <script src='/js/seaportLogic.js'></script>
  <script src='/js/forumLogic.js'></script>
  <script src='/js/militaryLogic.js'></script>
  <script src='/js/senateLogic.js'></script>
  <script src='/js/trajanLogic.js'></script>
  <script src='/js/constructionLogic.js'></script>
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
