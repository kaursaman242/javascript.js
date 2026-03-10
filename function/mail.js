


const subject = () => {
    const data = "leave for 5 nov"
    return data

}

const body = () => {
    const data = "take leave for full day"
    return data


}
let gmailSubject = ""
let gmailBody = ""

const sendMail = (sub, b) => {

    gmailSubject = sub()
    if (gmailSubject) {
        gmailBody = b()

        if (gmailBody) {
            console.log("Gmail Notification:- Mail send successfully")
        }
        else {
            console.log("Please provide body")
        }

    } else {
        console.log("Please provide subject")
    }


    return true
}

const toast = (data) => {
    if (data) {
        console.log("App Notification:- Mail send")
    }


}

const data = sendMail(subject, body)

if (data) {
    toast(data)
}
