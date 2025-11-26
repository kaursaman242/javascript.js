const data=["Hi","hello","How","are","u"]

const [zero,,one, ,saman]=data

// console.log(zero,one, saman)


const obj={
    name:"Sahil",
    class:"Bsc IT",
    rollNo:10572027005,
    student:{
        name:"prabhjit singh",
        rollNo:233,
        arr:["a","b","c"]
    }
}
// const [key1,key2,key3]=Object.keys(obj)
// console.log(key1,key2,key3)

const valueArray=Object.values(obj)
for (let value of valueArray){
console.log('value', value)
}


// const name=obj.Student
// const roll= obj.Student.rollNo

const {student:{name,rollNo,arr:[,b]} }=obj

console.log(name,rollNo,b)