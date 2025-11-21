const arr = [1, 2, 3, 4, 5];
const data=[]

// for (let i=0;i<arr.length;i++){
// data.push(arr[i])
// }
// console.log('data', data)

// data.push(6)
// console.log('after pushing 6 into data array', data)
// console.log('original arr', arr)

// foreach method

// arr.forEach((item)=>{
// data.push(item)
// })
// console.log('data', data)

// data.push(6)
// console.log('after pushing 6 into data array', data)
// console.log('original arr', arr)


// map method

// const dat=arr.map((item)=>{
// data.push(item)
// return item*2
// })
// console.log('dat', dat)

// data.push(6)
// console.log('after pushing 6 into data array', data)
// console.log('original arr', arr)


// slice method

data.push(...arr.slice(0))
console.log('data', data)

//concat method

// const con=arr.concat(10,23,34)
// console.log('con', con)
// console.log('original arr', arr)