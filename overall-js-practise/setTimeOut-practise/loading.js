// Loading Screen Simulation

// Print:

// Loading.
// Loading..
// Loading...
// Completed!


// Each line after 1 second delay.
function loadingScreen(message,delay,callback) {
    setTimeout(() => {
        console.log(message)
        callback()
    }, delay);
}

function loading1(){
    loadingScreen("loading...",1000,loading2)
}

function loading2(){
  loadingScreen("loading...",1000,loading3)
}

function loading3() {
  loadingScreen("loading...",1000,completed)
}

function completed() {
    console.log("Completed!")
}

loading1()