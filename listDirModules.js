var myMod = require("./listDirModule");


myMod(process.argv[2], process.argv[3], function(err, files){
    if(err){
        console.log("Error");
    }{
        for ( var file in files){
            console.log(files[file]);
        }
    }
});
