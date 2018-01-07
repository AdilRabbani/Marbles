function init() {
	//to be deleted
	container = document.createElement('div');
	document.body.appendChild(container);


	renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('Carts'), antialias: true });
	renderer.setClearColor(0x00ff00);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);

	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xCFD8DC);

	var aspect = window.innerWidth / window.innerHeight;

	// don't erase orthographic camera, i'll try working on this more
	// we'll work on perspective until the game is completed

//	camera = new THREE.OrthographicCamera(window.innerWidth / - 1, window.innerWidth / 1, window.innerHeight / 1, window.innerHeight / - 1, -1000, 10000);
     camera = new THREE.PerspectiveCamera(100,aspect,0.1,3000);
	// camera.position.z = 100;
	camera.position.z = 1000;
	camera.position.y = 100;
	// camera.position.x = 100;

	// camera.lookAt(scene.position);


	var ambient = new THREE.AmbientLight(0xffffff, 1);
	scene.add(ambient);
	// var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
	// scene.add( directionalLight );

	light = new THREE.DirectionalLight( 0xdfebff, 1 );
	light.position.set( 50, 200, 100 );
	light.position.multiplyScalar( 1.3 );
	light.castShadow = true;
	light.shadow.mapSize.width = 1024;
	light.shadow.mapSize.height = 1024;
	var d = 300;
	light.shadow.camera.left = - d;
	light.shadow.camera.right = d;
	light.shadow.camera.top = d;
	light.shadow.camera.bottom = - d;
	light.shadow.camera.far = 1000;
	scene.add( light );


	// Floor

	var floor = new THREE.Geometry();
        floor.vertices.push(

        	new THREE.Vector3(-600,600,0),
        	new THREE.Vector3(-600,0,0),
        	new THREE.Vector3(1100,600,0),

        	new THREE.Vector3(-600,0,0),
        	new THREE.Vector3(1100,0,0),
        	new THREE.Vector3(1100,600,0),

        	new THREE.Vector3(-600,0,0),
        	new THREE.Vector3(-600,-800,0),
        	new THREE.Vector3(0,-800,0),

        	new THREE.Vector3(0,-800,0),
        	new THREE.Vector3(0,0,0),
        	new THREE.Vector3(-600,0,0),

        	new THREE.Vector3(1100,0,0),
        	new THREE.Vector3(500,0,0),
        	new THREE.Vector3(500,-800,0),

        	new THREE.Vector3(500,-800,0),
        	new THREE.Vector3(1100,-800,0),
        	new THREE.Vector3(1100,0,0),

        	new THREE.Vector3(-600,-800,0),
        	new THREE.Vector3(-600,-1400,0),
        	new THREE.Vector3(1100,-1400,0),

        	new THREE.Vector3(1100,-1400,0),
        	new THREE.Vector3(1100,-800,0),
        	new THREE.Vector3(-600,-800,0)

        	);

        floor.faces.push(new THREE.Face3(0,1,2),
        	new THREE.Face3(3,4,5),
        	new THREE.Face3(6,7,8),
        	new THREE.Face3(9,10,11),
        	new THREE.Face3(12,13,14),
        	new THREE.Face3(15,16,17),
        	new THREE.Face3(18,19,20),
        	new THREE.Face3(21,22,23));

        var material = new THREE.MeshLambertMaterial({color : 0X6366E2});
        var mesh = new THREE.Mesh(floor,material);

		mesh.position.x = -300;
		mesh.position.y = 400;

		scene.add(mesh);



		// var fence_1 = new THREE.BoxGeometry(500,800,200);

		// var material = new THREE.MeshLambertMaterial({color : 0X666666});
        // var mesh = new THREE.Mesh(fence_1,material);

		// mesh.position.x = -50;
		// mesh.position.z = 100;

		// scene.add(mesh);

	// Cubes

	var geometry = new THREE.SphereGeometry(30, 30, 30);
	var material = new THREE.MeshLambertMaterial({ color: 0xFF4081, overdraw: 0.5 });

	cube = new THREE.Mesh(geometry, material);
	cube.position.x = -(Math.floor(Math.random() * ((850-350)+1) + 350));
	cube.position.y = -100;
	cube.position.z = 50;

	cube.castShadow = true;
	cube.receiveShadow = true;
	cube.add(camera)

	sphere_1 = new THREE.Sphere(cube.position,50);

	scene.add(cube);

	//console.log(cube.position.x + " , " + cube.position.y + " , " + cube.position.z);

	var material = new THREE.MeshLambertMaterial({ color: 0xFDD835, overdraw: 0.5 });

	cube_2 = new THREE.Mesh(geometry, material);
	cube_2.position.x = -650;
	cube_2.position.y = -100;
	cube_2.position.z = 50;

	cube_2.castShadow = true;
	cube_2.receiveShadow = true;

	sphere_2 = new THREE.Sphere(cube_2.position,50);

	//cube_2.rotation.z = Math.PI / 2;
	scene.add(cube_2);


	///////////////////////////////////////////////////////

		// Trail Experiment

	// var geometry = new THREE.SphereGeometry(8, 8, 8);
	// var material = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, overdraw: 0.5 });

	// trail_1 = new THREE.Mesh(geometry, material);

	// trail_1.position.set(cube.position.x,cube.position.y,cube.position.z);
	// trail_1.position.y = -150;

	// scene.add(trail_1);


	// console.log(trail_1.position.z); 




	//////////////////////////////////////////////////////



	var geometry = new THREE.BoxGeometry(600,50,50);
	var material = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, overdraw: 0.5 });

	checkpoint_1 = new THREE.Mesh(geometry, material);
	checkpoint_1.position.x = -600;
	
	scene.add(checkpoint_1);

	var geometry = new THREE.BoxGeometry(600,50,50);
	var material = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, overdraw: 0.5 });

	checkpoint_2 = new THREE.Mesh(geometry, material);
	checkpoint_2.position.x = -50;
	checkpoint_2.position.y = 700;
	checkpoint_2.rotation.z = 90 * (Math.PI / 180);

	scene.add(checkpoint_2);

	var geometry = new THREE.BoxGeometry(600,50,50);
	var material = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, overdraw: 0.5 });

	checkpoint_3 = new THREE.Mesh(geometry, material);
	checkpoint_3.position.x = 500;

	scene.add(checkpoint_3);


	var geometry = new THREE.BoxGeometry(600,50,50);
	var material = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, overdraw: 0.5 });

	checkpoint_4 = new THREE.Mesh(geometry, material);
	checkpoint_4.position.x = -50;
	checkpoint_4.position.y = -700;
	checkpoint_4.rotation.z = 90 * (Math.PI / 180);

	scene.add(checkpoint_4);

	//console.log(cube_2.position.x + " , " + cube_2.position.y + " , " + cube_2.position.z);

	//loading the car object
	// load_object(scene, '../models/car1/model.obj')


	var geometry = new THREE.BoxGeometry(800,50,50);
	var material = new THREE.MeshLambertMaterial({ color: 0x006064, overdraw: 0.5 });

	fence_1 = new THREE.Mesh(geometry, material);
	fence_1.position.x = -275;
	fence_1.position.y = 0;
	fence_1.rotation.z = 90 * (Math.PI / 180);

	scene.add(fence_1);
		
	var geometry = new THREE.BoxGeometry(800,50,50);
	var material = new THREE.MeshLambertMaterial({ color: 0x006064, overdraw: 0.5 });

	fence_1 = new THREE.Mesh(geometry, material);
	fence_1.position.x = 175;
	fence_1.position.y = 0;
	fence_1.rotation.z = 90 * (Math.PI / 180);

	scene.add(fence_1);


	var geometry = new THREE.BoxGeometry(400,50,50);
	var material = new THREE.MeshLambertMaterial({ color: 0x006064, overdraw: 0.5 });

	fence_1 = new THREE.Mesh(geometry, material);
	fence_1.position.x = -50;
	fence_1.position.y = 375;

	scene.add(fence_1);

	var geometry = new THREE.BoxGeometry(400,50,50);
	var material = new THREE.MeshLambertMaterial({ color: 0x006064, overdraw: 0.5 });

	fence_1 = new THREE.Mesh(geometry, material);
	fence_1.position.x = -50;
	fence_1.position.y = -375;

	scene.add(fence_1);





	var geometry = new THREE.BoxGeometry(2000,50,50);
	var material = new THREE.MeshLambertMaterial({ color: 0x006064, overdraw: 0.5 });

	fence_1 = new THREE.Mesh(geometry, material);
	fence_1.position.x = -920;
	fence_1.position.y = 0;
	fence_1.rotation.z = 90 * (Math.PI / 180);

	scene.add(fence_1);


	var geometry = new THREE.BoxGeometry(2000,50,50);
	var material = new THREE.MeshLambertMaterial({ color: 0x006064, overdraw: 0.5 });

	fence_1 = new THREE.Mesh(geometry, material);
	fence_1.position.x = 820;
	fence_1.position.y = 0;
	fence_1.rotation.z = 90 * (Math.PI / 180);

	scene.add(fence_1);

	var geometry = new THREE.BoxGeometry(1790,50,50);
	var material = new THREE.MeshLambertMaterial({ color: 0x006064, overdraw: 0.5 });

	fence_1 = new THREE.Mesh(geometry, material);
	fence_1.position.x = -50;
	fence_1.position.y = 1020;

	scene.add(fence_1);

	var geometry = new THREE.BoxGeometry(1790,50,50);
	var material = new THREE.MeshLambertMaterial({ color: 0x006064, overdraw: 0.5 });

	fence_1 = new THREE.Mesh(geometry, material);
	fence_1.position.x = -50;
	fence_1.position.y = -1020;

	scene.add(fence_1);
	var jsonLoader = new THREE.JSONLoader();
	jsonLoader.load("../models/car3/_on.js", function (geometry) {
		var mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial() );
		scene.add(mesh) });

	/////////////////////////////////////////////////////

	stats = new Stats();
	container.appendChild(stats.dom);

	controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.addEventListener('change', render); // remove when using animation loop
				// enable animation loop when using damping or autorotation
				//controls.enableDamping = true;
				//controls.dampingFactor = 0.25;
	controls.enableZoom = false;

	window.addEventListener('resize', onWindowResize, false);


	///////////////////////////


	//////////////////////////////////////////////////////////////////////////////////

	// var geometry = new THREE.SphereGeometry(20,50,50);
	// var material = new THREE.MeshLambertMaterial({ color: 0xFF0000, overdraw: 0.5 });

	// ball = new THREE.Mesh(geometry, material);
	// ball.position.x = -280;
	
	// scene.add(ball);

	// var geometry = new THREE.SphereGeometry(20,50,50);
	// var material = new THREE.MeshLambertMaterial({ color: 0xFF0000, overdraw: 0.5 });

	// ball = new THREE.Mesh(geometry, material);
	// ball.position.x = -920;
	
	// scene.add(ball);

	// var geometry = new THREE.SphereGeometry(20,50,50);
	// var material = new THREE.MeshLambertMaterial({ color: 0xFF0000, overdraw: 0.5 });

	// ball = new THREE.Mesh(geometry, material);
	// ball.position.x = -600;
	// ball.position.z = 80;
	
	// scene.add(ball);

	// var geometry = new THREE.SphereGeometry(20,50,50);
	// var material = new THREE.MeshLambertMaterial({ color: 0xFF0000, overdraw: 0.5 });

	// ball = new THREE.Mesh(geometry, material);
	// ball.position.x = -600;
	// ball.position.z = -50;
	
	// scene.add(ball);

	// var geometry = new THREE.SphereGeometry(20,30,30);
	// var material = new THREE.MeshLambertMaterial({ color: 0x770000, overdraw: 0.5 });

	// ball = new THREE.Mesh(geometry, material);
	// ball.position.x = -600;
	// ball.position.y = -40;
	
	// scene.add(ball);

	// var geometry = new THREE.SphereGeometry(20,30,30);
	// var material = new THREE.MeshLambertMaterial({ color: 0x770000, overdraw: 0.5 });

	// ball = new THREE.Mesh(geometry, material);
	// ball.position.x = -600;
	// ball.position.y = 40;
	
	// scene.add(ball);


	// ////////////////////////////////////////////////////


	// //////////////////////////////////////////////////////////////////////////////////

	// var geometry = new THREE.SphereGeometry(20,50,50);
	// var material = new THREE.MeshLambertMaterial({ color: 0xFF0000, overdraw: 0.5 });

	// ball = new THREE.Mesh(geometry, material);
	// ball.position.x = 200;
	
	// scene.add(ball);

	// var geometry = new THREE.SphereGeometry(20,50,50);
	// var material = new THREE.MeshLambertMaterial({ color: 0xFF0000, overdraw: 0.5 });

	// ball = new THREE.Mesh(geometry, material);
	// ball.position.x = 800;
	
	// scene.add(ball);

	// var geometry = new THREE.SphereGeometry(20,50,50);
	// var material = new THREE.MeshLambertMaterial({ color: 0xFF0000, overdraw: 0.5 });

	// ball = new THREE.Mesh(geometry, material);
	// ball.position.x = 500;
	// ball.position.z = 50;
	
	// scene.add(ball);

	// var geometry = new THREE.SphereGeometry(20,50,50);
	// var material = new THREE.MeshLambertMaterial({ color: 0xFF0000, overdraw: 0.5 });

	// ball = new THREE.Mesh(geometry, material);
	// ball.position.x = 500;
	// ball.position.z = -50;
	
	// scene.add(ball);

	// var geometry = new THREE.SphereGeometry(20,30,30);
	// var material = new THREE.MeshLambertMaterial({ color: 0x770000, overdraw: 0.5 });

	// ball = new THREE.Mesh(geometry, material);
	// ball.position.x = 400;
	// ball.position.y = -40;
	
	// scene.add(ball);

	// var geometry = new THREE.SphereGeometry(20,30,30);
	// var material = new THREE.MeshLambertMaterial({ color: 0x770000, overdraw: 0.5 });

	// ball = new THREE.Mesh(geometry, material);
	// ball.position.x = 400;
	// ball.position.y = 40;
	
	// scene.add(ball);


	// ////////////////////////////////////////////////////

	// var geometry = new THREE.SphereGeometry(20,30,30);
	// var material = new THREE.MeshLambertMaterial({ color: 0x00FFFF, overdraw: 0.5 });

	// ball = new THREE.Mesh(geometry, material);
	// ball.position.x = -50;
	// ball.position.y = 390;
	
	// scene.add(ball);

	// var geometry = new THREE.SphereGeometry(20,30,30);
	// var material = new THREE.MeshLambertMaterial({ color: 0x00FFFF, overdraw: 0.5 });

	// ball = new THREE.Mesh(geometry, material);
	// ball.position.x = -50;
	// ball.position.y = 1000;
	
	// scene.add(ball);


	// var geometry = new THREE.SphereGeometry(20,30,30);
	// var material = new THREE.MeshLambertMaterial({ color: 0xFFFF00, overdraw: 0.5 });

	// ball = new THREE.Mesh(geometry, material);
	// ball.position.x = -50;
	// ball.position.y = 700;
	// ball.position.z = 50;
	
	// scene.add(ball);

	// var geometry = new THREE.SphereGeometry(20,30,30);
	// var material = new THREE.MeshLambertMaterial({ color: 0xFFFF00, overdraw: 0.5 });

	// ball = new THREE.Mesh(geometry, material);
	// ball.position.x = -50;
	// ball.position.y = 700;
	// ball.position.z = -50;
	
	// scene.add(ball);

	// var geometry = new THREE.SphereGeometry(20,30,30);
	// var material = new THREE.MeshLambertMaterial({ color: 0x00FF00, overdraw: 0.5 });

	// ball = new THREE.Mesh(geometry, material);
	// ball.position.x = -20;
	// ball.position.y = 700;
	
	// scene.add(ball);

	// var geometry = new THREE.SphereGeometry(20,30,30);
	// var material = new THREE.MeshLambertMaterial({ color: 0x00FF00, overdraw: 0.5 });

	// ball = new THREE.Mesh(geometry, material);
	// ball.position.x = -80;
	// ball.position.y = 700;
	
	// scene.add(ball);


	// ///////////////////////////////////////////////// checkpoint 4


	// var geometry = new THREE.SphereGeometry(20,30,30);
	// var material = new THREE.MeshLambertMaterial({ color: 0x00FFFF, overdraw: 0.5 });

	// ball = new THREE.Mesh(geometry, material);
	// ball.position.x = -50;
	// ball.position.y = -390;
	
	// scene.add(ball);

	// var geometry = new THREE.SphereGeometry(20,30,30);
	// var material = new THREE.MeshLambertMaterial({ color: 0x00FFFF, overdraw: 0.5 });

	// ball = new THREE.Mesh(geometry, material);
	// ball.position.x = -50;
	// ball.position.y = -1000;
	
	// scene.add(ball);


	// var geometry = new THREE.SphereGeometry(20,30,30);
	// var material = new THREE.MeshLambertMaterial({ color: 0xFFFF00, overdraw: 0.5 });

	// ball = new THREE.Mesh(geometry, material);
	// ball.position.x = -50;
	// ball.position.y = -700;
	// ball.position.z = 50;
	
	// scene.add(ball);

	// var geometry = new THREE.SphereGeometry(20,30,30);
	// var material = new THREE.MeshLambertMaterial({ color: 0xFFFF00, overdraw: 0.5 });

	// ball = new THREE.Mesh(geometry, material);
	// ball.position.x = -50;
	// ball.position.y = -700;
	// ball.position.z = -50;
	
	// scene.add(ball);

	// var geometry = new THREE.SphereGeometry(20,30,30);
	// var material = new THREE.MeshLambertMaterial({ color: 0x00FF00, overdraw: 0.5 });

	// ball = new THREE.Mesh(geometry, material);
	// ball.position.x = -20;
	// ball.position.y = -700;
	
	// scene.add(ball);

	// var geometry = new THREE.SphereGeometry(20,30,30);
	// var material = new THREE.MeshLambertMaterial({ color: 0x00FF00, overdraw: 0.5 });

	// ball = new THREE.Mesh(geometry, material);
	// ball.position.x = -80;
	// ball.position.y = -700;
	
	// scene.add(ball);




}