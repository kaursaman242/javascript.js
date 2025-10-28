// let str="abc1234xyz"
// let digit=0
// for (let i = 0; i < str.length; i++) {
//    if (str[i]>=1 && str[i]<=10) {
//     digit++
//    }    
// }
// console.log(digit)

// let i=0
// while (i<str.length) {
//    if (str[i]>=1 && str[i]<=10) {
//     digit++
//    } 
//    i++   
// }
// console.log(digit)
// function
 function digitCount(str) {
   let digit=0
   for (let i = 0; i < str.length; i++) {
   if (str[i]>=1 && str[i]<=10) {
    digit++
   }    
}
return digit
 }
 const output=digitCount("abc1234xyz")
 console.log(output)