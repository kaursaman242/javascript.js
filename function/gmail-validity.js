// function gmailValidity(str) {
//     if (str.includes("@") && str.includes("gmail")) {
//         console.log("It is a valid email")
//     } else {
//         console.log("It is not a valid email")
//     }
// }
// gmailValidity("samangmail.com")


function otherWayOfGmailValidity(str) {
    if (str.includes("@")) {
        if (str.includes("gmail")) {
            console.log("It is a valid email")
        } else {
            console.log("its not a gmail")
        }

    } else {
        console.log("@ is not included")
    }
}
otherWayOfGmailValidity("saman@tickmark.io")


function sliceWayOfGmailValidity(str) {

  const returnValue=  str.slice(0).includes("@") && str.slice(0).includes("gmail")? "Its gmail":"its not a gmail"
return returnValue


  
}
sliceWayOfGmailValidity("saman@tickmark.io")



