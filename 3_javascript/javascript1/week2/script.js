//Flight Booking Fullname
function fullName(firstName, surName) {
  return firstName + " " + surName;
}
const fullName1 = fullName("Anjali", "Kumari");
const fullName2 = fullName("Babul", "Raja");
console.log(fullName1);
console.log(fullName2);

//Formal Name
function getFullname(firstName, surName, useFormalName, isWoman) {
  if (useFormalName) {
    return "Lord" + " " + firstName + " " + surName;
  } else if (isWoman) {
    return "Miss" + " " + firstName + " " + surName;
  } else {
    return firstName + " " + surName;
  }
}
const formalName = getFullname("Anjali", "Kumari", false, true);
console.log(formalName);
//note: other way to solve the promblem is = isWoman ? 'Lady' : 'Lord';

//Weather Wear
function todayWeatherTemp(temp) {
  if (temp <= 10) {
    return "Long Winter Jacket";
  } else if (temp <= 20) {
    return "causual shirt and jeans";
  } else {
    return "shorts and tshirt";
  }
}
console.log(todayWeatherTemp(37));

//Event Application

const todayDay = new Date();
const todayWeek = todayDay.getDay();
const targetWeek = (todayWeek + 9) % 7;

function getEventWeekday(weekOfTheEvent) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfWeek[targetWeek];
}
console.log("9 weeks from today will be a " + getEventWeekday(9));

//student Manager-addStudentToClass
const class07Students = [];
function addStudentToClass(studentName) {
  switch (true) {
    case class07Students.includes(studentName):
      console.log("Student ${studentName} is already in the class.");
      break;
    case class07Students.length >= 6 && studentName.toLowerCase() !== "queen":
      console.log("Cannot add more students to class 07.");
      break;
    default:
      class07Students.push(studentName);
      console.log(`Student ${studentName} has been added to class 07.`);
      break;
  }
}

addStudentToClass("Rishab");
addStudentToClass("Jyansh");
addStudentToClass("Mohit");
addStudentToClass("Rooney");
addStudentToClass("Babul");
addStudentToClass("Anshu");
addStudentToClass("boo");
addStudentToClass("queen");

function getNumberOfStudents() {
  return class07Students.length;
}
console.log(class07Students);
