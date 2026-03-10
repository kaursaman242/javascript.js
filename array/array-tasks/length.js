// You have an array ["short", "tiny", "average", "lengthy", "massive"]

// → Keep only the words whose length is between 5 and 7,

// → And prefix each with "word:".

// Output: ["word:short", "word:average", "word:lengthy"]
const words = ["short", "tiny", "average", "lengthy", "massive"]
const filteredWords = words.filter((word) => {
  return word.length >= 5 && word.length <= 7
})
const result = filteredWords.map((word) => {
  return `word:${word}`
})
console.log(result)