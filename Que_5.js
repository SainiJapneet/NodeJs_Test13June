//Write a JavaScript program that checks if a given string is a palindrome.
function isPalindrome(orignalStr){
    let revStr = "";
    for(i = orignalStr.length - 1 ; i >= 0; i--){
        revStr += orignalStr[i];
    }
    if(orignalStr == revStr){
        return true;
    }
    else{
        return false;
    }
}
console.log(isPalindrome("racecar"));

