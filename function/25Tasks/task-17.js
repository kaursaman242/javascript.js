// Write a function sequence(callbackA, callbackB, callbackC) that runs the three callbacks in order.
function sequence(callbackA, callbackB, callbackC) {
    callbackA();
    callbackB();
    callbackC();
}   
function printHello(result1) {
    console.log("Hello Saman!")
}
function printHowAreYou(result2) {
    console.log("How are you?")
}
function printDoing(result3) {
    console.log("What are you doing?")
}
sequence(printHello, printHowAreYou, printDoing);