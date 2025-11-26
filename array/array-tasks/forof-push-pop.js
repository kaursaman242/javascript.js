// const items = ["pen", "pencil", "eraser", "scale"];
// 🧠 Task:

// Use for...of to print all items.

// Then use pop() to remove the last item and push("sharpener") to add a new one.

// Print the final array.
const items = ["pen", "pencil", "eraser", "scale"];
for (const item of items) {
    console.log(item);
}
items.pop();
items.push("sharpener");
console.log(items);