var http = require('http');

//creating a server object
http.createServer(function (req, res){
	// If the response from the HTTP server is supposed to be displayed as HTML,
	// you should include an HTTP header with the correct content type:
	// 200 is the status code, indicating that all is good, second argument contains response headers.
	res.writeHead(200, {'Content-Type': 'text/html'}); 

	res.write(req.url); //Writing a response to the client, your query following the web page will be displayed.
	res.end(); //End the response
}).listen(8080) // Server object will listen on port 8080