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

	var gridHelper = new THREE.GridHelper(1000, 20);
	scene.add(gridHelper);

	// Cubes

	var geometry = new THREE.BoxGeometry(50, 50, 50);
	var material = new THREE.MeshLambertMaterial({ color: 0xffffff, overdraw: 0.5 });

	//for ( var i = 0; i < 100; i ++ ) {

	cube = new THREE.Mesh( geometry, material );

	cube.position.x = 50;
	cube.position.y = 50;
	cube.position.z = 50;

	scene.add( cube );


	cube_2 = new THREE.Mesh(geometry, material);
	cube_2.position.x = 50;
	cube_2.position.y = 50;
	cube_2.position.z = 400;

	cube_2.rotation.z = Math.PI / 2;

	scene.add(cube_2)


	// Lights

	var ambientLight = new THREE.AmbientLight(Math.random() * 0x10);
	scene.add(ambientLight);

	var directionalLight = new THREE.DirectionalLight(Math.random() * 0xffffff);
	directionalLight.position.x = Math.random() - 0.5;
	directionalLight.position.y = Math.random() - 0.5;
	directionalLight.position.z = Math.random() - 0.5;
	directionalLight.position.normalize();
	scene.add(directionalLight);


	var directionalLight = new THREE.DirectionalLight(Math.random() * 0xffffff);
	directionalLight.position.x = Math.random() - 0.5;
	directionalLight.position.y = Math.random() - 0.5;
	directionalLight.position.z = Math.random() - 0.5;
	directionalLight.position.normalize();
	scene.add(directionalLight);


	//loading the car object
	load_object(scene, '../models/car1/model.obj')

	renderer = new THREE.CanvasRenderer();
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	container.appendChild(renderer.domElement);

	stats = new Stats();
	container.appendChild(stats.dom);

	initCollision();

	//

	window.addEventListener('resize', onWindowResize, false);

}