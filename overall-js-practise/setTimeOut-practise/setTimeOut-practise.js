setTimeout(()=>{
    console.log("This message will be execute after 1000ms")
    setTimeout(()=>{
         console.log("This message will be execute after 500ms")
         setTimeout(()=>{
            console.log("This message will be execute after 200ms")
         },200)
    },500)
},1000)