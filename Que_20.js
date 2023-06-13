//Write a JavaScript function checkFileExists that checks if a file exists asynchronously using promises. 
//The function takes a file path as an argument and returns a promise. 
//Inside the function, after a delay of 1 second, check if the file exists. 
//If the file exists, resolve the promise. If the file does not exist, reject the promise.
var fs = require('fs');
function checkFileExists(filePath) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const fileExists = fs.access(filePath,fs.constants.F_OK,(err)=>{
            if(err){
                return false;
            }
            else{
                return true;
            }
        });
        if (fileExists) {
          resolve();
        } else {
          reject(new Error('File does not exist.'));
        }
      }, 1000);
    });
  }
  
  checkFileExists('./myfile.txt')
    .then(() => console.log('File exists.'))
    .catch(error => console.error('File does not exist => ' + error));