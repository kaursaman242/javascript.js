// Write a function checkLength(str, callback) that calls the callback with true if length > 5, else false.
function checkLength(str, callback) {
    if (str.length > 5) {
        callback(true)
    } else {
        callback(false)
    }
}
function printLengthResult(isLong) {
  const message = isLong ? "String is longer than 5 characters." : "String is 5 characters or shorter.";
  console.log(message);
}
checkLength("Hello to all!", printLengthResult)