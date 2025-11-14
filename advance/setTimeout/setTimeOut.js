
//  console.log("start of the program");

// console.log("hi there");

// function greet() {
//     console.log("Hello, World!");
// }
// setTimeout(()=>{
//     console.log("This message is shown after 2 seconds");
// },1000)

//  setTimeout(greet, 500);


// console.log("end of the program");



setTimeout(() => {
    console.log("Task 1");
    setTimeout(() => {
        console.log("Task 2");
        setTimeout(() => {
            console.log("Task 3");
        }, 200);
    },500);
}, 1000);
