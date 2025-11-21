// You have an array ["red", "yellow", "green", "grey", "gold"]

// → Keep only words that start with “g”,

// → Then replace all "g" with "GREAT-".

// Output: ["GREAT-green", "GREAT-grey", "GREAT-gold"]
const colours = ["red", "yellow", "green", "grey", "gold"];
const filteredColours = colours.filter((colour) => {
  return colour.startsWith("g");
})
const result = filteredColours.map((colour) => {
  return colour.replace("g", "GREAT-")
})
console.log(result);