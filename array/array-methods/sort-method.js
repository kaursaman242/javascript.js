// 🟩 2. Correct number sorting (ascending)

// Use compare function:

const numbers = [20, 5, 100, 15];

numbers.sort((a, b) => a - b);

console.log(numbers); // [5, 15, 20, 100]

// 🟥 3. Descending order
const nums = [20, 5, 100, 15];

nums.sort((a, b) => b - a);

console.log(nums); // [100, 20, 15, 5]

// 🟧 4. Sort alphabetically (strings)
const fruits = ["banana", "apple", "cherry"];

fruits.sort();

console.log(fruits); // ["apple", "banana", "cherry"]

// 🟪 5. Sort strings in reverse alphabetical order
const fruit = ["banana", "apple", "cherry"];

fruit.sort().reverse();

console.log(fruit); // ["cherry", "banana", "apple"]

// 🟦 6. Sort objects (like by age)
const students = [
  {name: "Aman", age: 18},
  {name: "Sahil", age: 20},
  {name: "Riya", age: 19}
];

students.sort((a, b) => a.age - b.age);

console.log(students);



