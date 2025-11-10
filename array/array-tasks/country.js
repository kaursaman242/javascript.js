// You have an array ["India", "USA", "UAE", "France", "Iran"]

// → Keep only the countries that start with "I",

// → And convert them to lowercase.

// Output: ["india", "iran"]
const countries = ["India", "USA", "UAE", "France", "Iran"];

const result = countries
  .filter((country) => country.startsWith("I"))
  .map((country) => country.toLowerCase()); 
console.log(result);