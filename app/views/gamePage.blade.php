@extends('layouts.master')
@section('style')
  body{ margin: 0; }
  canvas{ width: 100%; height: 100%;}
@stop
@section('body');
  <script src='//cdnjs.cloudflare.com/ajax/libs/three.js/r69/three.js'></script>
  <script src='//cdnjs.cloudflare.com/ajax/libs/three.js/r69/three.min.js'></script>
  <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
  <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
  <script>

      init();
      animate();
      var mesh, renderer, scene, camera;

    function init(){
      scene = new THREE.Scene();
			camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );

			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

      var loader = new THREE.JSONLoader(true);
      loader.load("models/gameBoardNoT.json", function(geometry, materials){
        mesh = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
        mesh.scale.set(10, 10, 10);
        mesh.position.y = 150;
        mesh.position.x = 0;
        scene.add(mesh);
      }, "models/gameBoardTexture.tif");
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

  </script>
@stop
