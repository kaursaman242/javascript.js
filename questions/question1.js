// Write a function countVowels that takes a string and a callback.
// In the function, loop through the string and count how many vowels (a, e, i, o, u) are present.
// Pass the total count to the callback.
function countVowels(str, callback) {
    let count = 0;
    const vowels = 'aeiouAEIOU';  
    for (i=0; i<str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
   const result= callback(count);
   return result;
}
 const output=countVowels("hello world", function(count){
  return count;
})
console.log(output);

