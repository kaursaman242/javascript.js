// let str="abcdefg"
// let str1=str.split("").reverse().join("")

// let skipstr=''
//  for (let i = 0; i < str1.length; i++) {
//   if (i%2!==0) {
//     continue
//   }else{
//        skipstr=skipstr + str1[i]
//   }

//  }
//  console.log(skipstr)

//  function
function skippingReverse(str) {
  if (str === undefined || str === "" || typeof str === "number") {
    throw new Error(`Provide a valid string your value is ${str === undefined ? str : typeof str === "number" ? str : str === "" ? "String is empty" : ""} `)
  }
  let str1 = str.split("").reverse().join("")

  let skipstr = ''
  for (let i = 0; i < str1.length; i++) {
    if (i % 2 !== 0) {
      continue
    } else {
      skipstr = skipstr + str1[i]
    }

  }
  return skipstr
}

const output = skippingReverse(34)
console.log(output)
