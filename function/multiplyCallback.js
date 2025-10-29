const multiply=(num1,num2,callback)=>{
const product=num1* num2
callback(product)//calling the function

}
const printResult=(result)=>{ // definition of callback function
    console.log(`Product is : ${result}`)
}
multiply(2,3, printResult)// pass num1,num2, and callback func as printResult

// same as previous one
multiply(2,3, function(result){
 console.log(`Product is : ${result}`)
})
