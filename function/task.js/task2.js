// Write a function displayResult(sumCallback) that first calls another function addNumbers(5, 10, callback) and prints the result.

function addNumbers(a, b, callback) {
  const sum = a + b
    callback(sum)
}
function displayResult( result) {
    console.log(`The sum is: ${result}`)
}
addNumbers(10,50,displayResult)
   

