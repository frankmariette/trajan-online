@extends('layouts.master')
@section('style')
  <!--body{ margin: 0; }
  canvas{ width: 100%; height: 100%;}-->

@stop
@section('body');

  <!--<script src='//cdnjs.cloudflare.com/ajax/libs/three.js/r69/three.min.js'></script>-->
  <script src='//cdnjs.cloudflare.com/ajax/libs/phaser/2.1.2/phaser.min.js'></script>
  <script>

    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

    function preload() {
      game.load.image('gameBoard', 'public/assets/gameBoardTexture.png');
      game.load.image('playerBoard', 'public/assets/pBoardTexture.png');
      game.load.image('tile', 'assets/trajanTile00Texture.png');
      game.load.image('card', 'public/assets/cCardWheatTexture.png');
    }

    function create() {
      game.add.sprite(0, 0, 'tile');
    }

    function update() {
    }




/*
      init();
      animate();
      var mesh, renderer, scene, camera;

    function init(){
      scene = new THREE.Scene();
			camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );

		  var loader = new THREE.JSONLoader(true);
      loader.load("models/actionMarkers.json", function(geometry){
        var material = new THREE.MeshNormalMaterial({color:  0x00ff00});
        mesh = new THREE.Mesh(geometry, material);
        mesh.scale.set(10, 10, 10);
        mesh.position.y = 0;
        mesh.position.x = 0;
        scene.add(mesh);
      });
			camera.position.z = 5;

      document.body.appendChild( renderer.domElement );
}

    function animate(){
			var render = function () {
				requestAnimationFrame( render );
				renderer.render(scene, camera);
        //mesh.rotation.x += 1;
			};

			render();
    }
*/
  </script>


@stop
