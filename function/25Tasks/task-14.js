// Write a function removeSpaces(str, callback) that removes all spaces manually (no replace) and calls the callback with the new string.
function removeSpaces(str, callback) {
    let result = '' 
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result += str[i]
        }
    }
    callback(result)
}
function printString(newStr) {
    console.log(newStr)
}
removeSpaces("Hello to all!", printString)