var container, stats;
var camera, scene, renderer;
var frustumSize = 1000;
var accelaration = 0;
var cube;
var cube_2;
var collidableMeshList = [];

init();
animate();



//

function animate() {

	requestAnimationFrame(animate);

	stats.begin();
	cube.translateZ(accelaration);
	render();
	update();
	stats.end();

}

function render() {

	var timer = Date.now() * 0.0001;

	// camera.position.x = Math.cos( timer ) * 800;
	// camera.position.z = Math.sin( timer ) * 800;

	camera.position.x = 400;
	camera.position.z = 800;
	camera.lookAt(scene.position);

	//cube.translateZ(5);



	renderer.render(scene, camera);

}