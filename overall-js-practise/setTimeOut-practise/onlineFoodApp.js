// 2. Online Food App – Auto-Cancel Order

// If a user does not confirm order in 5 seconds:

// Print “Order Cancelled due to no response”
// Otherwise:

// Print “Order confirmed”

// (Use setTimeout + a variable to track whether user confirmed or not)
let orderConfirmed=true
function onlineOrder() {
 setTimeout(() => {
  if (orderConfirmed===true) {
    console.log("Order confirmed")
  }else{
    console.log("Order Cancelled due to no response")
  }
 }, 5000); 
}
onlineOrder()