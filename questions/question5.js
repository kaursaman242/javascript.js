// Write a function removeSpaces that takes a string and a callback.
// Loop through the string and build a new string with all spaces removed.
// Pass the new string to the callback.
function removeSpaces(str, callback) {
    let result = ''   
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result += str[i]
        }
    }
    callback(result)
}
function printStringWithoutSpaces(newStr) {
    console.log(newStr)
}   
removeSpaces("Hello World! This is a javascript.", printStringWithoutSpaces)