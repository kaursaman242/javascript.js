// You have an array ["apple", "grape", "mango", "kiwi", "melon"]
// → First, filter the words whose length is 5 or more,
// → Then convert them all to uppercase.
// Output: ["APPLE", "GRAPE", "MANGO", "MELON"]
const fruits=["apple", "grape", "mango", "kiwi", "melon"]

// first way
const filterData=fruits.filter((fruit)=>{
if(fruit.length>=5){
    return fruit
}
})
const data=filterData.map((value)=>{
    return value.toUpperCase()
})

// console.log('data', data)

// second way
const processData=fruits.filter((fruit)=>{
if(fruit.length>=5){
    return fruit
}
}).map((value=> value.toUpperCase()))

// console.log('processData', processData)

//third way
const shortWay= fruits.filter(fruit=> fruit.length>=5).map(value=> value.toUpperCase())
console.log('shortWay', shortWay)