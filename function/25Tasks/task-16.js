// Write a function first(callback1, callback2) that calls callback1, then callback2.
function first(callback1, callback2) {
    callback1(callback2);

}   
function greet(callback2) {
    console.log("Hello!");
    callback2();
}
function farewell() {
    console.log("Goodbye!");
}
first(greet, farewell);