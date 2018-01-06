function update() {

	var diff_x = (cube.position.x - cube_2.position.x) * (cube.position.x - cube_2.position.x);
	var diff_y = (cube.position.y - cube_2.position.y) * (cube.position.y - cube_2.position.y);
	var diff_z = (cube.position.z - cube_2.position.z) * (cube.position.z - cube_2.position.z);

	var dist2 = diff_x + diff_y + diff_z;

	var total_radius = 100;

	return dist2 <= (total_radius * total_radius);

}

// function chasingTrail()
// {
// 	var dx = cube.position.x - trail_1.position.x;
// 	var dy = cube.position.y - trail_1.position.y;
// 	var dz = cube.position.z - trail_1.position.z;

// 	var length = Math.sqrt((dx * dx) + (dy * dy) + (dz * dz));

// 	if (length)
// 	{
// 		dx = dx / length;
// 		dy = dy / length;
// 		dz = dz / length;
// 	}

// 	trail_1.position.x = dx + trail_1.position.x;
// 	trail_1.position.y = dy + trail_1.position.y;
// 	trail_1.position.z = dz + trail_1.position.z;

// 	//console.log(trail_1.position);

// }

function player2DistanceFromCheckpoint()
{

	if (currentCheckpoint_Player2 == 1)
	{
		var dy_2 = cube_2.position.y - checkpoint_1.position.y;
		return (Math.sqrt((dy_2 * dy_2)));
	}

	else if (currentCheckpoint_Player2 == 2)
	{
		var dx_2 = cube_2.position.x - checkpoint_2.position.x;
		return (Math.sqrt((dx_2 * dx_2)));
	}

	else if (currentCheckpoint_Player2 == 3)
	{
		var dy_2 = cube_2.position.y - checkpoint_3.position.y;
		return (Math.sqrt((dy_2 * dy_2)));
	}

	else if (currentCheckpoint_Player2 == 4)
	{
		var dx_2 = cube_2.position.x - checkpoint_4.position.x;
		return (Math.sqrt((dx_2 * dx_2)));
	}
}

function calculatePosition()
{
	if (checkPointCounter_Player1 > checkPointCounter_Player2)
	{
		player_1_position = 1;
		player_2_position = 2;

		p1_position.innerHTML = player_1_position + "<sup>st</sup>";
		p2_position.innerHTML = player_2_position + "<sup>nd</sup>";

		reddiv.style.backgroundColor = "#F44336";
		bluediv.style.backgroundColor = "#1565C0";

	}

	else if (checkPointCounter_Player1 < checkPointCounter_Player2)
	{
		player_2_position = 1;
		player_1_position = 2;

		p1_position.innerHTML = player_1_position + "<sup>nd</sup>";
		p2_position.innerHTML = player_2_position + "<sup>st</sup>";

		reddiv.style.backgroundColor = "#1565C0";
		bluediv.style.backgroundColor = "#F44336";

	}

	else if (checkPointCounter_Player1 == checkPointCounter_Player2)
	{
		
		if (currentCheckpoint_Player1 == 1)
		{
			var dy_1 = Math.sqrt((cube.position.y - checkpoint_1.position.y) * (cube.position.y - checkpoint_1.position.y));
			//console.log(Math.sqrt((dy_1 * dy_1)));

			var dy_2 = player2DistanceFromCheckpoint();

			if (dy_1 > dy_2)
			{
				player_2_position = 1;
				player_1_position = 2;

				p1_position.innerHTML = player_1_position + "<sup>nd</sup>";
				p2_position.innerHTML = player_2_position + "<sup>st</sup>";

				reddiv.style.backgroundColor = "#1565C0";
				bluediv.style.backgroundColor = "#F44336";

			}

			else {
				player_1_position = 1;
				player_2_position = 2;

				p1_position.innerHTML = player_1_position + "<sup>st</sup>";
				p2_position.innerHTML = player_2_position + "<sup>nd</sup>";

				reddiv.style.backgroundColor = "#F44336";
				bluediv.style.backgroundColor = "#1565C0";

			}

		}

		if (currentCheckpoint_Player1 == 2)
		{
			var dx_1 = Math.sqrt((cube.position.x - checkpoint_2.position.x) * (cube.position.x - checkpoint_2.position.x));
			//console.log(Math.sqrt((dx_1 * dx_1)));

			var dx_2 = player2DistanceFromCheckpoint();

			if (dx_1 > dx_2)
			{
				player_2_position = 1;
				player_1_position = 2;

				p1_position.innerHTML = player_1_position + "<sup>nd</sup>";
				p2_position.innerHTML = player_2_position + "<sup>st</sup>";

				reddiv.style.backgroundColor = "#1565C0";
				bluediv.style.backgroundColor = "#F44336";
			}

			else {
				player_1_position = 1;
				player_2_position = 2;

				p1_position.innerHTML = player_1_position + "<sup>st</sup>";
				p2_position.innerHTML = player_2_position + "<sup>nd</sup>";

				reddiv.style.backgroundColor = "#F44336";
				bluediv.style.backgroundColor = "#1565C0";
			}

		}

		if (currentCheckpoint_Player1 == 3)
		{
			var dy_1 = Math.sqrt((cube.position.y - checkpoint_3.position.y) * (cube.position.y - checkpoint_3.position.y));
			//console.log(Math.sqrt((dy_1 * dy_1)));

			var dy_2 = player2DistanceFromCheckpoint();

			if (dy_1 > dy_2)
			{
				player_2_position = 1;
				player_1_position = 2;

				p1_position.innerHTML = player_1_position + "<sup>nd</sup>";
				p2_position.innerHTML = player_2_position + "<sup>st</sup>";

				reddiv.style.backgroundColor = "#1565C0";
				bluediv.style.backgroundColor = "#F44336";
			}

			else {
				player_1_position = 1;
				player_2_position = 2;

				p1_position.innerHTML = player_1_position + "<sup>st</sup>";
				p2_position.innerHTML = player_2_position + "<sup>nd</sup>";

				reddiv.style.backgroundColor = "#F44336";
				bluediv.style.backgroundColor = "#1565C0";
			}

		}

		if (currentCheckpoint_Player1 == 4)
		{
			var dx_1 = Math.sqrt((cube.position.x - checkpoint_4.position.x) * (cube.position.x - checkpoint_4.position.x));
			//console.log(Math.sqrt((dx_1 * dx_1)));

			var dx_2 = player2DistanceFromCheckpoint();

			if (dx_1 > dx_2)
			{
				player_2_position = 1;
				player_1_position = 2;

				p1_position.innerHTML = player_1_position + "<sup>nd</sup>";
				p2_position.innerHTML = player_2_position + "<sup>st</sup>";

				reddiv.style.backgroundColor = "#1565C0";
				bluediv.style.backgroundColor = "#F44336";
			}

			else {
				player_1_position = 1;
				player_2_position = 2;

				p1_position.innerHTML = player_1_position + "<sup>st</sup>";
				p2_position.innerHTML = player_2_position + "<sup>nd</sup>";

				reddiv.style.backgroundColor = "#F44336";
				bluediv.style.backgroundColor = "#1565C0";
			}


		}

	}

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

	 if (currentCheckpoint_Player1 == 1 && (previousCheckpoint_Player1 == 0 || previousCheckpoint_Player1 == 4)){

		if (dist_squared > 0)
		{
			//console.log("CheckPoint_1");
			currentCheckpoint_Player1 = 2;
			previousCheckpoint_Player1 = 1;
			checkpoint_1.material.color.setHex(0x37474F);
			checkpoint_4.material.color.setHex(0xFFFFFF);

			checkPointCounter_Player1 = checkPointCounter_Player1 + 1;
		}

	 }

	 else {

		if (dist_squared > 0)
			{
				previousCheckpoint_Player1 = 1;
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

	if (currentCheckpoint_Player1 == 2 && previousCheckpoint_Player1 == 1){

		if (dist_squared > 0)
		{
			//console.log("CheckPoint_2");
			currentCheckpoint_Player1 = 3;
			previousCheckpoint_Player1 = 2;
			checkpoint_2.material.color.setHex(0x37474F);
			checkpoint_1.material.color.setHex(0xFFFFFF);

			checkPointCounter_Player1 = checkPointCounter_Player1 + 1;
		}

	}

	else {
		if (dist_squared > 0)
			{
				previousCheckpoint_Player1 = 2;
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

	 if (currentCheckpoint_Player1 == 3 && previousCheckpoint_Player1 == 2){

		if (dist_squared > 0)
		{
			//console.log("CheckPoint_3");
			currentCheckpoint_Player1 = 4;
			previousCheckpoint_Player1 = 3;
			checkpoint_3.material.color.setHex(0x37474F);
			checkpoint_2.material.color.setHex(0xFFFFFF);

			checkPointCounter_Player1 = checkPointCounter_Player1 + 1;
		}

	 }

	 else {

		if (dist_squared > 0)
			{
				previousCheckpoint_Player1 = 3;
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

	if (currentCheckpoint_Player1 == 4 && previousCheckpoint_Player1 == 3){

		if (dist_squared > 0)
		{
			//console.log("CheckPoint_4");
			currentCheckpoint_Player1 = 1;
			previousCheckpoint_Player1 = 4;
			checkpoint_4.material.color.setHex(0x37474F);
			checkpoint_3.material.color.setHex(0xFFFFFF);

			checkPointCounter_Player1 = checkPointCounter_Player1 + 1;
		}

	}

	else {
		if (dist_squared > 0)
		{
			previousCheckpoint_Player1 = 4;
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

function checkPoint1_Collision_2()
{
	
	var dist_squared = 900;
    /* assume C1 and C2 are element-wise sorted, if not, do that now */
    if (cube_2.position.x < -920){
		dist_squared = dist_squared - ((cube_2.position.x - (-920))*((cube_2.position.x - (-920))));
	}

	else if (cube_2.position.x > -280){
		dist_squared = dist_squared - ((cube_2.position.x - (-280))*((cube_2.position.x - (-280))));
	}

	 if (cube_2.position.z < -50){
		 dist_squared = dist_squared - ((cube_2.position.z - (-50))*((cube_2.position.z - (-50))));
	 }

	 else if (cube_2.position.z > 80){
		 dist_squared = dist_squared - ((cube_2.position.z - (80))*((cube_2.position.z - (80))));
	 }

	 if (cube_2.position.y < 40){
		 dist_squared = dist_squared - ((cube_2.position.y - (40))*((cube_2.position.y - (40))));
	 }

	 else if (cube_2.position.y > -40){
		 dist_squared = dist_squared - ((cube_2.position.y - (-40))*((cube_2.position.y - (-40))));
	 }

	 if (currentCheckpoint_Player2 == 1 && (previousCheckpoint_Player2 == 0 || previousCheckpoint_Player2 == 4)){

		if (dist_squared > 0)
		{
			//console.log("CheckPoint_1");
			currentCheckpoint_Player2 = 2;
			previousCheckpoint_Player2 = 1;
			checkpoint_1.material.color.setHex(0x37474F);
			checkpoint_4.material.color.setHex(0xFFFFFF);

			checkPointCounter_Player2 = checkPointCounter_Player2 + 1;
		}

	 }

	 else {

		if (dist_squared > 0)
			{
				previousCheckpoint_Player2 = 1;
			}

	 }

}

function checkPoint2_Collision_2()
{

	var dist_squared = 900;

	if (cube_2.position.y > 1000){
		dist_squared = dist_squared - ((cube_2.position.y - (1000))*((cube_2.position.y - (1000))));
	}

	else if (cube_2.position.y < 390){
		dist_squared = dist_squared - ((cube_2.position.y - (390))*((cube_2.position.y - (390))));
	}

	if (cube_2.position.z < -50){
		dist_squared = dist_squared - ((cube_2.position.z - (-50))*((cube_2.position.z - (-50))));
	}

	else if (cube_2.position.z > 50){
		dist_squared = dist_squared - ((cube_2.position.z - (50))*((cube_2.position.z - (50))));
	}

	
	if (cube_2.position.x > -20){
		dist_squared = dist_squared - ((cube_2.position.x - (-20))*((cube_2.position.x - (-20))));
	}

	else if (cube_2.position.x < -80){
		dist_squared = dist_squared - ((cube_2.position.x - (-80))*((cube_2.position.x - (-80))));
	}

	if (currentCheckpoint_Player2 == 2 && previousCheckpoint_Player2 == 1){

		if (dist_squared > 0)
		{
			//console.log("CheckPoint_2");
			currentCheckpoint_Player2 = 3;
			previousCheckpoint_Player2 = 2;
			checkpoint_2.material.color.setHex(0x37474F);
			checkpoint_1.material.color.setHex(0xFFFFFF);

			checkPointCounter_Player2 = checkPointCounter_Player2 + 1;
		}

	}

	else {
		if (dist_squared > 0)
			{
				previousCheckpoint_Player2 = 2;
			}
	}

}

function checkPoint3_Collision_2()
{

	var dist_squared = 900;
    /* assume C1 and C2 are element-wise sorted, if not, do that now */
    if (cube_2.position.x < 200){
		dist_squared = dist_squared - ((cube_2.position.x - (200))*((cube_2.position.x - (200))));
	}

	else if (cube_2.position.x > 800){
		dist_squared = dist_squared - ((cube_2.position.x - (800))*((cube_2.position.x - (800))));
	}

	 if (cube_2.position.z < -50){
		 dist_squared = dist_squared - ((cube_2.position.z - (-50))*((cube_2.position.z - (-50))));
	 }

	 else if (cube_2.position.z > 50){
		 dist_squared = dist_squared - ((cube_2.position.z - (50))*((cube_2.position.z - (50))));
	 }

	 if (cube_2.position.y < 40){
		 dist_squared = dist_squared - ((cube_2.position.y - (40))*((cube_2.position.y - (40))));
	 }

	 else if (cube_2.position.y > -40){
		 dist_squared = dist_squared - ((cube_2.position.y - (-40))*((cube_2.position.y - (-40))));
	 }

	 if (currentCheckpoint_Player2 == 3 && previousCheckpoint_Player2 == 2){

		if (dist_squared > 0)
		{
			//console.log("CheckPoint_3");
			currentCheckpoint_Player2 = 4;
			previousCheckpoint_Player2 = 3;
			checkpoint_3.material.color.setHex(0x37474F);
			checkpoint_2.material.color.setHex(0xFFFFFF);

			checkPointCounter_Player2 = checkPointCounter_Player2 + 1;
		}

	 }

	 else {

		if (dist_squared > 0)
			{
				previousCheckpoint_Player2 = 3;
			}
	 }

}

function checkPoint4_Collision_2()
{

	var dist_squared = 900;

	if (cube_2.position.y < -1000){
		dist_squared = dist_squared - ((cube_2.position.y - (-1000))*((cube_2.position.y - (-1000))));
	}

	else if (cube_2.position.y > -390){
		dist_squared = dist_squared - ((cube_2.position.y - (-390))*((cube_2.position.y - (-390))));
	}

	if (cube_2.position.z < -50){
		dist_squared = dist_squared - ((cube_2.position.z - (-50))*((cube_2.position.z - (-50))));
	}

	else if (cube_2.position.z > 50){
		dist_squared = dist_squared - ((cube_2.position.z - (50))*((cube_2.position.z - (50))));
	}

	
	if (cube_2.position.x > -20){
		dist_squared = dist_squared - ((cube_2.position.x - (-20))*((cube_2.position.x - (-20))));
	}

	else if (cube_2.position.x < -80){
		dist_squared = dist_squared - ((cube_2.position.x - (-80))*((cube_2.position.x - (-80))));
	}

	if (currentCheckpoint_Player2 == 4 && previousCheckpoint_Player2 == 3){

		if (dist_squared > 0)
		{
			//console.log("CheckPoint_4");
			currentCheckpoint_Player2 = 1;
			previousCheckpoint_Player2 = 4
			checkpoint_4.material.color.setHex(0x37474F);
			checkpoint_3.material.color.setHex(0xFFFFFF);

			checkPointCounter_Player2 = checkPointCounter_Player2 + 1;
		}

	}

	else {
		if (dist_squared > 0)
		{
			previousCheckpoint_Player2 = 4;
		}
	}

}