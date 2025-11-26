// Write a function findVowels(str, callback) that counts vowels using a for loop and sends the count to the callback.
function findVowels(str, callback) {
    let count = 0
    const vowels = 'aeiouAEIOU'    
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++
        }
    }
    callback(count)
}
function printVowelCount(vowelCount) {
    console.log(vowelCount)
}
findVowels("Hello to all!", printVowelCount)