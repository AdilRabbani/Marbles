var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');



var connectCounter = 0;


app.use(express.static(path.join(__dirname, 'public')));
server.listen(3000)


io.on('connection', function (socket) {
	connectCounter++;
	if(connectCounter > 1){
		socket.broadcast.emit("secondUser");
		socket.emit("IamSecond");
	}
	socket.on('updatedPosition', function (data) {
		socket.broadcast.emit('updatedPosition', data);
	});
	socket.on('disconnect', function () { connectCounter--; });
});

