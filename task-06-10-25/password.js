let prompt=require("prompt-sync")()
let password=prompt("enter password")
if (password.length<6) {
    console.log("weak password")
 } else if (password.length>=6||password.length<=10) {
        console.log("medium password")
    }else if (password.length>10 && password.includes("@") || password.includes("#")) {
        console.log("strong password")
    } else {
    console.log("average password")
}