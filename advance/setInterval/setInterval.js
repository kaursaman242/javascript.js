const utcTime= new Date() // utc
const localTime= new Date(utcTime)





function greeting(time){
    if(time.getHours()<12){
        console.log("Good Morning")
    }else if(time.getHours()>=12 ){
console.log("Good Afternoon")
    }else if(time.getHours()<18){
        console.log("good evening")
    }else{
        console.log("good night")
    }
}
greeting(localTime)


// date with setInterval
setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);



