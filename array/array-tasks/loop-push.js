// Write a for loop to copy all items from

// const nums = [2, 4, 6, 8]

// into a new array doubles, but each item should be multiplied by 2 using push().
// 👉 Output should be [4, 8, 12, 16]
const nums = [2, 4, 6, 8];
const doubles = []
for(let i = 0; i < nums.length; i++){
    doubles.push(nums[i] * 2)
} 
console.log(doubles)