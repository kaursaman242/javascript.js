// Write a function replaceWord(str, oldWord, newWord, callback) that replaces a word in the string and passes the result to the callback.
function replaceWord(str, oldWord, newWord, callback) {
    let replaced=str.replace(oldWord, newWord)
    callback(replaced)
}
function printResult(newStr) {
    console.log(newStr)
}
replaceWord("Hello world", "world", "there", printResult)
