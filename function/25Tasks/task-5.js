// -Write a function delayed(callback) that waits for 2 seconds using setTimeout before calling the callback.
function delayed(callback) {
    console.log("Wait for 2 seconds...");
    callback();
}
 function setTimeout() {
    console.log("Message received sucessfully after 2 seconds.");
}
delayed(setTimeout);    