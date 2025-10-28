

// let str="hello world from js"
// let reverseStr
// for(let i=0;i<str.length;i++){
//   reverseStr= str.split(" ").reverse().join("")
// break

// }

// console.log(reverseStr)

// function
function reverse(str) {
  let reverseStr
  for(let i=0;i<str.length;i++){
  reverseStr= str.split(" ").reverse().join("")


}
return reverseStr
}
const output=reverse("hello world from js")
console.log(output)