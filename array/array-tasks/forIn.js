const data = ["apple", true, 56, [10, "kiwi", [5, "banana"]]]

//index
 for(const index in data){
     console.log(`Index ${index}: ${data[index]}`)


     if(Array.isArray(data[index])){
         for(const subIndex in data[index]){
             console.log(`  SubIndex ${subIndex}: ${data[index][subIndex]}`)
             if(Array.isArray(data[index][subIndex])){
                 for(const deepIndex in data[index][subIndex]){
                     console.log(`    DeepIndex ${deepIndex}: ${data[index][subIndex][deepIndex]}`)
                 }
             }
         }
        }
 }