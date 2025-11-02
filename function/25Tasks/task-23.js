// Write a function addPrefix(str, prefix, callback) that adds the prefix and passes it to the callback.
function addPrefix(str, prefix, callback) {
    let result = prefix + str
    callback(result)
}
function printPrefixed(newStr) {
    console.log(newStr)
}
addPrefix("deep kaur", "Saman ", printPrefixed)