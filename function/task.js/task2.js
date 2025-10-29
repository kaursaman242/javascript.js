// Write a function displayResult(sumCallback) that first calls another function addNumbers(5, 10, callback) and prints the result.

function addNumbers(a, b, callback) {
     console.log(a + b )
    callback(displayResult)
}
function displayResult() {
    console.log(5 + 10)
}
addNumbers( 5,10,displayResult)
   