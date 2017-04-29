var express = require('express');
var app = express();
var service = require('./core/services/imdbServices.js')
app.use(express.static(__dirname +'/public'));



app.get('/', function(req,res){
	res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/getMovieData/:title/:index',function(req,res){
	console.log(req.params,"from frontend")
	var data = req.params;
	service.getMovieData(data,function(err,movies){
		if(err){
			console.log(err)
			res.end('err'+err)
		}
		//console.log(movies)
		res.send(movies)	
	})
	
})





app.listen(3000,function(){
	console.log("server is listening on port 3000");
})