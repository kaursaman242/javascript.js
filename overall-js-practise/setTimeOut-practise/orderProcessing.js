// 1. Order Processing Simulation

// Create a program that:

// Takes an order (print “Order received”)

// After 3 seconds → print “Cooking started…”

// After another 2 seconds → print “Order ready for delivery”

// After another 2 seconds → print “Order delivered”

// 👉 Use multiple setTimeout calls chained.

function orderReceived(callback) {
    console.log("Order Received")
    callback()
}
function cookingStarted(callback) {
    setTimeout(()=>{
        console.log("Cooking Started...")
          callback()
    },3000)
}
function orderReady(callback) {
    setTimeout(()=>{
        console.log("Order ready for delivery")
          callback()
    },2000)
}
function orderDelivered(callback) {
    setTimeout(() => {
        console.log("Order delivered")
        callback()
    }, 2000);
}

orderReceived(()=>{
    cookingStarted(()=>{
        orderReady(()=>{
            orderDelivered(()=>{
                console.log("Order delivered successfully!")
            })
        })
    })
})
