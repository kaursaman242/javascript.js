// 1. Greeting Callback

// Write a function greet(name, callback) that prints "Hello <name>" and then calls the callback.
const greet=(name,callback)=>{
console.log(`Hello ${name}`)
callback()
}

const meet=()=>{
    console.log("Nice to meet you!")
}

greet("Saman",meet)

