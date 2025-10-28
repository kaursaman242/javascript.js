// let str="HeLLoWorld"
// let digit=0
// let upper_case=0
// let lower_case=0
// for (let i = 0; i < str.length; i++) {
//     let char=str[i]
//  if (char>="A" && char<="Z") {
//     upper_case++
//  } else if (char>="a" && char<="z") {
//     lower_case++
//  }else  {
//     digit++
//  }
    
// }
// console.log(upper_case)
// console.log(lower_case)
// console.log(digit)

// 
// function
function count(str) {
   let upper_case=0
   let lower_case=0
   let digit=0
   for (let i = 0; i < str.length; i++) {
    let char=str[i]
 if (char>="A" && char<="Z") {
    upper_case++
 } else if (char>="a" && char<="z") {
    lower_case++
 }else  {
    digit++
 }
}
return{upper_case,lower_case,digit}
}
const output=count("HeLLoWorld")
console.log(output)