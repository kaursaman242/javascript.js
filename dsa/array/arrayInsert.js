function insertAtPosition(arr, position, newEl) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i >= position) {
            arr[i + 1] = arr[i];
            if (i === position) {
                arr[position] = newEl;
            }
        }
    }
    return arr;
}

// Example usage
const arr = [1, 2, 3, 4, 5];
let position = 3;
let newEl = 20;

console.log(insertAtPosition(arr, position, newEl));
