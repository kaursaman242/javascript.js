// Write a function that checks if a number is even or odd
const isEvenOrOdd = (number) => {
    if (number % 2 === 0) {
        return "Even";      
    } else {
        return "Odd";       
    }   
}
const result = isEvenOrOdd(7);
console.log(result);