// Create a function showMessage(callback) that logs "This is before callback", calls the callback, and then logs "This is after callback".
function showMessage(callback) {
    console.log("This is before callback");
    callback(showOtherMessage)
}
function showOtherMessage(message) {
    console.log("This is after callback")
}
showMessage(showOtherMessage)