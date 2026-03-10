const checkCOD=(amount, callback)=>{
    if(amount>=2000){
        console.log("COD is available.")
}else{
        console.log("COD is not available for orders above 2000.")
    }
    callback()
}
const checkout=()=>{
    console.log("Continue to checkout.")
}   
checkCOD(2000,checkout)
