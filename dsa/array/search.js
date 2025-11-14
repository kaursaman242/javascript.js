function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // index found
        }
    }
    return -1; // element not found
}

// Example usage
const arr = [1, 2, 3, 4, 5];
let target = 4;

const result = linearSearch(arr, target);
console.log(result);
