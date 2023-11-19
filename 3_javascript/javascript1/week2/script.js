// getFullname

function getFullname(firstname, surname, useFormalName, gender) {
  if (useFormalName) {
    return "Lord" + " " + firstname + " " + surname;
  } else if (gender) {
    return "Lady" + " " + firstname + " " + surname;
  } else {
    return firstname + " " + surname;
  }
}

const fullname1 = getFullname("Ihor", "Kulytskyi");
const fullname2 = getFullname("Benjamin", "Hughes");
const fullname3 = getFullname("Maria", "Magdalena", false, true);

console.log(fullname1);
console.log(fullname2);
console.log(fullname3);

//getEventWeekday

function getEventWeekday(dayEvent) {
  let today = new Date();
  let weekdays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "tursday",
    "freday",
    "saturday",
  ];
  let indexDay = (today.getDay() + dayEvent) % 7;
  return weekdays[indexDay];
}
console.log(getEventWeekday(3));

// Weather wear

function checkTemperature(temperature) {
  if (temperature <= 5 && temperature >= 0) {
    console.log("Warm winter jacket");
  } else if (temperature <= 14 && temperature >= 6) {
    console.log("Maybe you are ready to wear a spring jacket");
  } else if (temperature <= 18 && temperature >= 15) {
    console.log("Light jacket");
  } else if (temperature <= 25 && temperature >= 19) {
    console.log("Shorts and T-shirt");
  } else if (temperature > 30) {
    console.log("Don`t forget sunscreen");
  } else {
    console.log("Don`t go out, it`s cold there!");
  }
}
const clothesToWear = checkTemperature(-35);
console.log(clothesToWear);

// addStudentToClass

const class07Students = [];
function addStudentToClass(studentName) {
  for (let i = 0; i < class07Students.length; i++) {
    if (class07Students[i] === studentName) {
      console.log(`${studentName} in the class`);
      return;
    }
  }
  if (class07Students.length <= 6) {
    class07Students.push(studentName);
  } else if (studentName === "Queen") {
    console.log("Welcome Queen of Denmark Margrethe II");
  } else {
    console.log("no more place for students");
  }
}
addStudentToClass("Maria");
addStudentToClass("Ihor");
addStudentToClass("Anton");
addStudentToClass("Vlad");
addStudentToClass("Preben");
addStudentToClass("Jakob");
addStudentToClass("John");
addStudentToClass("Ihor");
addStudentToClass("Kenneth");
addStudentToClass("Queen");

// getNumberOfStudents

function getNumberOfStudents() {
  return class07Students.length;
}
console.log(getNumberOfStudents());
