// what is array
// it is a collection of items 

const mixedArray=['STRING',34,true,["sahil",true,[23,["grapes","kiwi"],56]], {a:"sahil"}] // syntax
const zeroIndex=mixedArray[0]
// console.log(zeroIndex)//[]-> 0 -> STRING
const firstIndex=mixedArray[1]
// console.log(firstIndex)
const secondIndex=mixedArray[2]
// console.log(secondIndex)
const thirdIndex=mixedArray[3]
// console.log(thirdIndex)
const thirdArrayZeroIndex=thirdIndex[0]
// console.log(thirdArrayZeroIndex)
const thirdArrayFirstIndex=thirdIndex[1]
// console.log(thirdArrayFirstIndex)

const fourIndex= mixedArray[4]
// console.log(fourIndex)


const output=mixedArray[3][2][1][1].toUpperCase()
console.log(output)