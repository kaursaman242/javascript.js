function capitalize(sentence) {

    let result = ''
    let capitalize = true

    for (let i = 0; i < sentence.length; i++) {
        const character = sentence[i]

        if (capitalize && character !== " ") {
            result = result + character.toUpperCase()
            capitalize = false
        } else {
            result += character
        }

        if (character === " ") {
            capitalize = true
        }

    }

   return result

}
const data=capitalize("sahil preet singh")
console.log(data) //Sahil Preet Singh