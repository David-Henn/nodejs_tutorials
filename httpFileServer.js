var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    var fStream = fs.createReadStream(process.argv[3]);
    fStream.pipe(res);
});
server.listen(process.argv[2]);
