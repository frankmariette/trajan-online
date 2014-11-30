@extends('layouts.master')

@section('content')
  <style type="text/css">
   body{
    overflow: auto;
   }
  </style>

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
  <script src='js/getTray.js'></script>
  <script src='js/placeMarkers.js'></script>
  <script>

    var game = new Phaser.Game(1300, 1800, Phaser.AUTO, 'gameboard', {preload: preload, create: create, update: update});

    function preload() { //load images for each game piece
      loadStuff();
    }

    var cTiles, tTiles, bTiles, mTiles, fTiles, aMarks, pMarks, littlePeople, tray1, tray2, tray3, tray4, tray5, tray6, text;
    var graphics, seaportTray, forumTray, militaryTray, senateTray, trajanTile, constructionTray;

    function create() { //initial positions of all pieces on gameBoard
      createSprites();
    }

    function update() {
      turnLogic(); //do we need to send current player info?

      // use this line to print out mouse coords. Useful for placement
      // console.log(game.input.activePointer.positionDown.x, game.input.activePointer.positionDown.y);
    }
  </script>


@stop
