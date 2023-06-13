//Write a JavaScript program that uses a while loop to reverse a given number.
let num = 12345;
let str = num.toString();
let len = str.length - 1;
let revNum = "";
while(len >= 0){
revNum += str[len];
len--;
}
console.log(revNum);