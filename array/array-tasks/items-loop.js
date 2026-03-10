// const items = ["pen", ["pencil", "eraser"], "notebook"];


// Access the nested array and push() a new item "sharpener".


// Remove the first element from the nested array using shift().


// Log the final structure.
const items = ["pen", ["pencil", "eraser"], "notebook"];
for(const item of items){
  if(Array.isArray(item)){
    item.push("sharpener");
    item.shift();
  } 
}
console.log(items);
