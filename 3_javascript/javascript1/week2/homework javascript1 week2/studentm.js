//Student manager && addStudentToClass function

let class07Students = [];
function addStudentToClass(studentName) {
  if (studentName === "") {
    console.log("Kindly add more students to the class!");
  }
  for (let i = 0; i < class07Students.length; i++) {
    if (class07Students[i] === studentName) {
      console.log(`${studentName} is already in the class`);
      return;
    }
  }
  if (class07Students.length < 7) {
    class07Students.push(studentName);
  } else if (studentName === "Queen") {
    console.log(`welcome your majesty `);
  } else {
    console.log("no more students to be added");
  }
}

addStudentToClass("cindy");
addStudentToClass("kate");
addStudentToClass("cynthia");
addStudentToClass("courtney");

function getNumberOfStudents() {
  return class07Students.length;
}

console.log(getNumberOfStudents());
