let prompt = require("prompt-sync")()
let username = prompt("Enter your username")
let password = prompt("Enter your password")
const hasUpperCase=password!==password.toLowerCase()
if (password.length >= 8) {

    if (hasUpperCase) {


        if (password.includes("0") || password.includes("1") || password.includes("2") || password.includes("3") || password.includes("4") || password.includes("5") || password.includes("6") || password.includes("7") || password.includes("8")) {

            if (password.includes("@") || password.includes("#")) {
                console.log("Login successfully ", username.toLowerCase())
            } else {
                console.log("Password must contain atleat one special chracter")
            }
        } else {
            console.log("Password must contain 8 digits")
        }
    }else{
        console.log("Password must have atleast one uppercase")
    }
} else {
    console.log("Password must be 8 digit long")
}