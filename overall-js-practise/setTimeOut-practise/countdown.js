// 3. Countdown Timer (5 to 1)

// Print numbers:

// 5
// 4
// 3
// 2
// 1
// GO!


// 👉 Use recursive function + setTimeout.
function countdown(num) {
    if (num === 0) {
        console.log("GO!");
        return;
    } else {

        console.log(num);
    }
    setTimeout(() => {
        countdown(num - 1);
    }, 1000);
}

countdown(5);
