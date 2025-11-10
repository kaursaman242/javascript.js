// You have an array ["rain", "sun", "storm", "snow", "fog"]

// → Keep only the words containing the letter "o",

// → Then append "y" at the end of each.

// Output: ["stormy", "snowy", "foggy"]
const weather = ["rain", "sun", "storm", "snow", "fog"];
const result=weather.filter((word)=>{
    if(word.includes("o")){ 
        return true;
    }
})
const output=result.map((word)=>{
    return `${word}y`;
})
console.log(output);