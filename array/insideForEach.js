// nothing return , only use for traversing 


// take callback function

const students = ["Sahil", "saman", "PRaBh"]

students.forEach((value, index, array) => {

    if (index === 1) {
        //    const saman= array[index]
        //    console.log(saman)
        // array[index] = "S"
        // console.log(array)
        // console.log(value)

        console.log('index 1 found', value.toUpperCase())

    }

})  

console.log(students)

