//Develop a Node.js program that deletes a file called "mynewfile2.txt" using the fs.unlink() method.
var fs = require('fs');
fs.unlink('mynewfile2.txt', (err) => {
    if (err) {
      console.error('Something went wrong => ' + err);
    } else {
      console.log('File deleted');
    }
  });