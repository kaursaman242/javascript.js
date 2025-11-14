function task1(callback) {
    setTimeout(() => {
        console.log("Task 1");
        callback();   // task2 ko call karega
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2");
        callback();   // task3 ko call karega
    }, 500);
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task 3");
        callback && callback();
    }, 200);
}

// Running in callback sequence
task1(() => {
    task2(()=>{
        task3(()=>{
            console.log("All tasks completed");
        });
    });
});
