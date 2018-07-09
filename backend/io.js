module.exports = function (port) {

    const socket = require('socket.io-client')('http://localhost:' + (port || 9191));

    socket.on('connect', function () {
        console.log('Socket online !', socket.id, port);
    });

    function ioMid(req, res, next) {
        if (!req.skt) {
            req.skt = socket;
        }
        next();
    }

    return {
        mid: ioMid,
        skt: socket,
    };
};
