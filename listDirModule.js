module.exports = function(path, filter, callback){
    var fs = require('fs');

    var matchingFiles = [];
    //console.log(filter);
    fs.readdir(path, function(err, list){
        if (err)
            return callback(err);
        for (var item in list){
            if (String(list[item]).indexOf('.' + filter) > -1){
                matchingFiles.push(list[item]);
            }
        }
        callback(null,matchingFiles);
    });
};
