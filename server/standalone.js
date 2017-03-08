var io = require('socket.io')();
io.on('connection', function(client){
    console.log('New connection received')
    console.log(client)
    client.emit('pepita','prova')
    client.disconnect()
});
io.listen(3000);
