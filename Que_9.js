//Write a Node.js program that reads the contents of an HTML file and returns 
//the content as the response when accessed via an HTTP server.
var http = require('http');
var fs = require('fs')

http.createServer(function(req,res){
    fs.readFile("myHtml.html",function(err,data){
        res.writeHead(
            200,{
                "Content-Type": "text/html",
            }
        );
        res.write(data);
        res.end('');
    })
}).listen(8080);