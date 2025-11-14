const intro={
name: "Saman",
class: "BCA",
age:22,
vote: function() {
    if (intro.age>=18) {
        return "eligible for voting"
    }else{
        return "not eligible for voting"
    }
}
}
// console
// const value=intro.vote= isVoting()
// console.log(value)
console.log(intro.vote())