// const arr = ["a", ["b", "c", "d"], "e"];
// 🧠 Task:

// Use for...in to loop through indexes,

// and if the value is an array, use another for...in to print inner indexes and values.
const arr = ["a", ["b", "c", "d"], "e"];
for (const index in arr) {
    const value = arr[index];
    if (Array.isArray(value)) {
        for (const innerIndex in value) {
            console.log(`Index ${innerIndex}: ${value[innerIndex]}`);
        }
    } else {
        console.log(`Index ${index}: ${value}`);
    }
}