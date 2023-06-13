//Write a Node.js program that creates an HTTP server using the built-in 'http' module and responds with "Hello World!" when accessed.
var http = require("http");
http.createServer(function(req,res){
    res.end("Hello World!");
}).listen(8080);