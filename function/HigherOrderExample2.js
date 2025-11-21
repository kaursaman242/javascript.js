function createGreeter(greeting) {
  return function(name) { // This inner function is returned
    console.log(`${greeting}, ${name}!`);
  };
}

let sayHello = createGreeter("Hello"); // createGreeter is a HOF
sayHello("Alice"); // Output: Hello, Alice!

let sayHi = createGreeter("Hi");
sayHi("Bob"); // Output: Hi, Bob!