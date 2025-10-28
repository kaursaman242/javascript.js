// let prompt = require("prompt-sync")()
// let email = prompt("Create your email")
// if (email.includes("@")) {
//     console.log("Valid Email!")
//     if (email.includes("."))
//         console.log("Valid Email!")
//     else {
//         console.log("Error!")
//     }
// }
const email="saman1.com"

if(!email.startsWith("@")&&!email.startsWith(".")){

    if(email.includes("@")){

        if(email.includes(".")){

            console.log("Valid email")
        }else{
            console.log("Invalid email")
        }
    }else{
        console.log("Invalid email")
    }
}else{
    console.log("Invalid email")
}