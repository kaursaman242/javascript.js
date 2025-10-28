// let str="Hello World From Js"
// let upper_case=0
// let lower_case=0
// let digit=0
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

// let i=0

// while (i<str.length) {
//    if (str[i]>="A" && str[i]<="Z") {
//      upper_case++
//   } else if (str[i]>="a" && str[i]<="z") {
//      lower_case++
//   }else  {
//     digit++
//   }
//     i++
//  }
//  console.log(upper_case)

//  function
function countUpperCase(str) {
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
return{upper_case,lower_case}
}
const output=countUpperCase('Hello World From Js')
console.log(output)

// function g(){
//    if(true){

//       return true
//    }
//    else{
//       return 
//    }
// }
