// 7. Bank OTP Expiry Simulation

// Generate an OTP.
// After 10 seconds:

// Print “OTP expired”
// Before that user enters:

// “OTP verified successfully”

function OTP() {
    console.log("OTP verified successfully!")
}

setTimeout(() => {
    console.log("OTP expired!")
}, 10000);

OTP()