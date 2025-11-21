// Given const queue = ["A", "B", "C", "D"],

// use a while loop that removes elements using shift() until the array is empty.

// 👉 How many times will the loop run?
const queue = ["A", "B", "C", "D"];
  
while(queue.length > 0){
    queue.shift();
 
}
console.log(queue);