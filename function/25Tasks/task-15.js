// Write a function countWords(str, callback) that counts the number of words separated by spaces and sends the result to the callback.
function countWords(str, callback) {
    let count = 0;     
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            count++
        }
    }
    callback(count)
}
function totalCount(result) {
    console.log(result+1)
}
countWords("Hello to all!", totalCount)