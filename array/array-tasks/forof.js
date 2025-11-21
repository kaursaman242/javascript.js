const data = ["apple", true, 56, [10, "kiwi", [5, "banana"]]]
// value 


let deep=[]
for(const item of data){
    console.log(item)

    if(Array.isArray(item)){
        for(const subItem of item){
            console.log(`  SubItem: ${subItem}`)
            if(Array.isArray(subItem)){
                for(const deepItem of subItem){
                   deep.push(deepItem)
                }
            }
        }
    }
}
console.log("Deep Items:", deep)