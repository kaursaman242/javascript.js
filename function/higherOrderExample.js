function operateOnNumbers(num1, num2, operation) {
  return operation(num1, num2);
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

let resultAdd = operateOnNumbers(5, 3, add); // operateOnNumbers is a HOF
console.log(resultAdd); // Output: 8

let resultMultiply = operateOnNumbers(5, 3, multiply); // operateOnNumbers is a HOF
console.log(resultMultiply); // Output: 15