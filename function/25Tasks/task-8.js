// Write a function reverseAndPrint(str, callback) that reverses a string using a loop and then calls the callback with the reversed result.
function reverseAndPrint(str, callback) {
    let reversed = '';  
    for (let i = str.length - 1; i >= 0; i--) {
        reversed+=str[i]
    }
   const result = reversed;
   console.log(result);
   callback();
}
function printStr() {
}
reverseAndPrint("Hello to all!",printStr)