var fs = require('fs');
var path = process.argv[2];

fs.readdir(path, function(err, list){
	if (err) throw err;

	var path = require('path');
	
	//console.log(list);
	
	for(var i in list){
		// if(path.extname(list[i]) == '.txt'){
		// 	content += list[i] + '\n';
		// }
		if(path.extname(list[i]) == '.md'){
			console.log(list[i]);
		}

	}


	//console.log(content);
});

/*fs.readFile(path, 'utf8', function(err, data){
	if(err) throw err;

	content = data.split('\n');
	console.log(content.length-1);
});*/

//var text = fs.readFileSync(path, 'utf8');

//console.log(text);
/*content = text.split('\n');
console.log(content.length-1);*/

/* fs.unlink('hello', function(err){
 	if(err) throw err;


 	console.log('successfully');
 });*/

/* fs.stat('hello', function(err, stats){
 	if(err) throw err;

 	console.log('stats: ' + JSON.stringify(stats));
 });*/