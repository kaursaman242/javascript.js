// ✅ What is fill() method?

// fill() is used to replace all elements in an array with a given value.

// You can fill:

// the whole array, or
// only a part of the array (using start & end index)


// ✅ Syntax
// array.fill(value, startIndex, endIndex)


// value → what you want to fill

// startIndex → (optional) from where to start

// endIndex → (optional) till where to stop (not included)


// fill entire array
const arr = [1, 2, 3, 4];
arr.fill(0);

console.log(arr);  // [0, 0, 0, 0]

// fill from specific index
const arr1 = [1, 2, 3, 4, 5];
arr1.fill(9, 2);

console.log(arr1);  // [1, 2, 9, 9, 9]

// fill between start and end
const arr2 = [1, 2, 3, 4, 5];
arr2.fill(7, 1, 4);

console.log(arr2);  // [1, 7, 7, 7, 5]


