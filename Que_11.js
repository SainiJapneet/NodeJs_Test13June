//Modify the previous program to create a new file called "mynewfile2.txt" using the fs.open() method with the "w" flag.
var fs = require('fs');
fs.open('./mynewfile2.txt', 'w' , (err,fd) => {
    if(err){
        console.log("Something went wrong " + err);
    }
    else{
        fs.appendFile(fd,"Hello content!",(err)=>{})
    }
    fs.close(fd,(err)=>{})
})