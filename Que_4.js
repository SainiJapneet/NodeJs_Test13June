let num = 12345;
let str = num.toString();
let len = str.length - 1;
let revNum = "";
while(len >= 0){
revNum += str[len];
len--;
}
console.log(revNum);