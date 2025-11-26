// const nums = [2, 4, 6, 8];
// const doubled = [];
// 🧠 Task:

// Use forEach() to push double of each number into doubled.

// Expected output: [4, 8, 12, 16].
const nums = [2, 4, 6, 8]
const doubled = []
nums.forEach(num => {
    doubled.push(num * 2)
});
console.log(doubled)