const placeOrder=(productName,callback)=>{
    console.log(`order placed for ${productName}`)
    callback()
}
const orderConfirmed=()=>{
    console.log("order confirmed!")
}
placeOrder("Book shell",orderConfirmed)