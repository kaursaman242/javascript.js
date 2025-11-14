function runTask(message, delay, callback) {
    setTimeout(() => {
        console.log(message);
        callback();
    }, delay);
}

runTask("Task 1", 1000, () => {
    runTask("Task 2", 500, () => {
        runTask("Task 3", 200, () => {
            console.log("All tasks completed");
        });
    });
});
