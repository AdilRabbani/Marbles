function init() {
	//to be deleted
	container = document.createElement('div');
	document.body.appendChild(container);


	renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('Carts'), antialias: true });
	renderer.setClearColor(0x00ff00);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);

	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xf0f0f0);

	var aspect = window.innerWidth / window.innerHeight;
	camera = new THREE.OrthographicCamera(window.innerWidth / - 1, window.innerWidth / 1, window.innerHeight / 1, window.innerHeight / - 1, -1000, 10000);
    // camera = new THREE.PerspectiveCamera(100,aspect,0.1,3000);
	camera.position.z = 100;
	camera.position.y = 100;
	// camera.position.x = 100;

	camera.lookAt(scene.position);


	var ambient = new THREE.AmbientLight(0xffffff, 1);
	scene.add(ambient);
	var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
	scene.add( directionalLight );

	// var pointLight = new THREE.PointLight(0xffffff, 100, 1000);
	// pointLight.position.set(-900, 100, 100);
	// scene.add(pointLight);

	// var sphereSize = 5;
	// var pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize);
	// scene.add(pointLightHelper);


	// Grid

	var floor = new THREE.RingGeometry(300, 1000, 100);
	var material = new THREE.MeshBasicMaterial({ color: 0X6366E2 });
	var mesh = new THREE.Mesh(floor, material);
	mesh.position.x = 0;
	mesh.position.y = 0;
	scene.add(mesh);



	var floor_2 = new THREE.RingGeometry(10, 100, 100);
	var material = new THREE.MeshBasicMaterial({ color: 0X636666 });
	var mesh = new THREE.Mesh(floor_2, material);
	mesh.position.x = 0;
	mesh.position.y = 0;
	scene.add(mesh);


	// Cubes

	var geometry = new THREE.BoxGeometry(50, 50, 50);
	var material = new THREE.MeshLambertMaterial({ color: 0x52ea7a, overdraw: 0.5 });

	cube = new THREE.Mesh(geometry, material);
	cube.position.x = 50;
	cube.position.y = 150;
	cube.position.z = 0;
	scene.add(cube);


	cube_2 = new THREE.Mesh(geometry, material);
	cube_2.position.x = 150;
	cube_2.position.y = 150;
	cube_2.position.z = 0;
	cube_2.rotation.z = Math.PI / 2;
	scene.add(cube_2)


	//loading the car object
	// load_object(scene, '../models/car1/model.obj')



	stats = new Stats();
	container.appendChild(stats.dom);

	controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.addEventListener('change', render); // remove when using animation loop
				// enable animation loop when using damping or autorotation
				//controls.enableDamping = true;
				//controls.dampingFactor = 0.25;
	controls.enableZoom = false;
	initCollision();

	window.addEventListener('resize', onWindowResize, false);

}