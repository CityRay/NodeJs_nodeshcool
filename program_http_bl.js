var http = require('http');
var bl = require('bl');


http.get(process.argv[2], function(res) {
    //console.log("Got response: " + res.statusCode);
    //res.setEncoding('utf8');
    /*res.on('data', console.log);
    res.on('error', console.error);*/
    res.pipe(bl(function(err, data){
    	if(err) return console.error(err);

    	data = data.toString();
    	console.log(data.length);
    	console.log(data);
    }));
});
