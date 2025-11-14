const student1 = {
    name: "John", 
    age: 30, 
    city: "New York",
   printDetail: function(){
    return `${this.name} is ${this.age} years old and lives in ${this.city}.`;
   }
}

const detail=student1.printDetail()
console.log(detail)

const student2= {
    name: "Sahil", 
    age: 23, 
    city: "Amritsar",
   printDetail: function(){
    return `${this.name} is ${this.age} years old and lives in ${this.city}.`;
   }
}
const detail2=student2.printDetail()
console.log(detail2)