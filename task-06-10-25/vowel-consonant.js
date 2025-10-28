let prompt=require("prompt-sync")()
let str=prompt("enter any word")
if (str.startsWith("a")|| str.startsWith("e")|| str.startsWith("i")|| str.startsWith("o")|| str.startsWith("u")) {
    console.log(" First letter is a vowel")
} else {
    console.log("First letter is a consonant")
}