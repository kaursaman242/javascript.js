// Check if a number is divisible by 4 or 6 but not both.
let number =3
// console.log(number % 6 === 0 && number % 4 !== 0)
console.log(number % 6 === 0)
console.log(number % 4 !== 0)
if ((6 % number === 0 && number % 4 !== 0) || 
    (number % 4 === 0 && number % 6 !== 0))  {
    console.log("Number is divible by 4 and 6")    
}else{
  console.log("Number is not divible by 4 and 6")
}
