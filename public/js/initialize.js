function init() {

	container = document.createElement('div');
	document.body.appendChild(container);

	var info = document.createElement('div');
	info.style.position = 'absolute';
	info.style.top = '10px';
	info.style.width = '100%';
	info.style.textAlign = 'center';
	info.innerHTML = '<a href="http://threejs.org" target="_blank" rel="noopener">three.js</a> - orthographic view';
	container.appendChild(info);

	var aspect = window.innerWidth / window.innerHeight;
	camera = new THREE.OrthographicCamera(frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 1, 2000);
	camera.position.y = 400;

	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xf0f0f0);

	// Grid

	var floor = new THREE.RingGeometry(300,1000,50);
	var material = new THREE.MeshLambertMaterial({color : 0X6366E2});
	var mesh = new THREE.Mesh(floor , material);
	mesh.rotation.z = 0;
	mesh.rotation.y = 0;
	mesh.rotation.x = 300;
	mesh.position.x = 50;
	mesh.position.y = 100;
	scene.add(mesh);



	var floor_2 = new THREE.RingGeometry(900,1100,50);
	var material = new THREE.MeshLambertMaterial({color : 0X636666});
	var mesh = new THREE.Mesh(floor_2 , material);
	mesh.rotation.z = 0;
	mesh.rotation.y = 0;
	mesh.rotation.x = 300;
	mesh.position.x = 50;
	mesh.position.y = 100;
	scene.add(mesh);

	//var gridHelper = new THREE.GridHelper(1000, 20);
	//scene.add(gridHelper);

	// Cubes

	var geometry = new THREE.BoxGeometry(50, 50, 50);
	var material = new THREE.MeshLambertMaterial({ color: 0x112244, overdraw: 0.5 });

	//for ( var i = 0; i < 100; i ++ ) {

	cube = new THREE.Mesh( geometry, material );

	cube.position.x = 50;
	cube.position.y = 150;
	cube.position.z = 50;

	scene.add( cube );


	cube_2 = new THREE.Mesh(geometry, material);
	cube_2.position.x = 50;
	cube_2.position.y = 150;
	cube_2.position.z = 750;

	cube_2.rotation.z = Math.PI / 2;

	scene.add(cube_2)


	// Lights

	var light = new THREE.AmbientLight(0xffffff,0.5);
        
    scene.add(light);
        
    var light1 = new THREE.PointLight(0xffEEff,0.5);
        
    scene.add(light1);


	//loading the car object
	load_object(scene, '../models/car1/model.obj')

	renderer = new THREE.CanvasRenderer();
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	container.appendChild(renderer.domElement);

	stats = new Stats();
	container.appendChild(stats.dom);

	controls = new THREE.OrbitControls( camera, renderer.domElement );
	controls.addEventListener( 'change', render ); // remove when using animation loop
				// enable animation loop when using damping or autorotation
				//controls.enableDamping = true;
				//controls.dampingFactor = 0.25;
	controls.enableZoom = false;

	initCollision();

	//

	window.addEventListener('resize', onWindowResize, false);

}