// Write a function greet(name, callback) that prints "Hello, <name>" and then calls a callback that prints "Have a nice day!"
const greet=(name,callback)=>{
    console.log(`Hello, ${name}`)
    callback()
}
function niceDay() {
    console.log("Have a nice day!")
}
greet("Saman", niceDay)