var io = require('socket.io')();
io.on('connection', function(client){
    console.log('New connection received')
});
io.listen(3000);
