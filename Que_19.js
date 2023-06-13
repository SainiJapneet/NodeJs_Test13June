//Write a JavaScript function getRandomNumber that generates a random number between 1 and 10. 
//Implement a promise that resolves with the generated random number. 
//The promise should be rejected if the generated number is less than 5
function getRandomNumber(){
    const randNumber = Math.floor(Math.random() * 10) 
    return new Promise((res,rej)=>{
        if(randNumber < 5){
            rej();
        }
        else{
            res();
        }
    })
}
getRandomNumber()
  .then(number => console.log('Resolved => ' + number))
  .catch(error => console.error('Rejected => ' + error));