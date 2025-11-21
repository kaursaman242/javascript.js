// const students = ["Sahil", "Riya", "Saman", "John"];
// 🧠 Task:

// Use for...of to print only the names that start with "S".
const students = ["Sahil", "Riya", "Saman", "John"];
for (const student of students) {
    if (student.startsWith("S")) {
        console.log(student);
    }
}