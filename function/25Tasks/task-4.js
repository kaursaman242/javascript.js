// Write a function doTwice(callback) that calls a callback function two times.
function doTwice(callback) {
    callback(twoTimes());
}
function twoTimes(){
console.log("Are you OK?")
}
doTwice(twoTimes)