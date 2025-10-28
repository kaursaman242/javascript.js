let prompt=require("prompt-sync")()
let p=prompt("enter a palindrome ")
let palin=p.split("").reverse().join("")
if (palin===p) {
    console.log("it is a palindrom")
} else {
    console.log("it is not a palindrom")
}