/* 
	Program to demonstrate the node.js file system module
*/

// Including the HTTP module
var http = require('http');
// Including the File System Module
var fs = require('fs');

http.createServer(function (req, res){
	// Read the HTML file and return the content
	fs.readFile('demofile.html', function(err, data){
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.write(data);
		res.end();
	});
}).listen(8080);

