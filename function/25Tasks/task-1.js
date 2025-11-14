// Write a function greet(name, callback) that prints "Hello, <name>" and then calls the callback.
function greet(name,callback) {
    console.log(`Hello, ${name}.`);
    callback();
}
function niceDay() {
    console.log("Have a nice day!")
}
greet("Saman",niceDay)