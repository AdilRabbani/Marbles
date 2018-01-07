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

var reddiv = document.getElementById("reddiv");
var bluediv = document.getElementById("bluediv");

var menu = document.getElementById("menu");
var lap_set = document.getElementById("lap");

var lapinput = document.getElementById("lapinput");
var numberOfLaps = 0;

var lapsNumber1 = document.getElementById("lapsNumber1");
var lapsNumber2 = document.getElementById("lapsNumber2");

var music = new Audio('sound/happy.mp3');

var player1Lapshtml = document.getElementById("player1Laps");
var player2Lapshtml = document.getElementById("player2Laps");

var winner = document.getElementById("winner");

var waiting = document.getElementById("waiting");

var countdown = document.getElementById("countdown");
var count_down = document.getElementById("count_down");

var player1Laps = 0;
var player2Laps = 0;

var trail_1;

var start_game = false;

init();
animate();

music.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);


//

function animate() {

	requestAnimationFrame(animate);

	if (start_game){

	controls.update();
	stats.begin();
	// cube.translateX(accelaration);
	if(!willCollideWall(cube, movement.direction, accelaration)){
		cube.translateOnAxis ( movement.direction, accelaration )
	}
	else{
		cube.translateOnAxis ( movement.direction, -accelaration*10 )
		accelaration = 0;
		collision = true;
		setTimeout(function(){
			collision = false;
		}, 500)
	}
	// if(!willCollideWall(cube_2, movement2.direction, accelaration2)){
	// 	cube_2.translateOnAxis ( movement2.direction, accelaration2 )
	// }
	// else{
	// 	cube_2.translateOnAxis ( movement2.direction, -accelaration2*10 )
	// 	accelaration2 = 0;
	// }
	movement.move();
	// movement2.move();
	socket.emit('updatedPosition', {position: cube.position});
	render();


	//console.log(update());

	calculatePosition();

	checkPoint1_Collision();
	checkPoint2_Collision();
	checkPoint3_Collision();
	checkPoint4_Collision();

	//  chasingTrail();

	checkPoint1_Collision_2();
	checkPoint2_Collision_2();
	checkPoint3_Collision_2();
	checkPoint4_Collision_2();
	stats.end();

	}

	render();	

}

function render() {

	var timer = Date.now() * 0.0001;
	

	//cube.translateZ(5);



	renderer.render(scene, camera);

}