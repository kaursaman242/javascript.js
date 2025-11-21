// Create a function loopThroughChars(str, callback) that calls the callback once for every character in the string.
function loopThroughChars(str, callback) {
    for (let i = 0; i < str.length; i++) {
        callback(str[i]);
    }   
}
function printChar(char) {
    console.log(char);
}       
loopThroughChars("Hello", printChar);