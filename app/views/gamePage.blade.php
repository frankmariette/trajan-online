@extends('layouts.master')

@section('content')
  <style type="text/css">
   body{
    overflow: auto;
   }
  </style>

  <script src='//cdnjs.cloudflare.com/ajax/libs/phaser/2.1.2/phaser.min.js'></script>
  <script src='js/loadGame.js'></script>
  <script src='js/createSprites.js'></script>
  <script src='js/turnLogic.js'></script>
  <script src='js/seaportLogic.js'></script>
  <script src='js/forumLogic.js'></script>
  <script src='js/militaryLogic.js'></script>
  <script src='js/senateLogic.js'></script>
  <script src='js/trajanLogic.js'></script>
  <script src='js/constructionLogic.js'></script>
  <script src='js/getTray.js'></script>
  <script src='js/placeMarkers.js'></script>
  <script>

    var game = new Phaser.Game(1300, 1800, Phaser.AUTO, 'gameboard', {preload: preload, create: create, update: update});

    function preload() { //load images for each game piece
      loadImages();
    }

    var cTiles, tTiles, bTiles, mTiles, fTiles, aMarks, pMarks, littlePeople, TrayGroup1, TrayGroup2, TrayGroup, senateTrayGroup, trajanTrayGroup, constructionTrayGroup, text;
    var graphics, seaportTray, forumTray, miltaryTray, senateTray, trajanTray, constructionTray;

    function create() { //initial positions of all pieces on gameBoard
      createSprites();
    }

    function update() {
      // turnLogic(); //do we need to send current player info?
      senateLogic();
      game.paused = true;
    }
  </script>


@stop
