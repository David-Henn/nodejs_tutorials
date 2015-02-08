var fs = require('fs');

var path = process.argv[2];

var buf = fs.readFileSync(path);

var content = buf.toString();
var lines = content.split('\n');

console.log(lines.length -1);
