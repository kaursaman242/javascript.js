const obj={
    name:"Sahil",
    class:"Bsc IT",
    rollNo:10572027005
}

const arrayOfKeyValues=Object.entries(obj)
// console.log(arrayOfKeyValues)


const createObject=(key, value)=>{
return {[key]:value}
}
let object
for(let keyValue of arrayOfKeyValues){

  const key=keyValue.shift();
  const value =keyValue.pop()
const obj=createObject(key,value)
object=obj
}

console.log('obj', object)
const nam="saman"
const _class= "javascript"
const key1="name"
const key2="classes"

const std={
[key1]: nam,
[key2]: _class
}
// console.log(std)