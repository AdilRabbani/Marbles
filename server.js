var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');



app.use(express.static(path.join(__dirname, 'public')));
server.listen(3000)


io.on('connection', function (socket) {
	socket.on('updatedPosition', function (data) {
		socket.broadcast.emit('updatedPosition', data);
	});
});


