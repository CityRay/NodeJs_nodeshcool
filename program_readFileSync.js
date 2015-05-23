var fs = require('fs');
var content;
var path = process.argv[2];

var text = fs.readFileSync(path, 'utf8');

//console.log(text);
content = text.split('\n');
console.log(content.length-1);

/* fs.unlink('hello', function(err){
 	if(err) throw err;


 	console.log('successfully');
 });*/

/* fs.stat('hello', function(err, stats){
 	if(err) throw err;

 	console.log('stats: ' + JSON.stringify(stats));
 });*/