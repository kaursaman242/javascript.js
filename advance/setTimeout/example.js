function task(message, delay, cb) {
    setTimeout(() => {
        console.log(message);
        cb();
    }, delay);
}

function start() {
    task("Task 1", 1000, step2);
}

function step2() {
    task("Task 2", 500, step3);
}

function step3() {
    task("Task 3", 200, finish);
}

function finish() {
    console.log("All tasks completed");
}

start();
