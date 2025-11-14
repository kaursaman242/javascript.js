// . Count Vowels

// Write a function that counts vowels (a, e, i, o, u) in a string.

function countVowels(string) {
    let count=0
    let vowels="aeiouAEIOU"
    for(const char of string){
        if (vowels.includes(char)) {
            count++
        }
    }
    return count
}
const output=countVowels("I love javascript")
console.log(output)
