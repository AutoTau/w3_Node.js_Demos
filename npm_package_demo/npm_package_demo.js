/*
	Demo showcasing the upper-case package. 
	This program will convert the output "hello world" to upper-case letters.
*/
var http = require('http');
var uc = require('upper-case');

http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(uc("hello world!"));
	res.end();
}).listen(8080);