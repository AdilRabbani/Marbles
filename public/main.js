var container, stats;
var camera, scene, renderer;
var frustumSize = 1000;
var accelaration = 0;
var cube;
var cube_2;
var collidableMeshList = [];

var checkpoint_1;
var checkpoint_2;
var checkpoint_3;
var checkpoint_4;

var sphere_1;
var sphere_2;

var checkBox_1;
var checkBox_2;
var checkBox_3;
var checkBox_4;

var currentCheckpoint = 1;
var previousCheckpoint = 0;

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
	//console.log(update());
	checkPoint1_Collision();
	checkPoint2_Collision();
	checkPoint3_Collision();
	checkPoint4_Collision();
	stats.end();

}

function render() {

	var timer = Date.now() * 0.0001;
	

	//cube.translateZ(5);



	renderer.render(scene, camera);

}