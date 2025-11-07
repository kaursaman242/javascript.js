// what is object in javascript
// how to create object
// object methods


// object store key value pairs
const person={
    1:"Sahil",
    age:22,
   class:"Btech",
   hobbies:["coding", "reading", "gaming"],
   "sahil preet" :234,
   eat: function (sabzi, pani){
  return `${person["1"]} can eat ${sabzi} ${pani}`
   },
   vote:function (){
    if(person.age>=18){
        return `${person["1"]} is eligible for voting`
    }

   }
  
}

// how to access data from object
// console.log(person[1]);
// console.log(person["age"]);
// console.log(person.age);
// console.log(person.hobbies[0]);
// console.log(person.hobbies[1]);
// console.log(person.hobbies[2]);
// console.log(person["sahil preet"]);


// key type can be string 




// how to modify value of key in object
person["1"]="Gurpeet"
person["sahil preet"]=90

// how to add key value pair in object
person["address"]={
    village: "timmowal",
    city: "Amritsar",
    state:"Punjab",
    zipCode: 143149
}

// console.log(person.address)

person.address["country"]="India"
// console.log(person.address)

// add function in object

person.walk= function (){
return "person can be walk";
}
console.log(person.eat("Pasta", "water"))
console.log(person.vote())