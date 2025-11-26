// 4. Reverse a String

// Without using .reverse(), reverse a string manually.
function reverseString(string) {
    let result=""
    for (let i=string.length-1; i>=0;  i--) {
      result+=string[i] 
    }
    return result
}
const output=reverseString("Hello to all")
console.log(output)