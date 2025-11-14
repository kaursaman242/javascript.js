// Write a function multiCall(message, callback, times) that calls the callback with the message repeatedly using a loop.
function multiCall(message,callback,times) {
    for (let i = 0; i < times; i++) {
    callback(message)
    }

}
function printMessage(result) {
    console.log(result)
}
multiCall("Hey everyone! JS is easy to learn language",printMessage,4)