const original = {
    name: "John",
    details: {
        age: 20,
        city: "Delhi"
    }
};

// Deep copy
const copied = JSON.parse(JSON.stringify(original));

copied.details.city = "Mumbai";

console.log("Original:", original.details.city); // Delhi (unchanged)
console.log("Copied:", copied.details.city);     // Mumbai
