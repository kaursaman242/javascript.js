// 3. Display Message After Delay

// Use setTimeout with a callback to print "Task done!" after 2 seconds.
const displayMessage = (callback) => {

    setTimeout(() => {
        callback("Task done!")
    },2000)

}

const showMessage=(message)=>{
    console.log(message)
}

displayMessage(showMessage)
