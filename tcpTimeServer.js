var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket){
    var dateString = '';

    dateString = strftime('%Y-%m-%d %k:%M', new Date());
    //console.log(dateString);

    socket.end(dateString);
});

server.listen(process.argv[2]);
