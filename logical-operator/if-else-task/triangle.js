 
//  Check if three sides can form a triangle.
let a=10
let b=20
let c=30
console.log(a+b>c)
console.log(b+c>a)
console.log(c+a>b)
if (a+b>c && b+c>a&& c+a>b) {
    console.log("three sides can form a triangle")
}else{
    console.log("three sides can not form a triangle")
}