var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');
var numberOfLaps = 1;


var connectCounter = 0;
var lapSet = false;


app.use(express.static(path.join(__dirname, 'public')));
server.listen(3000)


io.on('connection', function (socket) {
	connectCounter++;
	if (connectCounter > 1) {
		socket.broadcast.emit("secondUser");
		socket.emit("IamSecond", numberOfLaps);
	}
	socket.on('updatedPosition', function (data) {
		socket.broadcast.emit('updatedPosition', data);
	});
	socket.on('secondUserStarted', function (data) {
		socket.broadcast.emit('secondUserStarted', data);
	});
	socket.on('playername', function (data) {
		socket.broadcast.emit('playername', data);
	});
	socket.on('Finished', function (data) {
		socket.broadcast.emit('Finished', data);
	});
	socket.on('noOfLaps', function (data) {
		numberOfLaps = data;
	});
	socket.on('disconnect', function () { connectCounter--; });
});

