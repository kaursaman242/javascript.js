// Write a function checkForSubstring(str, word, callback) that checks if word exists in str and sends the boolean result to the callback.
function checkForSubstring(str, word, callback) {
    let exists = str.includes(word);
    callback(true);
}
function printSubstringExists(exists) {
    console.log(exists);
}
checkForSubstring("Hello to all!", "all", printSubstringExists);