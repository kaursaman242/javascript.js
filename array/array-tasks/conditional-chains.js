// You have an array ["code", "debug", "test", "deploy", "review"]

// → For each word:


// If it starts with "d", convert to uppercase.


// If it contains "e", append "✅".


// Otherwise, convert to lowercase.

// Output: ["code✅", "DEBUG✅", "test✅", "DEPLOY✅", "review✅"]
const tasks = ["code", "debug", "test", "deploy", "review"];

const result = tasks.map((task) => {
    if (task.startsWith("d")) {
        return task.toUpperCase();
    } else if (task.includes("e")) {
        return `${task}✅`;
    } else {
        return task.toLowerCase();
    }   
});

console.log(result);