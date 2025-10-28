// for (let i = 1; i <=5; i++) {
//     let sum=0
//     for (let j = 1; j <=i; j++) {
//        sum+=j

//     }
//     console.log(sum)
// }

function sumofnaturalnumber(n, ststrir) {

    let newStr = ""
    let finalAns = 0
    for (let i = 1; i <= n; i++) {
        let sum = 0
        for (let j = 1; j <= i; j++) {
            sum += j

            finalAns = sum

        }

    }

    newStr = newStr + ststrir.toUpperCase()
    return { newStr, finalAns }
}


const num=10
const str="Sahil"
const output = sumofnaturalnumber(num,str)
console.log(` your output ${output.newStr},${output.finalAns}`)