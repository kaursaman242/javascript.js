const str="welcome to javascript learning"
const splitStr=str.split(" ")
console.log(splitStr)
const arr=splitStr[0]
console.log(arr)
const w=arr[0]
console.log(w)
const upperW=w.toUpperCase()+arr.slice(1)
console.log(upperW)

const arr2=splitStr[1]
console.log(arr2)
const t=arr2[0]
console.log(t)
const upperT=t.toUpperCase()+arr2.slice(1)
console.log(upperT)

const arr3=splitStr[2]
console.log(arr3)
const j=arr3[0]
console.log(j)
const upperJ=j.toUpperCase()+arr3.slice(1)
console.log(upperJ)

const arr4=splitStr[3]
console.log(arr4)
const l=arr4[0]
console.log(l)
const upperL=l.toUpperCase()+arr4.slice(1)
console.log(upperL)

const all=upperW+ " "+upperT+" "+upperJ+" "+upperL
console.log(all)