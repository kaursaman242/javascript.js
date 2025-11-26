function sum(a,b,c,d,e){
    return a+b+c+d+e

}

console.log(sum(1,2,3,4,5))


// rest parameter 
// function sumRest(...args){
//     console.log('args', args)
//     return args.reduce((acc,cur)=>{
//        return  acc+cur
//     },0)
// }

// console.log(sumRest(1,2,3,4,5,6,7,8,9,10))


//simple sum  a, b , ...rest
function simpleSum(a,b,...rest){
    console.log('a', a)
    console.log('b', b)
    console.log('rest', rest)
    return a+b+ rest.reduce((acc,cur)=>{
        return acc+cur
    },0)
}

console.log(simpleSum(1,2,3,4,5,6,7,8,9,10))