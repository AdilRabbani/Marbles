
var movement = {
	direction: new THREE.Vector3(1, 0, 0),
	axis: new THREE.Vector3(0, 0, 1),
	clockAngle: (Math.PI / 180) * 2,
	antiClockAngle: (Math.PI / 180) * -2,
	left: function () {
		this.direction.applyAxisAngle(this.axis, this.clockAngle);
		this.direction.normalize();
	},
	right: function () {
		this.direction.applyAxisAngle(this.axis, this.antiClockAngle);
		this.direction.normalize();
	},
	move: function () {
		if (pressedKeys[87] && accelaration < 15) {
			accelaration += 0.5;
		}
		if (pressedKeys[83] && accelaration > -15) {
			accelaration -= 0.5;
		}
		if (pressedKeys[65]) {
			movement.left();
		}
		if (pressedKeys[68]) {
			movement.right();
		}

	}
}

var movement2 = {
	direction: new THREE.Vector3(1, 0, 0),
	axis: new THREE.Vector3(0, 0, 1),
	clockAngle: (Math.PI / 180) * 2,
	antiClockAngle: (Math.PI / 180) * -2,
	left: function () {
		this.direction.applyAxisAngle(this.axis, this.clockAngle);
		this.direction.normalize();
	},
	right: function () {
		this.direction.applyAxisAngle(this.axis, this.antiClockAngle);
		this.direction.normalize();
	},
	move: function () {
		if (pressedKeys[73] && accelaration2 < 15) {
			accelaration2 += 0.5;
		}
		if (pressedKeys[75] && accelaration2 > -15) {
			accelaration2 -= 0.5;
		}
		if (pressedKeys[74]) {
			movement2.left();
		}
		if (pressedKeys[76]) {
			movement2.right();
		}

	}
}

