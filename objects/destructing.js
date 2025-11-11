const data=["Hi","hello","How","are","u"]

const [zero,,one, ,saman]=data

// console.log(zero,one, saman)


const obj={
    name:"Sahil",
    class:"Bsc IT",
    rollNo:10572027005
}
// const [key1,key2,key3]=Object.keys(obj)
// console.log(key1,key2,key3)

const valueArray=Object.values(obj)
for (let value of valueArray){
console.log('value', value)
}