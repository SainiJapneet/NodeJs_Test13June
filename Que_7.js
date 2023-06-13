//Modify the previous program to include an HTTP header with the content type 'text/html' in the server response.
var http = require("http");
http.createServer(function(req,res){
    res.writeHead(200,{
        "Content-Type": "text/html",
    });
    res.end("Hello World!");
}).listen(8080);