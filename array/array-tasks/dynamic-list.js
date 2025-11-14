const prompt = require("prompt-sync")();  // ✅ Correct
let tasks = [];  // empty array

const action = prompt("Enter action (add/remove/view): ");

if (action === "add") {
    const task = prompt("Enter your task: ");
    tasks.push(task);
}

else if (action === "remove") {
    tasks.pop();
}

else if (action === "view") {
    console.log("Tasks:", tasks);
}

else {
    console.error("Invalid action!");
}

console.log("Current Tasks:", tasks);
