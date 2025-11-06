// Write a function replaceAt(arr, index, newValue) that replaces the value at a specific index of an array and returns the updated array.

// Example:
// replaceAt(["A", "B", "C"], 1, "Z") // ["A", "Z", "C"]
function replaceAt(arr, index, newValue) {
  arr[index] = newValue
  return arr
}
console.log(replaceAt(["A", "B", "C"], 1, "Z"))

