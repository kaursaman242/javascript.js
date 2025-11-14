// You have an array ["dog", "cat", "cow", "duck", "deer"]

// → Keep only the words that start with "d".

// Output: ["dog", "duck", "deer"]
const animals=["dog", "cat", "cow", "duck", "deer"]
const newArray=animals.filter((value)=>{
    if(value.startsWith("d"))
        return value
})
console.log(newArray)