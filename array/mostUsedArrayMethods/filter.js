// The filter() method takes a callback function that defines the condition for filtering the array elements. The callback function is called for each element of the array, and elements that return true are kept, while others are excluded.

const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter((number) =>{

//     if(number % 2 === 0){

//       return number
//     }


// } );
// console.log(evenNumbers); // Outputs: [2, 4, 6]


//odd
const oddNumbers = numbers.filter((number) =>{
   return number % 2 === 1
} );
// console.log(oddNumbers); // Outputs: [1, 3, 5]



const oneLine = numbers.filter(number => number % 2 === 1);
// console.log(oneLine)




//voting

const ages=[23,19,17,20,13,16]
const votingAge=ages.filter((age)=>{
    if(age>=18){
        return age
    }
    }
)
// console.log(votingAge)

const votingAge1=ages.filter((age)=>{
  return age>=18
})
// console.log(votingAge1)

const votingAge2=ages.filter(age=>age>=18)
console.log(votingAge2)