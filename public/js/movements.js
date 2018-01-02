function onCollision() {
	console.log("collision")
}


var movement = {
	direction: new THREE.Vector3(1, 0, 0),
	axis: new THREE.Vector3(0, 0, 1),
	clockAngle: (Math.PI / 180) * 10,
	antiClockAngle: (Math.PI / 180) * -10,
	left: function () {
		this.direction.applyAxisAngle(this.axis, this.clockAngle);
		this.direction.normalize();
	},
	right: function () {
		this.direction.applyAxisAngle(this.axis, this.antiClockAngle);
		this.direction.normalize();
	}
}