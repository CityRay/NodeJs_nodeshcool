//console.log(process.argv);
var sum = 0
/*for(var i in process.argv){
	//console.log(process.argv[i]);
	
	if(i >= 2)
	{
		sum += parseInt(process.argv[i]);
	}
}*/

for (var i = 2; i < process.argv.length; i++)
	sum += Number(process.argv[i])

console.log(sum)