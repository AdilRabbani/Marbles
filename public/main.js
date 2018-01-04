var container, stats;
var camera, scene, renderer;
var frustumSize = 1000;
var accelaration = 0;
var accelaration2 = 0;
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
	// console.log(update());
	stats.end();

}

function render() {

	var timer = Date.now() * 0.0001;
	

	//cube.translateZ(5);



	renderer.render(scene, camera);

}