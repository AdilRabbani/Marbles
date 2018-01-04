function update() {

	var diff_x = (cube.position.x - cube_2.position.x) * (cube.position.x - cube_2.position.x);
	var diff_y = (cube.position.y - cube_2.position.y) * (cube.position.y - cube_2.position.y);
	var diff_z = (cube.position.z - cube_2.position.z) * (cube.position.z - cube_2.position.z);

	var dist2 = diff_x + diff_y + diff_z;

	var total_radius = 100;

	return dist2 <= (total_radius * total_radius);

}


function willCollideWall(obj, dir, accel) {
	var position = obj.position.clone();
	var direction = dir.clone();
	position.add ( direction.multiplyScalar(accelaration) );
	var x = position.x;
	var y = position.y;
	var x1 = -900, x2 = 800, y1 = -1000, y2 = 1000;
	var a1 = -300, a2 = 200, b1 = -400, b2 = 400;
	return !((x > x1 && x < x2 && y > y1 && y < y2) && !(x > a1 && x < a2 && y > b1 && y < b2))
}