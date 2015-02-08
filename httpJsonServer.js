var http = require('http');
var url = require('url');
var parsedUrl;

var server = http.createServer(function (req, res) {
    parsedUrl = url.parse(req.url, true);
//    console.log(parsedUrl);
    var date = new Date(parsedUrl.query.iso);
    res.writeHead(200, {'Content-Type': 'application/json'});
    switch(parsedUrl.pathname){
        case '/api/parsetime':
            res.end(JSON.stringify({
                    hour : date.getHours(),
                    minute : date.getMinutes(),
                    second : date.getSeconds()
            }));
            break;

        case '/api/unixtime':
            res.end(JSON.stringify({
                unixtime : date.getTime()
            }));
            break;
    }
});
server.listen(process.argv[2]);
