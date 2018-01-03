var container, stats;
var camera, scene, renderer;
var frustumSize = 1000;
var accelaration = 0;
var cube;
var cube_2;
var collidableMeshList = [];

var controls;

init();
animate();



//

function animate() {

	requestAnimationFrame(animate);

	controls.update();
	stats.begin();
	// cube.translateX(accelaration);
	cube.translateOnAxis ( movement.direction, accelaration )
	movement.move();
	render();
	console.log(update());
	stats.end();

}

function render() {

	var timer = Date.now() * 0.0001;
	

	//cube.translateZ(5);



	renderer.render(scene, camera);

}