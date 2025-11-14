// Given:
// const arr = [1, 2, [3, 4, [5, 6, ["seven"]]]];


// Access and print "seven".


// Add "eight" to the innermost array.




const arr = [1, 2, [3, 4, [5, 6, ["seven"]]]];
const innermostValue = arr[2][2][2][0];
arr[2][2][2]=innermostValue + ","+ " eight";
console.log(arr);




