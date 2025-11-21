// const person = {
//   name: "Amit",
//   age: 20
// };

// console.log(person.__proto__); // Prototype object of person

function Student(name, age) {
  this.name = name;
  this.age = age;
}

// Add method to prototype (not inside function)
Student.prototype.sayHello = function() {
  console.log(`Hello, I am ${this.name}.`);
};

const s1 = new Student("Sahil", 18);
const s2 = new Student("Riya", 19);

s1.sayHello(); // Hello, I am Sahil.
s2.sayHello(); // Hello, I am Riya.
