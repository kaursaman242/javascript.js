function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("1st step complete");
      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("2nd step complete");
      resolve();
    }, 3000);
  });
}

function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("3rd step complete");
      resolve();
    }, 1000);
  });
}

function step4() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("4th step complete");
      console.log("All steps done!");
      resolve();
    }, 500);
  });
}

async function runSteps() {

    try{
        await step1();
        await step2();
        await step3();
        await step4();
    }catch(err){
        console.log(err)
    }
 
}

runSteps();
