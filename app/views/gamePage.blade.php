@extends('layouts.master')

@section('body');


  <script src='//cdnjs.cloudflare.com/ajax/libs/phaser/2.1.2/phaser.min.js'></script>
  <script>

    var game = new Phaser.Game(1300, 1700, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    function preload() {
      game.load.image('gameBoard', '/assets/gameBoardTexture.png');
      game.load.image('playerBoard', '/assets/pBoardTexture.png');
      game.load.image('tile', '/assets/TEST.png');
      game.load.image('card', '/assets/cCardWheatTexture.png');
    }

    function create() {
      var background = game.add.sprite(150, 0, 'gameBoard');
      background.scale.setTo(.3, .3);
      var player = game.add.sprite(275, game.world.height-400, 'playerBoard');
      player.scale.setTo(.15, .15);

      cTiles = game.add.group();

      var cTile0 = cTiles.create(500, game.world.height - 1500, 'tile');

    }

    function update() {
      //cTile0.x = game.input.x;
    }


  </script>


@stop
