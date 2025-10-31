// Create a function countLetters(str, callback) that counts how many letters are in the string (excluding spaces) and sends the result to the callback.
function countLetters(str,callback) {
    let count=0
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            count++;
        }       
    }
    console.log(count);
    callback();   

}
function printCount() {
}   
countLetters("Hello World, welcome to JavaScript functions!",printCount);