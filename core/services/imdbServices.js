var request = require('superagent');
var service={};
service.getMovieData=function(data,cb){
	request
  .get('http://www.omdbapi.com/?s='+data.title+'&page='+data.index)
  .end(function(err, res){
    // Do something
    if(err){
    	console.log(err,"err")
    	cb(err)
    } 
    cb(null,res.body)
  });
}

module.exports=service;