// const mixed = ["apple", [1, 2, ["x", "y"]], true];
// 🧠 Task:

// Use a combination of for...of loops to print every value (including the deepest ones).

// Output format example:
// apple
// 1
// 2
// x
// y
// true
const mixed = ["apple", [1, 2, ["x", "y"]], true];

for (const item of mixed) {
    if (Array.isArray(item)) {
        for (const subItem of item) {
            if (Array.isArray(subItem)) {
                for (const deepItem of subItem) {
                    console.log(deepItem);
                }
            } else {
                console.log(subItem);
            }
        }
    } else {
        console.log(item);
    }
}