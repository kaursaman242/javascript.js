// Write a function checkLength(str, callback) that calls the callback with true if length > 5, else false.
function checkLength(str, callback) {
    if (str.length > 5) {
        callback(true)
    } else {
        callback(false)
    }
}
function printLengthResult(isLong) {
    console.log(isLong)
}
checkLength("Hello to all!", printLengthResult)