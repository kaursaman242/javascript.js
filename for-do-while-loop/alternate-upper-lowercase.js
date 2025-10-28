let str="javascript"
let myOutput=''
//  for (let i = 0; i<str.length; i++) {
//  if (i%2===0) {
//  myOutput=myOutput+ str[i].toUpperCase()
  
// } else {
//    myOutput= myOutput+str[i].toLowerCase()
 
// }
 
//  }

// console.log(myOutput)

// let i=0
// while (i<str.length) {
//    if (i%2===0) { myOutput=myOutput+ str[i].toUpperCase()
   
//    } else {
//    myOutput= myOutput+str[i].toLowerCase()  
// }
//     i++
// }
// console.log(myOutput)

// function
function upperLowerCase(str) {
    for (let i = 0; i<str.length; i++) {
 if (i%2===0) {
 myOutput=myOutput+ str[i].toUpperCase()
  
} else {
   myOutput= myOutput+str[i].toLowerCase()
 
}
 
 }

return myOutput
}
const output=upperLowerCase("javascript")
console.log(output)