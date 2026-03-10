// Typing Effect on Text

// Print a message one character at a time with a delay.

// Example:

// H
// He
// Hel
// Hell
// Hello

function typingText(message,delay,cb) {
    setTimeout(() => {
        console.log(message)
        cb()
    }, delay);
}

function printH() {
    typingText("H",1000,printHE)
}

function printHE() {
    typingText("He",1000,printHEL)
}
function printHEL() {
    typingText("Hel",1000,printHELL)
}
function printHELL() {
    typingText("Hell",1000,printHELLO)
}
function printHELLO() {
    typingText("Hello",1000,finish)
}
function finish() {
    console.log("finish!")
}

printH()
