// Write a function repeatText(text, times, callback) that prints the text times number of times, then calls the callback.
function repeatText(text, times, callback) {
    for (let i = 0; i < times; i++) {
        console.log(text);
    }       
    callback();   
}   
function result(printText) {
    console.log(printText);
}
repeatText("Hello to all!", 5, result);