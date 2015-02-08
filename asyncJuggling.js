var collect = require('./CollectHttpMod');

var allData = [];
var responseCount = 0;

var onComplete = function(){
        if (responseCount === 3){
            for (var data in allData){
                //console.log("NEXT");
                console.log(allData[data]);
            }
        }
};

collect(process.argv[2], function(err, data){
    if(err){
        console.log("Error Server 1");
    }{
        allData[0] = data;
        responseCount ++;
        onComplete();
    }

});

collect(process.argv[3], function(err, data){
    if(err){
        console.log("Error Server 2");
    }{
        allData[1] = data;
        responseCount ++;
        onComplete();
    }

});

collect(process.argv[4], function(err, data){
    if(err){
        console.log("Error Server 3");
    }{
        allData[2] = data;
        responseCount ++;
        onComplete();
    }

});
