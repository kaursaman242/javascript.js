// 5. Sum of Array

// Write a function that returns the sum of all numbers in an array.
let arr=[24,60,38,59,30,44,78]
let total=arr.reduce((acc, items)=>acc+items,0)
console.log(total)