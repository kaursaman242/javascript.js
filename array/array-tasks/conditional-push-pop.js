// You have:
// const students = ["Sahil", "Riya", "Saman", "John"];
// const selected = [];

// If a name starts with "S", push() it into selected.

// If it doesn’t, unshift() it into selected.

// Then pop() the last element and shift() the first one.

// Log selected after each step.
const students = ["Sahil", "Riya", "Saman", "John"]
const selected = []
students.forEach((name) => {
  if(name.startsWith("S")){
    selected.push(name)
    } else {
    selected.unshift(name)
    }
})
selected.pop()
selected.shift()
console.log(selected)