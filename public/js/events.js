var pressedKeys = [];

document.body.onkeydown = function (e) {
	pressedKeys[e.keyCode] = e.type == 'keydown';
};

document.body.onkeyup = function (e) {
	if (e.keyCode == 87) {
		reduceAccel(100);
	}
	if (e.keyCode == 73) {
		reduceAccel2(100);
	}
	pressedKeys[e.keyCode] = e.type == 'keydown';
};

function reduceAccel(index) {
	if (index > 0 && accelaration > 0) {
		accelaration -= 0.1;
		setTimeout(function () {
			reduceAccel(index--);
		}, 10)
	}
}
function increaseAccel(index) {
	if (index > 0 && accelaration < 0) {
		accelaration += 0.1;
		setTimeout(function () {
			increaseAccel(index--);
		}, 10)
	}
}
function reduceAccel2(index) {
	if (index > 0 && accelaration2 > 0) {
		setTimeout(function () {
			accelaration2 -= 0.1;
			reduceAccel2(index--);
		}, 10)
	}
}
function increaseAccel2(index) {
	if (index > 0 && accelaration2 < 0) {
		setTimeout(function () {
			accelaration2 += 0.1;
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

//code for sockets

var socket = io();
var player = "player2";
socket.on('FirstCome', function (data) {
	player = "player1";
});
socket.on('player1', function (data) {
	pressedKeys[73] = data[87];
	pressedKeys[75] = data[83];
	pressedKeys[74] = data[65];
	pressedKeys[76] = data[68];
});
socket.on('player2', function (data) {
	pressedKeys[73] = data[87];
	pressedKeys[75] = data[83];
	pressedKeys[74] = data[65];
	pressedKeys[76] = data[68];
});