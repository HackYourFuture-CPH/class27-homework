const class07Students = [];

function addStudentToClass(studentName) {
  if (class07Students.includes(studentName)) {
    return (
      "Student " + "" + `${studentName}`  + " is already in the class" + "."
    );
  } else if (class07Students.length >= 6) {
    if (studentName === "Queen" && !class07Students.includes("Queen")) {
      class07Students.push(studentName);
      return "Abrakadabra Queen is here";
    } else {
      return "Cannot add more students to class 07";
    }
  } else if (studentName === "") {
    return "Add the name";
  } else {
    class07Students.push(studentName);
  }
}

console.log(class07Students);

addStudentToClass("John");
addStudentToClass("Jim");
addStudentToClass("Adam");
addStudentToClass("Sam");
addStudentToClass("Johan");
addStudentToClass("Bary");
console.log(addStudentToClass("Maria"));
console.log(addStudentToClass("Queen"));

function getNumberOfStudents() {
  console.log(class07Students.length);
}

getNumberOfStudents();