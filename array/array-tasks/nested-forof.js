// const data = [10, 20, [30, 40], 50];
// 🧠 Task:
// Use for...of to print:
// Simple numbers directly
// If an item is an array → print its inner values with a prefix like Nested:
// Output:
// 10
// 20
// Nested: 30
// Nested: 40
// 50
const data = [10, 20, [30, 40], 50];
for (const item of data) {
    if (Array.isArray(item)) {  
        for (const nestedItem of item) {
            console.log(`Nested: ${nestedItem}`);
        }
    } else {
        console.log(item);
    }
}

