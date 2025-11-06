// Write a .forEach() loop for:
// const marks = [45, 78, 32, 90, 67];
// that prints:


// "Pass" if mark ≥ 50


// "Fail" if mark < 50
const marks = [45, 78, 32, 90, 67]
marks.forEach(mark => {
  if (mark >= 50) {
    console.log("Pass")
  } else {
    console.log("Fail")
  }
})