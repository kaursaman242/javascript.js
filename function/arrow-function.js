const otherWayOfGmailValidity=(str)=>{
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


