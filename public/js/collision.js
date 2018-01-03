function update() {

	var diff_x = (cube.position.x - cube_2.position.x) * (cube.position.x - cube_2.position.x);
	var diff_y = (cube.position.y - cube_2.position.y) * (cube.position.y - cube_2.position.y);
	var diff_z = (cube.position.z - cube_2.position.z) * (cube.position.z - cube_2.position.z);

	var dist2 = diff_x + diff_y + diff_z;

	var total_radius = 100;

	return dist2 <= (total_radius * total_radius);

}