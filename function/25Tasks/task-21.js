// Write a function capitalizeFirst(str, callback) that capitalizes the first letter of the string and passes it to the callback.
function capitalizeFirst(str,callback) {
    let result=''
    let capitalize=true
    for (let i = 0; i < str.length; i++) {
        const character =str[i];
        if (capitalize && character!==" ") {
            result+=character.toUpperCase();
            capitalize=false
        } else {
           result+=character 
        }
        if (character===" ") {
            capitalize=true
        }
    }
    callback(result)
} 
function printCapitalized(newStr) {
    console.log(newStr)
}
capitalizeFirst("saman deep kaur", printCapitalized)