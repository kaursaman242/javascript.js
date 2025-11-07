// const numbers = [10, 20, 30];

// Use a for...in loop to print:
// Index 0: 10
// Index 1: 20
// Index 2: 30
const numbers = [10, 20, 30];
for(const index in numbers){
    console.log(`Index ${index}: ${numbers[index]}`)
}