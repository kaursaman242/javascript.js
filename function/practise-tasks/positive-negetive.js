// Function that checks if a number is positive or negative
const isPositiveOrNegative = (number) => {
  if (number >= 0) {
    return "Positive";  
    } else {
    return "Negative";
    }
}
const result = isPositiveOrNegative(10);
console.log(result);