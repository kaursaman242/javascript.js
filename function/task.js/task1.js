// Write a function greet(name, callback) that prints "Hello, <name>" and then calls a callback that prints "Have a nice day!"
function greet(name,callback) {
    console.log(`Hello, ${name}`)
    callback(name)
}
function niceDay(name) {
    console.log(`Have a nice day, ${name}!`)
}
greet("Saman", niceDay)