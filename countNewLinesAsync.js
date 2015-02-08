var fs = require('fs');

var path = process.argv[2];

var buf = fs.readFile(path, 'utf8', function (err, content) {
    if (!err){
        var lines = content.split('\n');
        console.log(lines.length -1);
    }
});
