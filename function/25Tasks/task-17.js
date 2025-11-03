// Write a function sequence(callbackA, callbackB, callbackC) that runs the three callbacks in order.
function sequence(callbackA, callbackB, callbackC) {
    callbackA( callbackB, callbackC ); 
}   
function printHello(callbackB, callbackC) {
    console.log("Hello!");
  callbackB(callbackC);
}
function printHowAreYou(callbackC) {
    console.log("How are you?")
    callbackC();
}
function printDoing() {
    console.log("What are you doing?")
}
sequence(printHello, printHowAreYou, printDoing);