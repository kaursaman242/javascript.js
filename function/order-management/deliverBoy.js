const orderPacked=( orderID,callback)=>{
    console.log(`order ${orderID} is packed`)
    callback()
}
const orderShipped=()=>{
    console.log("Handing over to delivery boy")
}   
orderPacked(1234567890,orderShipped)