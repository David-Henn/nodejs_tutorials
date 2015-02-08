var fs = require('fs');

var filter = '.' + process.argv[3];

//console.log(filter);
fs.readdir(process.argv[2], function(err, list){
    for (var item in list){
        if (String(list[item]).indexOf(filter) > -1){
            console.log(list[item]);
        }
    }
});
