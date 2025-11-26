// Write a function charFrequency that takes a string and a callback.
// Loop through the string to count how many times the letter 'a' (case-insensitive) appears.
// Send the count to the callback.
function charFrequency(str, callback) {
    let count = 0      
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a') {
            count++
        }
    }
    callback(count)
}
function printCharFrequency(count) {
    console.log(count)
}
charFrequency("An apple a day keeps the doctor away", printCharFrequency)