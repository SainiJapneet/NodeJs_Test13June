//Write a Node.js program that creates a server using the built-in 'http' module. Include a custom module called "myDateTime" that 
//returns the current date and time. The server should respond to incoming requests by displaying the current date and time.
var http = require('http')
var myDateTimeModule = require('./myDateTIme')

http.createServer(function(req,res){
    res.writeHead(200,{
        "Content-Type": "text/html",
    });
    res.write("Current date and time is " + myDateTimeModule.dateTime());
    res.end("")
}).listen(8080);

