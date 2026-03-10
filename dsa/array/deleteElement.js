function deleteAtPosition(arr, position) {
    // Shift elements left
    for (let i = position; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }

    // Reduce array length by 1
    arr.length = arr.length - 1;

    return arr;
}

// Example usage
const arr = [1, 2, 3, 4, 5];
let position = 2;

console.log(deleteAtPosition(arr, position));
