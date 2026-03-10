// 1. Even or Odd
// Write a function that takes a number and returns "Even" or "Odd".
function evenOdd(number) {
   if (number%2===0) {
        return "even"
   } else {
      return "odd"
   }
}
const output=evenOdd(60)
console.log(output)