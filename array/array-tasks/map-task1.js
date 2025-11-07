// You have an array ["apple", "banana", "cherry"]

// → Convert each string to uppercase and create a new array.

// Output: ["APPLE", "BANANA", "CHERRY"]
const fruits=["apple", "banana", "cherry"]
const newArray=fruits.map((value)=>{
    return value.toUpperCase()
})
console.log(newArray)

