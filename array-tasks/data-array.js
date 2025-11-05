const data = ["apple", true, 56, [10, "kiwi", [5, "banana"]]]
// const result=data[3][2][1].toUpperCase()
// console.log(result)





data.forEach((item,i)=>{
    console.log(`Item ${i}: ${item}`)

    if(Array.isArray(item)){
        item.forEach((subItem,j)=>{
            console.log(`  SubItem ${j}: ${subItem}`)
            if(Array.isArray(subItem)){
                subItem.forEach((deepItem,k)=>{
                    console.log(`    DeepItem ${k}: ${deepItem}`)
                })
            }
        })
    }


})
// const first=data[0]
// if(Array.isArray(first)){
//   console.log("This is an array")
// }else{
//   console.log("This is not an array")
// }