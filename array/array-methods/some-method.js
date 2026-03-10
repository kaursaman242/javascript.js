// ✅ What is some() method?

// some() checks whether at least one element in the array passes a given test (condition).

// Returns true → if any one item satisfies the condition

// Returns false → if none of the items satisfy the condition

// Does not change the original array

// ✅ Syntax
// array.some(function(element){
//     return condition;
// });

// ⭐ 1. Check if at least one number is even
const numbers = [1, 3, 5, 8];

const result = numbers.some(num => num % 2 === 0);

console.log(result); // true


// ⭐ 2. Return false when no element matches
const nums = [1, 3, 5];

console.log(nums.some(n => n % 2 === 0)); // false

// ⭐ 3. Check if any string starts with "A"
const names = ["Sahil", "Riya", "Aman", "John"];

console.log(names.some(name => name.startsWith("A"))); // true

// ⭐ 4. Works with objects also
const students = [
    {name: "A", marks: 80},
    {name: "B", marks: 20},
    {name: "C", marks: 90}
];

const someoneFailed = students.some(s => s.marks < 35);

console.log(someoneFailed)

