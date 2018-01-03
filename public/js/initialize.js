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

	// don't erase orthographic camera, i'll try working on this more
	// we'll work on perspective until the game is completed

//	camera = new THREE.OrthographicCamera(window.innerWidth / - 1, window.innerWidth / 1, window.innerHeight / 1, window.innerHeight / - 1, -1000, 10000);
     camera = new THREE.PerspectiveCamera(100,aspect,0.1,3000);
	// camera.position.z = 100;
	camera.position.z = 1000;
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

	// var floor = new THREE.RingGeometry(300, 1000, 100);
	// var material = new THREE.MeshBasicMaterial({ color: 0X6366E2 });
	// var mesh = new THREE.Mesh(floor, material);
	// mesh.position.x = 0;
	// mesh.position.y = 0;
	// scene.add(mesh);



	// var floor_2 = new THREE.RingGeometry(1000, 1100, 100);
	// var material = new THREE.MeshBasicMaterial({ color: 0X636666 });
	// var mesh = new THREE.Mesh(floor_2, material);
	// mesh.position.x = 0;
	// mesh.position.y = 0;
	// scene.add(mesh);


	// var floor_3 = new THREE.RingGeometry(150, 300, 100);
	// var material = new THREE.MeshBasicMaterial({ color: 0X636666 });
	// var mesh = new THREE.Mesh(floor_3, material);
	// mesh.position.x = 0;
	// mesh.position.y = 0;
	// scene.add(mesh);



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

	// Cubes

	var geometry = new THREE.CubeGeometry(50, 50, 50);
	var material = new THREE.MeshLambertMaterial({ color: 0x52ea7a, overdraw: 0.5 });

	cube = new THREE.Mesh(geometry, material);
	cube.position.x = -450;
	cube.position.y = 150;
	cube.position.z = 20;
	scene.add(cube);


	cube_2 = new THREE.Mesh(geometry, material);
	cube_2.position.x = 450;
	cube_2.position.y = 150;
	cube_2.position.z = 20;
	//cube_2.rotation.z = Math.PI / 2;
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