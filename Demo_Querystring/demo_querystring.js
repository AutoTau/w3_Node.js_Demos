/*
 	Takes a query in the form of year and month, and parses out what we want and then displays it.
	Example query: http://localhost:8080/?year=2017&month=July
	Shows: 2017 July
*/

var http = require('http');
//Using Node.js' url module
var url = require('url');

//creating a server object
http.createServer(function (req, res){
	// If the response from the HTTP server is supposed to be displayed as HTML,
	// you should include an HTTP header with the correct content type:
	// 200 is the status code, indicating that all is good, second argument contains response headers.
	res.writeHead(200, {'Content-Type': 'text/html'}); 
	var q = url.parse(req.url, true).query;
	var text = q.year + " " + q.month;		// Parse out what we want
	res.end(text); 							//End the response
}).listen(8080); 							// Server object will listen on port 8080
