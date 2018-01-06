var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');

//variable to decide which is first
var isFirst = true;

app.use(express.static(path.join(__dirname, 'public')));
server.listen(3000)


io.on('connection', function (socket) {
	if(isFirst == true){
		console.log("Here")
		socket.emit("FirstCome");
		isFirst = false;
	}
	else{
		socket.emit("SecondCome");
		isFirst = true;
	}
	socket.on('player1', function (data) {
		socket.broadcast.emit('player1', data);
	});
	socket.on('player2', function (data) {
		socket.broadcast.emit('player2', data);
	});
});


