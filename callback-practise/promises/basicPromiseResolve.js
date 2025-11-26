// 1. Basic Promise Resolve

// Create a Promise that:

// resolves after 2 seconds

// prints "Promise Resolved!"

function resolvePromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("promise resolve")
        }, 1000);
    })
}
resolvePromise().then((message) => {
    console.log(message)
})
