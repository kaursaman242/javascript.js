
// The .map() method creates a new array by calling a provided function on every element in the original array. It takes each element, transforms it according to the function, and adds the result to the new array. The original array remains unchanged.

const array = [1, 2, 3, 4, 5];


const newArray=array.map((value)=>{
return value*2

})
console.log('originalArray', array)
console.log('newArray', newArray)


//strings array

const strings = ["1", "2", "3"];
const numbersTypeArray = strings.map((str) => {
    return parseInt(str);
});
console.log(numbersTypeArray);


//price array
const prices = [10, 20, 30, 40];
const discountedPrices = prices.map((price) => {
return price * 0.9

});
console.log(discountedPrices);  // Outputs: [9, 18, 27, 36]