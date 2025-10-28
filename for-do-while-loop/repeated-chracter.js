// let str="programming"
// let seenfirst=""
// let seensecond=""

// for (let i = 0; i < str.length; i++) {
//     let char=str[i]
//     if (!seenfirst.includes(char)) {
//         seenfirst+=char
//     }else if (!seensecond.includes(char)) {
//         seensecond+=char
//     }

// }
// console.log(seensecond.split("").toString())

// function
function repeatedChracter(str) {
    let seenfirst=""
let seensecond=""
    for (let i = 0; i < str.length; i++) {
    let char=str[i]
    if (!seenfirst.includes(char)) {
        seenfirst+=char
    }else if (!seensecond.includes(char)) {
        seensecond+=char
    }

}
return { seenfirst,seensecond}
}
const output1=repeatedChracter("programming")
console.log(output1)