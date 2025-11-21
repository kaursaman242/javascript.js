// You have:
// const students = ["Sahil", "Saman", "Prabh", "Raman"];
// Write a .forEach() loop that:


// Converts every name to uppercase.
// Creates a new array upperNames containing all the uppercase names (without using .map()).
const students = ["Sahil", "Saman", "Prabh", "Raman"]
students.forEach((name, index, arr) => {
 arr[index] = name.toUpperCase()
})
console.log(students)