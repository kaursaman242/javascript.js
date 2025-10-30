// Create 3 callback functions:
const placeOrder=( orderName, funcPackOrder, funcShiporder)=>{
    console.log(`Order has been placed for ${orderName}.`)
  funcPackOrder(orderName,funcShiporder)
}
const packOrder=( orderName, funcShiporder)=>{
    console.log(" Your order is packed.")
    funcShiporder()
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