// Make an object calculator with methods:

// add(a, b)

// subtract(a, b)

// Call both methods.
const calculator={
    a:10,
    b:6,
   sub:function(a, b) {
    return a-b
   }
}
const ouptut=calculator.sub(calculator.a +23, calculator.b )
console.log(ouptut)


calculator.add=function(a,b){
    return a+b
}
const output1=calculator.add(calculator.a,calculator.b)
console.log(output1)


