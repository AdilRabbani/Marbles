function update() {

	var diff_x = (cube.position.x - cube_2.position.x) * (cube.position.x - cube_2.position.x);
	var diff_y = (cube.position.y - cube_2.position.y) * (cube.position.y - cube_2.position.y);
	var diff_z = (cube.position.z - cube_2.position.z) * (cube.position.z - cube_2.position.z);

	var dist2 = diff_x + diff_y + diff_z;

	var total_radius = 100;

	return dist2 <= (total_radius * total_radius);

}

function checkPoint1_Collision()
{
	
	var dist_squared = 900;
    /* assume C1 and C2 are element-wise sorted, if not, do that now */
    if (cube.position.x < -920){
		dist_squared = dist_squared - ((cube.position.x - (-920))*((cube.position.x - (-920))));
	}

	else if (cube.position.x > -280){
		dist_squared = dist_squared - ((cube.position.x - (-280))*((cube.position.x - (-280))));
	}

	 if (cube.position.z < -50){
		 dist_squared = dist_squared - ((cube.position.z - (-50))*((cube.position.z - (-50))));
	 }

	 else if (cube.position.z > 80){
		 dist_squared = dist_squared - ((cube.position.z - (80))*((cube.position.z - (80))));
	 }

	 if (cube.position.y < 40){
		 dist_squared = dist_squared - ((cube.position.y - (40))*((cube.position.y - (40))));
	 }

	 else if (cube.position.y > -40){
		 dist_squared = dist_squared - ((cube.position.y - (-40))*((cube.position.y - (-40))));
	 }

	 if (currentCheckpoint == 1 && (previousCheckpoint == 0 || previousCheckpoint == 4)){

		if (dist_squared > 0)
		{
			console.log("CheckPoint_1");
			currentCheckpoint = 2;
			previousCheckpoint = 1;
			checkpoint_1.material.color.setHex(0x37474F);
			checkpoint_4.material.color.setHex(0xFFFFFF);
		}

	 }

	 else {

		if (dist_squared > 0)
			{
				previousCheckpoint = 1;
			}

	 }

}

function checkPoint2_Collision()
{

	var dist_squared = 900;

	if (cube.position.y > 1000){
		dist_squared = dist_squared - ((cube.position.y - (1000))*((cube.position.y - (1000))));
	}

	else if (cube.position.y < 390){
		dist_squared = dist_squared - ((cube.position.y - (390))*((cube.position.y - (390))));
	}

	if (cube.position.z < -50){
		dist_squared = dist_squared - ((cube.position.z - (-50))*((cube.position.z - (-50))));
	}

	else if (cube.position.z > 50){
		dist_squared = dist_squared - ((cube.position.z - (50))*((cube.position.z - (50))));
	}

	
	if (cube.position.x > -20){
		dist_squared = dist_squared - ((cube.position.x - (-20))*((cube.position.x - (-20))));
	}

	else if (cube.position.x < -80){
		dist_squared = dist_squared - ((cube.position.x - (-80))*((cube.position.x - (-80))));
	}

	if (currentCheckpoint == 2 && previousCheckpoint == 1){

		if (dist_squared > 0)
		{
			console.log("CheckPoint_2");
			currentCheckpoint = 3;
			previousCheckpoint = 2;
			checkpoint_2.material.color.setHex(0x37474F);
			checkpoint_1.material.color.setHex(0xFFFFFF);
		}

	}

	else {
		if (dist_squared > 0)
			{
				previousCheckpoint = 2;
			}
	}

}

function checkPoint3_Collision()
{

	var dist_squared = 900;
    /* assume C1 and C2 are element-wise sorted, if not, do that now */
    if (cube.position.x < 200){
		dist_squared = dist_squared - ((cube.position.x - (200))*((cube.position.x - (200))));
	}

	else if (cube.position.x > 800){
		dist_squared = dist_squared - ((cube.position.x - (800))*((cube.position.x - (800))));
	}

	 if (cube.position.z < -50){
		 dist_squared = dist_squared - ((cube.position.z - (-50))*((cube.position.z - (-50))));
	 }

	 else if (cube.position.z > 50){
		 dist_squared = dist_squared - ((cube.position.z - (50))*((cube.position.z - (50))));
	 }

	 if (cube.position.y < 40){
		 dist_squared = dist_squared - ((cube.position.y - (40))*((cube.position.y - (40))));
	 }

	 else if (cube.position.y > -40){
		 dist_squared = dist_squared - ((cube.position.y - (-40))*((cube.position.y - (-40))));
	 }

	 if (currentCheckpoint == 3 && previousCheckpoint == 2){

		if (dist_squared > 0)
		{
			console.log("CheckPoint_3");
			currentCheckpoint = 4;
			checkpoint_3.material.color.setHex(0x37474F);
			checkpoint_2.material.color.setHex(0xFFFFFF);
		}

	 }

	 else {

		if (dist_squared > 0)
			{
				previousCheckpoint = 3;
			}
	 }

}

function checkPoint4_Collision()
{

	var dist_squared = 900;

	if (cube.position.y < -1000){
		dist_squared = dist_squared - ((cube.position.y - (-1000))*((cube.position.y - (-1000))));
	}

	else if (cube.position.y > -390){
		dist_squared = dist_squared - ((cube.position.y - (-390))*((cube.position.y - (-390))));
	}

	if (cube.position.z < -50){
		dist_squared = dist_squared - ((cube.position.z - (-50))*((cube.position.z - (-50))));
	}

	else if (cube.position.z > 50){
		dist_squared = dist_squared - ((cube.position.z - (50))*((cube.position.z - (50))));
	}

	
	if (cube.position.x > -20){
		dist_squared = dist_squared - ((cube.position.x - (-20))*((cube.position.x - (-20))));
	}

	else if (cube.position.x < -80){
		dist_squared = dist_squared - ((cube.position.x - (-80))*((cube.position.x - (-80))));
	}

	if (currentCheckpoint == 4 && previousCheckpoint == 3){

		if (dist_squared > 0)
		{
			console.log("CheckPoint_4");
			currentCheckpoint = 1;
			checkpoint_4.material.color.setHex(0x37474F);
			checkpoint_3.material.color.setHex(0xFFFFFF);
		}

	}

	else {
		if (dist_squared > 0)
		{
			previousCheckpoint = 4;
		}
	}

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