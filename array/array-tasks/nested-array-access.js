// Given:
// const data = ["apple", [10, "banana", [5, "kiwi"]]];
// 👉 Write code to push("mango") into the deepest array.
const data = ["apple", [10, "banana", [5, "kiwi"]]]
for(const index in data){
    if(Array.isArray(data[index])){
        for(const subIndex in data[index]){
            if(Array.isArray(data[index][subIndex])){
                data[index][subIndex].push("mango")
            }
        }
    }   
}
console.log(data)