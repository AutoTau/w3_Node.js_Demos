/*
	-w3schools demo-
	Step 1: Create an Upload Form
	This creates a Node.js file that writes an HTML form with an upload field. 
	Step 2: Parse the Uploaded File
	When the file is uploaded and parsed, it gets placed on a temporary folder on your computer.
	Step 3: Save the File
	When a file is successfully uploaded to the server, it is placed on a temporary folder.
	To move the file to the folder of your choice, use the File System module, and rename the file.
*/
var http = require('http');
//include the formidable module to parse the uploaded file
//once it reaches the server.
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if(req.url == '/fileupload'){
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files){
      var oldpath = files.filetoupload.path;
      var newpath = 'C:/Users/Your Name/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function(err){
        if(err) throw err;
        res.write('File uploaded and and then moved.');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);