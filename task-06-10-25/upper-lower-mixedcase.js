let prompt=require("prompt-sync")()
let str=prompt("enter a string")
if (str===str.toUpperCase()) {
    console.log("String is all uppercase")
} else if (str===str.toLowerCase()) {
    console.log("String is all lowercase")
}else {
  console.log("String is mixed case")  
}