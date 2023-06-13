//Write a JavaScript function multiplyByTwo that takes a number as an argument and multiplies it by two. Implement a callback function
//callback that receives the result of the multiplication and displays it on the console.
function multiplyByTwo(num, callback){
    let newNum = num*2;
    callback(newNum);
}
function callback(num){
    console.log(num);
}
multiplyByTwo(15,callback)

