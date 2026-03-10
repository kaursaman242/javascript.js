// ✅ What is every() method?

// every() checks whether all elements in an array pass a given test (condition).

// Returns true → if every element satisfies the condition

// Returns false → if even one element fails the condition

// Does not change the original array

// ✅ Syntax
// array.every(function(element){
//     return condition;
// });

// ⭐ 1. Check if all numbers are positive
const numbers = [2, 5, 8, 10];

const result = numbers.every(num => num > 0);

console.log(result); // true

// ⭐ 2. Check if all numbers are even
const nums = [2, 4, 6, 8];

console.log(nums.every(n => n % 2 === 0)); // true


// ⭐ 3. when it returns false
const num = [2, 4, 7, 8];

console.log(num.every(n => n % 2 === 0)); // true\

// ⭐ 4. Check if all strings have length > 3
const names = ["Sahil", "Riya", "John"];

console.log(names.every(name => name.length > 3)); // true


// ⭐ 5. Works with objects too
const students =[ 
    {name: "A", marks: 80},
    {name: "B", marks: 75},
    {name: "C", marks: 90}
];

const allPassed = students.every(s => s.marks >= 35);

console.log(allPassed); // true

