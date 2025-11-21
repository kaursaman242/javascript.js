// const obj = { a: 1, b: 2, c: 3 };
// const copyObj = { ...obj };
// copyObj.d = 4;

// console.log('copyObj', copyObj);
// console.log('obj', obj);

const obj= { a: 1, b: 2, c: 3, address: { city: 'New York', zip: 10001 } };
const obj2={d:4,e:5}

const mergedObj={...obj,...obj2, f:4}
mergedObj.g=5;
mergedObj.address.city='Los Angeles'


console.log('mergedObj', mergedObj);
console.log('obj', obj);

//deep copy and shallow copy using spread operator