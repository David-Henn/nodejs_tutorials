module.exports = function(url, callback){

    var http = require('http');

    var allData = "";

    http.get(url, function(response){

        response.setEncoding('utf8');
        response.on('data', function(data){
            allData = allData + data;
        });

        response.on("end", function(){
            callback(null, allData);
        });

        response.on("error", function(err){
            callback(err);
        });
    });

};
