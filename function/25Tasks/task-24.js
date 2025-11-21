// Write a function removeLastChar(str, callback) that removes the last character and passes it to the callback.
function removeLastChar(str, callback) {
    let result = str.slice( 0, -1 )
    callback(result)
}                                           
function printNewString(newStr) {
    const message = `String after removing last character: ${newStr}`
    console.log(message)
}
removeLastChar("Hello!", printNewString)