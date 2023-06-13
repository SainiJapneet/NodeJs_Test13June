//Write a Node.js program that replaces the content of a file called "mynewfile3.txt" with 
//the text "Hello content!" using the fs.writeFile() method.
var fs = require('fs')
fs.writeFile('./mynewfile3.txt', "Hello content!", (err) => {
    if (err) {
      console.error('Something went wrong ' + err);
    } else {
      console.log('Content replaced');
    }
  });