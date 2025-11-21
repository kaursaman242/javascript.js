// 4. Sequence of Tasks

// Create three functions:

// task1(callback)

// task2(callback)

// task3(callback)

// Each prints a message after 1 sec
// Call them in sequence:

const task1 = (callback) => {
    setTimeout(() => {
        console.log("Task one completed")
    }, 1000);
    callback()
}

const task2 = (callback) => {
    setTimeout(() => {
        console.log("Task two complete")
    }, 2000);
    callback()
}

const task3 = () => {
    setTimeout(() => {
        console.log("Task three completed")
    }, 3000);
}
task1(() => task2(() => task3(() => console.log("All done"))))


