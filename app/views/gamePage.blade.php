@extends('layouts.master')

@section('body');


  <script src='//cdnjs.cloudflare.com/ajax/libs/phaser/2.1.2/phaser.min.js'></script>
  <script>

    var game = new Phaser.Game(1300, 1800, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    function preload() {
      game.load.image('gameBoard', '/assets/gameBoardTexture.png');
      game.load.image('playerBoard', '/assets/pBoardTexture.png');
      game.load.image('tile', '/assets/TEST.png');
      game.load.image('card', '/assets/cCardWheatTexture.png');
      game.load.image('trajan', '/assets/trajanTile00Texture.png')
    }

    function create() {
      var background = game.add.sprite(150, 0, 'gameBoard');
      background.scale.setTo(.3, .3);
      var player = game.add.sprite(275, game.world.height-500, 'playerBoard');
      player.scale.setTo(.15, .15);

      cTiles = game.add.group();
      cTiles.scale.setTo(.75);

      var cTile0 = cTiles.create(950, game.world.height - 1260, 'tile');
      var cTile1 = cTiles.create(1052, game.world.height - 1260, 'tile');
      var cTile2 = cTiles.create(1155, game.world.height - 1260, 'tile');
      var cTile3 = cTiles.create(1257, game.world.height - 1260, 'tile');
      var cTile4 = cTiles.create(1360, game.world.height - 1260, 'tile');
      var cTile5 = cTiles.create(950, game.world.height - 1158, 'tile');
      var cTile6 = cTiles.create(1052, game.world.height - 1158, 'tile');
      var cTile7 = cTiles.create(1155, game.world.height - 1158, 'tile');
      var cTile8 = cTiles.create(1257, game.world.height - 1158, 'tile');
      var cTile9 = cTiles.create(1360, game.world.height - 1158, 'tile');
      var cTile10 = cTiles.create(950, game.world.height - 1058, 'tile');
      var cTile11 = cTiles.create(1052, game.world.height - 1058, 'tile');
      var cTile12 = cTiles.create(1155, game.world.height - 1058, 'tile');
      var cTile13 = cTiles.create(1257, game.world.height - 1058, 'tile');
      var cTile14 = cTiles.create(1360, game.world.height - 1058, 'tile');
      var cTile15 = cTiles.create(950, game.world.height - 956, 'tile');
      var cTile16 = cTiles.create(1052, game.world.height - 956, 'tile');
      var cTile17 = cTiles.create(1155, game.world.height - 956, 'tile');
      var cTile18 = cTiles.create(1257, game.world.height - 956, 'tile');
      var cTile19 = cTiles.create(1360, game.world.height - 956, 'tile');

      tTiles = game.add.group();

      var tTile0 = tTiles.create(300, game.world.height - 850, 'trajan');

      var currentTile = cTile0; //get coordinates of user click, find tile and set it to curretTile/piece
      currentTile.originalPosition = currentTile.position.clone();

      currentTile.inputEnabled = true;
      currentTile.input.enableDrag();
      currentTile.events.onDragStart.add(startDrag, this);
      currentTile.events.onDragStop.add(stopDrag, this);

      function startDrag(currentTile){
        currentTile.body.moves = false;
      }
      function stopDrag(currentTile){
        currentTile.body.moves = true;
        var area = new Phaser.Rectangle(600, game.world.height-1400, 100, 100);
        if(area.contains(currentTile.x, currentTile.y)){ //THIS SHOULD CALL VALIDATOR IN CONTROLLER FOR VALID SPACE BASED ON TILE AND END POSITION
          alert('yes');
        }
        else{
          currentTile.position.copyFrom(currentTile.originalPosition);
        }
      }

    }

    function update() {







    }


  </script>


@stop
