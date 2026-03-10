// 2. Add Numbers with Callback

// Write a function add(a, b, callback) that adds two numbers and sends the result to the callback.
const add=(a,b,callback)=>{
const result=(a+b)
callback(result)
}

const addNumbers=(num)=>{
    console.log("total is:" ,num)
}
 
add(5,10,addNumbers)