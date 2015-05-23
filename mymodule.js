var fs = require('fs')
var path = require('path')

module.exports = function(dir, filterName, callback) {

	fs.readdir(dir, function(err, list){
	if (err) 
		return callback(err)
	
	
	/*var content = new Array;
	
	for(var i in list){
		if(path.extname(list[i]) === '.'+filterName){
			//console.log(list[i]);
			content.push(list[i]);
		}
	}*/

	list = list.filter(function (file){
		return path.extname(file) === '.' + filterName;
	});


	callback(null, list);
});

/*	var fs = require('fs');

    fs.readdir(path, function(err, list) {
        if (err) callback(err);

        var path = require('path');

        //console.log(list);

        for (var i in list) {

            if (path.extname(list[i]) == '.md') {
                console.log(list[i]);
            }

        }

    });*/
};
