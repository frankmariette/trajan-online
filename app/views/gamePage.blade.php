@extends('layouts.master')
@section('style')
  body{ margin: 0; }
  canvas{ width: 100%; height: 100%;}
@stop
@section('body');
  <script src='//cdnjs.cloudflare.com/ajax/libs/three.js/r69/three.js'></script>
  <script src='//cdnjs.cloudflare.com/ajax/libs/three.js/r69/three.min.js'></script>
  <script>
      init();
      animate();
      var mesh;

    function init(){
      var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			//document.body.appendChild( renderer.domElement );

			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

      var loader = new THREE.JSONLoader(true);
      loader.load("/views/blender_scene/gameBoard.json", function(geometry){
       mesh = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
      mesh.scale.set(10, 10, 10);
      mesh.position.y = 150;
      mesh.position.x = 0;
      scene.add(mesh);
    });
			camera.position.z = 1000;

      document.body.appendChild( renderer.domElement );
    }

    function animate(){
			var render = function () {
				requestAnimationFrame( render );

				mesh.rotation.x += 0.1;
				mesh.rotation.y += 0.1;

				renderer.render(scene, camera);
			};

			render();
    }
  </script>
@stop
