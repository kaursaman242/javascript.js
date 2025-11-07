// You have an array ["a", "b", "c"]

// → Add "-fruit" after each element.

// Output: ["a-fruit", "b-fruit", "c-fruit"]
const array=["a", "b", "c"]
const newArray=array.map((value,i)=>{
    return (`${array[i]}-fruit `)
})
console.log(newArray)
