// Write a function removeLastChar(str, callback) that removes the last character and passes it to the callback.
function removeLastChar(str, callback) {
    let result = str.slice( 0, -1 )
    callback(result)
}                                           
function printNewString(newStr) {
    console.log(newStr)
}
removeLastChar("Hello!", printNewString)