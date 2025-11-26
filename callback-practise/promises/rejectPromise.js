// 2. Reject a Promise

// Create a Promise that:

// rejects with "Error occurred!"

// use .catch() to handle it.

function resolvePromise() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
           reject("promise rejected")
        }, 1000);
    })
}
resolvePromise().then((message) => {
    console.log(message)
}).catch((err)=>{
    console.log("something went wrong")
})
