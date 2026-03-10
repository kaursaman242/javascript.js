// You have an array ["one", "two", "three", "four", "five", "six"]

// → Filter out words whose length is even,

// → Then reverse each remaining word.

// Output: ["eno", "eerht", "evif"]
const numbers = ["one", "two", "three", "four", "five", "six"];

const filteredNumbers = numbers.filter((word) => {
  return word.length % 2 !== 0;
});
const result = filteredNumbers.map((word) => {
    return word.split("").reverse().join("");
});
console.log(result);