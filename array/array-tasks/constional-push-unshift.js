// You have:
// const students = ["Sahil", "Riya", "Saman", "John"];
// const selected = [];
// If the name starts with "S", push() it into selected,

// else unshift() it.

// 👉 What is the final selected array?
const students = ["Sahil", "Riya", "Saman", "John"]
const selected = []
students.forEach(value => {
    if (value.startsWith("S")) {
        selected.push(value)
    }
});
console.log(selected)
