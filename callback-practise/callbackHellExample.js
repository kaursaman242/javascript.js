// Create a countdown:

// 5
// 4
// 3
// 2
// 1
// Happy New Year!


// Using only callbacks + setTimeout (NO loops).

const countdown = (callback) => {
    setTimeout(() => {
        console.log(5)

        setTimeout(() => {
            console.log(4)
            setTimeout(() => {
                console.log(3)
                setTimeout(() => {
                    console.log(2)
                    setTimeout(() => {
                        console.log(1)
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
    callback()
}
const newYear=()=>{
    setTimeout(() => {
     console.log("Happy New Year!")   
    }, 6000);

}

countdown(newYear)