//Write a JavaScript program that uses a for loop to iterate over the characters in a string and counts the number of vowels.
const str = "Hello World";
let vowelCount = 0;
for(i in str){
    if(str[i] == 'a' || str[i] == 'A' || str[i] == 'e' || str[i] == 'E' || str[i] == 'i'
     || str[i] == 'I' || str[i] == 'o' || str[i] == 'O' || str[i] == 'u' || str[i] == 'U'){
        vowelCount++;
    }
}
console.log("Number of vowels in given string = " + vowelCount);