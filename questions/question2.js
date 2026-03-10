// Write a function reverseString that takes a string and a callback.
// Loop through the string in reverse order and build the reversed string.
// Pass the reversed string to the callback.
 function reverseString(str, callback) {
     
        let reversed = "";
        for (let  i = str.length - 1; i >= 0; i--) {
            reversed+=str[i]

        }
       const result= callback(reversed);
       return result;
 }
 let output = reverseString("hello", function(reversed) {
    return reversed;
 })
 console.log(output);