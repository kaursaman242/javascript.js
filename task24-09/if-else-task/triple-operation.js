let u = 5;
let v = 2;
let w = "7";

// Step 1: u *= 2
// Step 2: v += u
// Step 3: Check if v < w
// Step 4: Check if u + v >= Number(w)
u *= 2
v += u
v<Number(w) ? console.log("it's right") : console.log("it's wrong")
u + v >= Number(w) || !v<Number(w) ? console.log("it's true") : console.log("it's false")
console.log(u + v >= Number(w) , !v<Number(w))