// You have an array ["pen", "pencil", "eraser", "sharpener", "marker"]

// → Keep only the words that start with “p” or end with “r”,

// → Then convert them to uppercase.

// Output: ["PEN", "PENCIL", "ERASER", "MARKER"]
const words=["pen", "pencil", "eraser", "sharpener", "marker"]
const result=words.filter((word)=>{
    if (word.startsWith("p") || word.endsWith("r")) {
        return true
    }
})
const finalresult=result.map((word)=>{
    return word.toUpperCase()
})
console.log(finalresult)