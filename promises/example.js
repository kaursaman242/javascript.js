function step1() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("1st step complete");
            reject("issue in first step");
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

step1()
    .then(step2).catch(err => console.log(err))
    .then(step3).catch(err => console.log(err))
    .then(step4).catch(err => console.log(err));


