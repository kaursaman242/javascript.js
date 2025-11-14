// You have an array ["car", "bus", "bike", "cycle"]

// → Keep only the words whose length is greater than 4.

// Output: ["cycle"]

const vehicles=["car", "bus", "bike", "cycle"]
const newVehicles=vehicles.filter((value)=>{
    if (value.length>4) {
        return value
    }
})
console.log(newVehicles)
