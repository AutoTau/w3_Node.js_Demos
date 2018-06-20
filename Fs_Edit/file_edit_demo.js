/* 
	This program is meant to be an example of using different
	Methods within the File System module.  
*/

var fs = require('fs');

// Creating a new file using appendFile()
fs.appendFile('mynewfile1.txt', 'Hello there!', function (err) {
	if(err) throw err;
	console.log('Saved!');
});

// Creating a new, empty file using open()
fs.open('mynewfile2.txt', 'w', function (err, file) {
	if(err) throw err;
	console.log('Saved!');
});

// Creating a new file using writeFile()
fs.writeFile('mynewfile3.txt', 'Hello there!', function (err) {
	if(err) throw err;
	console.log('Saved!');
});

// Updating a file using appendFile(), appending the specified content at the end of the file
fs.appendFile('mynewfile1.txt', 'Here is some text to append.', funtion(err) {
	if(err) throw err;
	console.log('Updated!');
});

// Deleting a file with the unlink() method
fs.unlink('mynewfile2.txt', function (err) {
	if (err) throw err;
	console.log('File Deleted!');
});

// Renaming a file using the rename() method
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});

