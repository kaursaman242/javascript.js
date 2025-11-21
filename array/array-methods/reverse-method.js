// ✅ What is reverse() method?

// reverse() is used to reverse the order of elements in an array.

// 👉 It modifies the original array.
// 👉 It does not create a new array.

// ✅ 1. Basic Example
const arr = [1, 2, 3, 4];

arr.reverse();

console.log(arr); // [4, 3, 2, 1]


// The array is fully reversed.

// ✅ 2. Reverse a string (indirect method)

// Strings cannot be reversed directly, so we convert to array → reverse → join back.

const str = "hello";

const reversed = str.split("").reverse().join("");

console.log(reversed); // "olleh"

// ✅ 3. Reverse array of names
const names = ["Aman", "Sahil", "Riya"];

names.reverse();

console.log(names); // ["Riya", "Sahil", "Aman"]