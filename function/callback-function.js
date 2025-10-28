function one(twoFunc) {
    console.log("function one called")
    twoFunc(three)
}
function two(threeFunc) {
    console.log("function two called")
   threeFunc(four)
}
function three(fourFunc) {
    console.log("function three called")
    fourFunc(five)
}
function four(fiveFunc) {
    console.log("function four called")
    fiveFunc(six)
}
function five(sixFunc) {
    console.log("function five called")
    sixFunc()
}
function six() {
    console.log("function six called")
}
one(two)