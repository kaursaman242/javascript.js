// ✅ What is splice() method?

// splice() is an array method used to:

// ✔ Add elements
// ✔ Remove elements
// ✔ Replace elements

// And it changes the original array.


// ✅ Syntax
// array.splice(startIndex, deleteCount, item1, item2, ...)


// Where:

// startIndex → from where to start

// deleteCount → how many items to remove

// item1, item2… → elements to insert (optional)

// remove element
const fruits = ["apple", "banana", "mango", "orange"];

fruits.splice(1, 2);  
// Start at index 1, remove 2 items

console.log(fruits); // ["apple", "orange"]

// add element
const fruit = ["apple", "banana"];

fruit.splice(1, 0, "mango");
// Start at index 1, remove 0 items, add "mango"

console.log(fruit); // ["apple", "mango", "banana"]

// replace element
const nums = [1, 2, 3, 4];

nums.splice(1, 2, 99, 100);
// Start at index 1
// Remove 2 elements (2, 3)
// Add 99, 100

console.log(nums); 

// get remove elements
const arr = [10, 20, 30, 40];

const removed = arr.splice(1, 2);

console.log(removed); // [20, 30]
console.log(arr);     // [10, 40]


// insert at last index
const arr1 = [1, 2, 3];

arr1.splice(arr1.length, 0, 4);

console.log(arr1); // [1, 2, 3, 4]



