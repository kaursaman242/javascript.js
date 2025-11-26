// 8. File Processing Simulation

// Write functions:

// readFile(callback)

// processFile(data, callback)

// saveFile(result, callback)

// Chain them using callbacks.

const readFile=(callback)=>{
    setTimeout(() => {
        console.log("This file is only for reading.")
    }, 1000);
    
    callback(data)
}

const processFile=(data,callback)=>{
    setTimeout(() => {
        console.log("File is processing...")
    }, 1000);
    
    callback()
}

const saveFile=(result,callback)=>{
    setTimeout(() => {
      console.log("Save the file.")   
    }, 1000);
   
    callback()
}
