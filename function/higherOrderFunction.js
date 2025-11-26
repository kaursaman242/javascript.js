// Higher-order function definition

const higherOrderFunction = (num1, num2, print) => {
    const result = num1 + num2; // Perform some operation (addition in this case)
    return {print ,result};
};

// Callback function definition
const printResult = (result) => {
   return `The result is: ${result}`;
};


const returnValue=higherOrderFunction(5, 10, printResult); 
console.log( returnValue.print(returnValue.result))