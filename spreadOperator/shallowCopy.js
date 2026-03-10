const original = {
    name: "John",
    details: {
        age: 20,
        city: "Delhi"
    }
};

// Shallow copy
const copied = { ...original };   // or Object.assign({}, original)

copied.details.city = "Mumbai";

console.log("Original:", original.details.city); // Mumbai (changed!!)
console.log("Copied:", copied.details.city);     // Mumbai
