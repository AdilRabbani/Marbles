var container, stats;
var camera, scene, renderer;
var frustumSize = 1000;
var accelaration = 0;
var accelaration2 = 0;
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

var currentCheckpoint_Player1 = 1;
var previousCheckpoint_Player1 = 0;

var currentCheckpoint_Player2 = 1;
var previousCheckpoint_Player2 = 0;

var checkPointCounter_Player1 = 0;
var checkPointCounter_Player2 = 0;

var player_1_position = 1;
var player_2_position = 2; 

var controls;

var p1_position = document.getElementById("p1_position");
var p2_position = document.getElementById("p2_position");

var trail_1;

init();
animate();



//

function animate() {

	requestAnimationFrame(animate);

	controls.update();
	stats.begin();
	// cube.translateX(accelaration);
	if(!willCollideWall(cube, movement.direction, accelaration)){
		cube.translateOnAxis ( movement.direction, accelaration )
	}
	else{
		cube.translateOnAxis ( movement.direction, -accelaration*10 )
		accelaration = 0;
	}
	if(!willCollideWall(cube_2, movement2.direction, accelaration2)){
		cube_2.translateOnAxis ( movement2.direction, accelaration2 )
	}
	else{
		cube_2.translateOnAxis ( movement2.direction, -accelaration2*10 )
		accelaration2 = 0;
	}
	movement.move();
	movement2.move();
	
	render();
	//console.log(update());

	calculatePosition();

	checkPoint1_Collision();
	checkPoint2_Collision();
	checkPoint3_Collision();
	checkPoint4_Collision();

	// chasingTrail();

	//checkPoint1_Collision_2();
	//checkPoint2_Collision_2();
	//checkPoint3_Collision_2();
	//checkPoint4_Collision_2();
	stats.end();

}

function render() {

	var timer = Date.now() * 0.0001;
	

	//cube.translateZ(5);



	renderer.render(scene, camera);

}