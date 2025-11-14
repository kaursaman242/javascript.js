// Create a function showMessage(callback) that logs "This is before callback", calls the callback, and then logs "This is after callback".
function showMessage(callback) {
    console.log("This is before callback");
    console.log("calls the callback")
    callback();
}
function showOtherMessage() {
    console.log("This is after callback")
}
showMessage(showOtherMessage)