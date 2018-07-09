var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var middleware = require('socketio-wildcard')();

app.get('/', function (req, res) {
  res.json('online');
});

io.use(middleware);

io.on('connection', function (socket) {
    console.log('Nova conexao do socket', socket.id);
    socket.on('*', function (pk) {
        socket.broadcast.emit(pk.data[0], pk.data[1]);
    });
});

let port = 9191;

if (process.argv[2]) {
    port = parseInt(process.argv[2]);
}

server.listen(port, '0.0.0.0', function () {
    console.log('Socketio rodando na porta ' + port);
});
