// Given:
// const arr = ["apple", [1, 2, [3, 4]], "banana"];
// Use nested loops to collect all numbers into a new array numbers.

// 👉 Expected output: [1, 2, 3, 4]
// const arr = ["apple", [1, 2, [3, 4]], "banana"];
// const numbers = []
// for (const index in arr) {
//     if (Array.isArray(arr[index])) {
//         for (const subIndex in arr[index]) {
//             numbers.push(arr[index])
//             if (Array.isArray(arr[index][subIndex])) {
//                 for (const deepIndex in arr[index][subIndex]) {
//                     numbers.push(arr[index][subIndex][deepIndex])
//                 }
//             }
//         }
//     }
// }
// console.log(numbers)

const arr = ["apple", [1, 2, [3, 4]], "banana"];
const numbers = [];

for (let i = 0; i < arr.length; i++) {
  if (Array.isArray(arr[i])) {
    // level 1
    for (let j = 0; j < arr[i].length; j++) {
      if (Array.isArray(arr[i][j])) {
        // level 2 (deep)
        for (let k = 0; k < arr[i][j].length; k++) {
          numbers.push(arr[i][j][k]);
        }
      } else {
        numbers.push(arr[i][j]);
      }
    }
  }
}

console.log(numbers);
