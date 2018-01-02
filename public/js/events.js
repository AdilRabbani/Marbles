var pressedKeys = [];

document.body.onkeydown = function (e) {

	if (e.keyCode == 87 && accelaration < 10) {
		accelaration += 0.5;
	}
	else if (e.keyCode == 83 && accelaration < 10) {
		accelaration -= 0.5;
	}
	else if (e.keyCode == 65) {
		movement.left();
	}
	else if (e.keyCode == 68) {
		movement.right();
	}

};

document.body.onkeyup = function (e) {
	if (e.keyCode == 87) {
		reduceAccel(100);
	}
	else if (e.keyCode == 83) {
		increaseAccel(100);
	}
};

function reduceAccel(index) {
	if (index > 0 && accelaration > 0) {
		setTimeout(function () {
			accelaration -= 0.1;
			reduceAccel(index--);
		}, 10)
	}
}
function increaseAccel(index) {
	if (index > 0 && accelaration < 0) {
		setTimeout(function () {
			accelaration += 0.1;
			increaseAccel(index--);
		}, 10)
	}
}

function onWindowResize() {

	var aspect = window.innerWidth / window.innerHeight;

	camera.left = - frustumSize * aspect / 2;
	camera.right = frustumSize * aspect / 2;
	camera.top = frustumSize / 2;
	camera.bottom = - frustumSize / 2;

	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);

}