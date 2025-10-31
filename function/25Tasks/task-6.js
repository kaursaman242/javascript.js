// Create a function processText(text, callback) that converts the text to uppercase and passes it to the callback.
function processText(text,callback) {
    console.log(text.toUpperCase());
    callback();
}
function convertText() {
}
processText("hello everyone! we are learning javascript.",convertText)