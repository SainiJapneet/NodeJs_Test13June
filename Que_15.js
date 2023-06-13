//Create a Node.js program that renames a file called "mynewfile1.txt" 
//to "myrenamedfile.txt" using the fs.rename() method.
var fs = require('fs');
fs.rename('./mynewfile1.txt','./myrenamedfile.txt',(err)=>{
    if(err){
        console.log("Something went wrong => " + err0);
    }
    else{
        console.log("File renamed");
    }
})