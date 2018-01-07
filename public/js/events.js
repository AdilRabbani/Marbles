var pressedKeys = [];
var socket = io();
var second_player_start_game = false;


document.body.onkeydown = function (e) {
	pressedKeys[e.keyCode] = e.type == 'keydown';

	if (e.keyCode == 13) {
		$(document).ready(function () {

			$('#menu').fadeOut(500);
			if (waiting.style.display != "none"){
				waiting.style.display = "inline";
				lap_set.style.display = "inline";
			}

		});
		socket.emit('secondUserStarted');
		if(second_player_start_game){
			countDown(3);
		}
	}

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


socket.on('updatedPosition', function (data) {

	cube_2.position.x = data.position.x;
	cube_2.position.y = data.position.y;
	cube_2.position.z = data.position.z;
	console.log(data.position)
});

$(document).ready(function () {

	$("#lapbutton").click(function () {

		$('#lap').fadeOut(300);
		numberOfLaps = lapinput.value;
		socket.emit("noOfLaps", numberOfLaps);
		lapsNumber1.innerHTML = numberOfLaps;
		lapsNumber2.innerHTML = numberOfLaps;
		music.play();

	});

});

function finishedFunc() {
	$("#finished").fadeIn(500);

	if (player1Laps > numberOfLaps) {
		winner.innerHTML = "<div style='color:white;background-color:#FF4081;height:50px;margin-top:10px;'>Player 1 Wins!</div>";
	}

	else {
		winner.innerHTML = "<div style='color:white;background-color:#FDD835;height:50px;margin-top:10px;'>Player 2 Wins!</div>";
	}

	start_game = false;
}


function countDown(count){
	countdown.style.display = "inline";

	if (count < 0)
	{
		countdown.style.display = "none";
	}

	else if(count == 0){
		start_game = true;
		count_down.innerHTML = "<p class='animated bounce'>GO!</p>";
		setTimeout(function(){
			countDown(--count);
		}, 2000);
	}
	else{
		count_down.innerHTML = "<p class='animated bounce'>" + count + "</p>"
		setTimeout(function(){
			countDown(--count);
		}, 2000);
	}
}

socket.on('secondUser', function(data){
	console.log("Second user is connected");
	
})

socket.on('IamSecond', function(data){
	console.log("I'm second player");
	waiting.style.display = "none";
	$('#lap').fadeOut(300);
	numberOfLaps = data;
	lapsNumber1.innerHTML = numberOfLaps;
	lapsNumber2.innerHTML = numberOfLaps;
	music.play();
	second_player_start_game = true;
});

socket.on("secondUserStarted", function(data){
	waiting.style.display = "none";
	countDown(3);
})