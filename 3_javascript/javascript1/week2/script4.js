
//Student Manager


const class07Students = [];

function addStudentToClass(studentName) {
  const maxStudents = 6;

  if (class07Students.length >= maxStudents) {
    console.log("Cannot add more students to class 07");
    return;
  }

  if (class07Students.includes(studentName)) {
    console.log('Student ${studentName} is already in the class');
    return;
  }

  if (studentName === "Queen") {
    class07Students.push(studentName);
    console.log("The Queen has a special place in class 07!");
  } else if (studentName.trim() !== "") {
    class07Students.push(studentName);
    console.log('Student ${studentName} has been added to class 07');
  } else {
    console.log("Cannot add an empty string to class 07");
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("John");
addStudentToClass("Jane");
addStudentToClass("Benjamin");
addStudentToClass("Alice");
addStudentToClass("Benjamin");
addStudentToClass("Queen");
addStudentToClass("Mark");
addStudentToClass("");

console.log("Number of students in class 07:", getNumberOfStudents());