// a constructor is a function used to create multiple objects with the same structure.but different values.
function CreateStudentObject(name, age){
    this.name=name
this.age=age

    
}

const student1= new CreateStudentObject("sahil",23)
const student2= new CreateStudentObject("sahil",23)
// console.log('student1', student1)
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const user = new Person("Aman", 22);
const user2 = new Person("sahil", 22);
console.log(user2.name); // "Aman"