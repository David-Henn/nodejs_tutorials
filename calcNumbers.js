var vars = process.argv.slice(2);

//console.log(process.argv);
var result = 0;
for ( var arg in vars ){

    var number = Number(vars[arg]);
    if (number){
        result = result + number;
        //console.log(result);

    }
}

console.log(result);
