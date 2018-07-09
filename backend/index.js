const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const path = require('path');
const cors = require('cors');
const config = require('./config');
const ioController = require('./io')(config.socketio);
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json({
  limit: '50mb'
}));

app.use(cors());

app.get('/api/', function (req, res, next) {
  res.json('online');
});

mongoose.Promise = global.Promise;
mongoose.connect(config.database, {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});

app.use('/api/fixture', require('./app/usuario/fixture'));
app.use('/api/', require('./app/usuario/auth'));

/*Mid para rotas da API verificar JWT*/
var jwt = require('./core/jwt');
app.use('/api/v1', jwt);

jwt.use(ioController.mid);

/*Modulos*/
jwt.use('/users', require('./app/usuario'));

var id = Number(process.env.id);

var port = parseInt(config.initialPort);

server.listen(port, '127.0.0.1');
console.log('Server start: ' + port);