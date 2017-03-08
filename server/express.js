var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function(){
    console.log('New connection received')
});
server.listen(3002);
