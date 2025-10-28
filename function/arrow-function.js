const otherWayOfGmailValidity=(str)=>{

  if (str.includes("@")) {
        if (str.includes("gmail")) {
            return "It is a valid email"
        } else {
              throw new Error( "its not a gmail")
        }

    } else {
     throw new Error( "@ is not included")
    }
  
}
const data=otherWayOfGmailValidity("saman@tickmark.io")
console.log(data)


