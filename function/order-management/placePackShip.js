// Create 3 callback functions:
const placeOrder=( orderName, funcPackOrder, funcShipOrder)=>{
    console.log(`Order has been placed for ${orderName}.`)
  funcPackOrder(orderName,funcShipOrder)
}
const packOrder=( orderName, funcShipOrder)=>{
    console.log(" Your order is packed.")
    funcShipOrder()
}
const shipOrder=( )=>{
    console.log("Your order is shipped .")
}
placeOrder("laptop", packOrder, shipOrder)


// function orderPlacedCallback(orderN,po,so) {
//     console.log(`Order has been placed for ${orderN}.`)
    
// po(orderN,so)
// }

// orderPlacedCallback("laptop", packOrder, shipOrder);