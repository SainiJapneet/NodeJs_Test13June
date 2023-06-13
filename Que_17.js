//Implement a JavaScript function calculateSum that takes an array of numbers as an argument and calculates their sum. 
//The function should accept a callback function callback that receives the calculated sum. 
//Invoke the callback function with the sum of the array elements.
function calculateSum(arr,callback){
    let sum = 0;
    for(i in arr){
        sum += arr[i];
    }
    callback(sum);
}
function callback(op){
    console.log(op)
}
calculateSum([5,10,15,20,25],callback)