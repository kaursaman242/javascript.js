// Write a function checkForSubstring(str, word, callback) that checks if word exists in str and sends the boolean result to the callback.
function checkForSubstring(str, word, callback) {
    let exists = str.includes(word);
    callback(true);
}
function printSubstringExists(exists) {
    const message = exists ? "The substring exists in the string." : "The substring does not exist in the string.";
    console.log(message);
}
checkForSubstring("Hello to all!", "all", printSubstringExists);