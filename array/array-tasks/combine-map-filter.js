// You have an array ["apple", "grape", "mango", "kiwi", "melon"]

// → First, filter the words whose length is 5 or more,

// → Then convert them all to uppercase.

// Output: ["APPLE", "GRAPE", "MANGO", "MELON"]
const fruits = ["apple", "grape", "mango", "kiwi", "melon"];

// const result = fruits.filter((fruit) => fruit.length >= 5) .map((fruit) => fruit.toUpperCase());
const result = fruits.filter((value)=>{
    if(value.length>=5){
        return value
    }
})
const finalResult=result.map((value)=>{
    return value.toUpperCase()
})
console.log( finalResult)
