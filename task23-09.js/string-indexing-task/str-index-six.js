let word = "Developer";
let idx = 3;
let result = word[idx++] + word[++idx] + word[word.length - idx];
console.log(result);
