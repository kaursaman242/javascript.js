// Create a function showMessage(callback) that logs "This is before callback", calls the callback, and then logs "This is after callback"
const showMessage=(callback)=>{
    console.log("This is before callback");
    console.log("calls the callback")
    callback();
}
const showOtherMessage=()=>{
    console.log("This is after callback")
}
showMessage(showOtherMessage)