// let str="education"
// let str1
// let myOutput=''
//  for (let i = 0; i<str.length; i++) {
//      str1=str.split("").reverse().join("")
//  if (i%2===0) {
//  myOutput=myOutput+ str1[i].toLowerCase()
  
// } else {
//    myOutput= myOutput+str1[i].toUpperCase()
 
// }
 
//  }

// console.log(myOutput)


// function
function reverseEvenUppercase(str) {
    let str1
    let myOutput=''
    for (let i = 0; i<str.length; i++) {
     str1=str.split("").reverse().join("")
 if (i%2===0) {
 myOutput=myOutput+ str1[i].toLowerCase()
  
} else {
   myOutput= myOutput+str1[i].toUpperCase()
 
}
 
 }
return myOutput
}
 const result=reverseEvenUppercase("education")
 console.log(result)