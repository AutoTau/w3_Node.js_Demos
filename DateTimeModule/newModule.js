var http = require('http');

var dateIncoming = require('./dateModule');

http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("Current date and time is: " + dateIncoming.myDateTime());
	res.end();
}).listen(8080);