const arr = [1, 2, 3, 4, 5];
const refArr = arr; 
console.log('refArr', refArr)

refArr.push(6);
console.log('arr after modifying refArr', arr)
const newArr=[]
console.log('newArr', newArr)

newArr=arr
console.log('newArr after reassignment', newArr)