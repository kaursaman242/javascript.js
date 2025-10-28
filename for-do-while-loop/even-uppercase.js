



function evenCapital(str){

   if(typeof str ==="number"){
  throw new Error("Provide a number")
   }
const lowerStr=str.toLowerCase()
let myOutput=''
 for (let i = 0; i<lowerStr.length; i++) {
 if (i%2===0) {
 myOutput=myOutput+ str[i].toLowerCase()
  
} else {
   myOutput= myOutput+str[i].toUpperCase()
 
}
 
 }
return myOutput
}


const output=evenCapital("Sahil")
// const output2=evenCapital(34)
console.log(output)
// console.log(output2)

// let i=0
// do {
//     if (i%2===0) {
//  myOutput=myOutput+ str[i].toLowerCase()
  
// } else {
//    myOutput= myOutput+str[i].toUpperCase()
 
// }
// } while (
//    i<str.length);
// console.log(myOutput)