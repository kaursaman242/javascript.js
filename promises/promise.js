//make call back hell
console.log("Start");

setTimeout(() => {
  console.log("1st step complete");

  setTimeout(() => {
    console.log("2nd step complete");

    setTimeout(() => {
      console.log("3rd step complete");

      setTimeout(() => {
        console.log("4th step complete");
        console.log("All steps done!");
      }, 500);

    }, 1000);

  }, 3000);

}, 1000);





// promise

function wait(time) {
  return new Promise((resolve,reject) => {
    setTimeout(reject("Sahil"), time);
  });
}

wait(1000).then(()=>{
console.log("1st step complete",)
wait(2000).then(()=>{
    console.log("2 step complete")
}).catch((err)=>{
    console.error(err)
})
}).catch((err)=>{
    console.log(err)
})
// console.log(promise)
  