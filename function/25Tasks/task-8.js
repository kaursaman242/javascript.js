// Write a function reverseAndPrint(str, callback) that reverses a string using a loop and then calls the callback with the reversed result.
function reverseAndPrint(str, callback) {
    let reversed = '';  
    for (let i = str.length - 1; i >= 0; i--) {
        reversed+=str[i]
    }
 
   callback(reversed);

}
function printStr( reversedStr ) {
    console.log(reversedStr)
}
reverseAndPrint("Hello to all!",printStr)