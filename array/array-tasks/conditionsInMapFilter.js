// You have an array ["red", "green", "blue", "black", "brown"]

// → Keep only the words whose length is even,

// → And prefix each with "color:".

// Output: ["color:green", "color:black", "color:brown"]
const colours = ["red", "green", "blue", "black", "brown"];
const output=colours.filter((colour)=>{
    if(colour.length%2===0){
        return true;
    }
})
const result=output.map((colour)=>{
    return `color:${colour}`;
})
console.log(result);