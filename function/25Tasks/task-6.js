// Create a function processText(text, callback) that converts the text to uppercase and passes it to the callback.
function processText(text,callback) {
const upperText=text.toUpperCase()
  callback(upperText)

}
function convertText( uppercase) {
    console.log(`${uppercase}`)
}
processText("hello everyone! we are learning javascript.",convertText)  