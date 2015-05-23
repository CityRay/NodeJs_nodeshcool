var http = require('http');
var bl = require('bl');
var result = [];
var count = 0;

function printResult(){
    for(var i in result){
        console.log(result[i]);
    }
}

function httpGet(purl, index) {
    http.get(purl, function(res) {
        //console.log("Got response: " + res.statusCode);
        //res.setEncoding('utf8');
        /*res.on('data', console.log);
        res.on('error', console.error);*/
        res.pipe(bl(function(err, data) {
            if (err) return console.error(err);

            data = data.toString();
            result[index] = data;
            count++

            if(count === 3){
                printResult();
            }
            //console.log(data);
        }));
    });
}


for (var i = 2; i < process.argv.length; i++)
    httpGet(process.argv[i], i);
