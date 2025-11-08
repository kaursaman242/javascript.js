// You have an array ["math", "science", "english", "art", "music"]

// → Filter out subjects whose names do not contain the letter “a”,

// → Then transform each remaining word to uppercase.

// Output: ["MATH", "ART"]
const subjects = ["math", "science", "english", "art", "music"]

const filteredSubjects = subjects.filter((subject) => {
  return subject.includes("a")
})
const result = filteredSubjects.map((subject) => {
  return subject.toUpperCase()
})

console.log(result)