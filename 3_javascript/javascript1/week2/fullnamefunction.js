//Create a function called getFullname that returns a fullname. It should have two parameters: firstname and surname.

function getFullname(firstname, surname, useFormalName) {
  // where firstname or surname is an empty string
  if (!firstname || !surname) {
    return "Please provide both firstname and surname";
  }

  if (useFormalName) {
    return `Lord ${firstname} ${surname}`;
  } else {
    return `${firstname} ${surname}`;
  }
}

var fullname1 = getFullname("Benjamin", "Hughes", true);
var fullname2 = getFullname("Alice", "Smith", false);

//What do we do if useFormalName is not given as an argument?
//answer :WE GIVE DEFULT
//   FUNCTION (FIRSTNAME,SURNAME,USEFORMALNAME=FALSE,ISFEMALE=FALSE)

function getFullname(firstname, surname, useFormalName, isFemale) {
  if (!firstname || !surname) {
    return " provide both firstname and surname";
  }

  var title = isFemale ? "Lady" : "Lord";

  if (useFormalName) {
    return `${title} ${firstname} ${surname}`;
  } else {
    return `${firstname} ${surname}`;
  }
}
//example:

var femaleFullname = getFullname("sanaz", "rezaei", true, true);
///vent application

// Another customer has contacted us. He works for a secret company that rimes with foogle.
//
//The customer works on their calendar application. They need some functionality to help with writing what weekday an event is held.

// You specify how many days from today an event is being held. The function
// then figures out what weekday the event is being held. Here is an example:

// Today is Sunday and the event is in 5 days. Therefore the event will be held on a friday.

// // With todays weekday a tuesday
// console.log(getEventWeekday(9)); // Logs out "Thursday"

// // With todays weekday a Friday
// console.log(getEventWeekday(2)); // Logs out "Sunday"
// You should get the today's day from the system.

// Hint: use remainder operator, array indexes and investigate new Date in js.

function getEventWeekday(daysFromToday) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const todayIndex = new Date().getDay();

  const eventDayIndex = (todayIndex + daysFromToday) % 7;

  return weekdays[eventDayIndex];
}

// Test cases
console.log(getEventWeekday(9)); //Thursday"
console.log(getEventWeekday(2)); // Log out "Sunday"

//3
// Weather wear

// Create a function (that you have to name) that has temperature as parameter. Based on the
// temperature it should return a string with what the user should wear. You decide what the user should wear based on the temperature.

// An example is:

// const clothesToWear = youCreateThisFunctionName(18);
// console.log(clothesToWear); // Logs out: "shorts and a t-shirt"

function suggestClothing(temperature) {
  if (temperature >= 25) {
    return "shorts and a t-shirt";
  } else if (temperature >= 18) {
    return "light jacket and jeans";
  } else if (temperature >= 10) {
    return "sweater and pants";
  } else {
    return "coat and warm clothes";
  }
}

// Example :
const clothesToWear = suggestClothing(18);
console.log(clothesToWear); // Logs out: "light jacket and jeans"
//4:

//   Student manager

//   A coding school have contacted us to make some functionality for managing their classes. We will create functionality for adding students to a class.

//   For this exercise you need to figure out how Array.push works. Learn about the concept by researching about it.

//   Copy the following code into your homework js file

//   const class07Students = [];
//   function addStudentToClass(studentName) {
//     // You write code here
//   }

//   function getNumberOfStudents() {
//     // You write code here
//   }

const class07Students = [];

function addStudentToClass(studentName) {
  // Check empty string and is not already in the class
  if (studentName && !class07Students.includes(studentName)) {
    // Add student
    class07Students.push(studentName);
    console.log(`Student ${studentName} added to the class.`);
  } else {
    console.log(`Invalid student name or student already in the class.`);
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("sanaz");
addStudentToClass("maryam");
addStudentToClass("hadis"); // This should print an error message
console.log(`Number of students in the class: ${getNumberOfStudents()}`);

// addStudentToClass function

// The addStudentToClass should add the studentName to the class07Students array.

// But there are some other requirements:

// There can be only 6 students in a class. If more students are tried to be added, log out the following: "Cannot add more students to class 07".
// The same person cannot be added to the class. If the same person is added to the class, log out the following: 'Student Benjamin is already in the class' where Benjamin is substituted for the studentName.
// We are very fond of our Queen in Denmark, so if the Queen is added to the class she should always
// get a space. Even if the class has been filled out.
// You cannot add an empty string to a class

const class07Students = [];

function addStudentToClass(studentName) {
  if (class07Students.length >= 6) {
    console.log("Cannot add more students to class 07");
    return;
  }

  if (!studentName) {
    console.log("Student name cannot be empty");
    return;
  }

  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
    return;
  }

  if (studentName.toLowerCase() === "queen") {
    class07Students.push(studentName);
    console.log("Long live the Queen! Queen added to the class.");
  } else {
    class07Students.push(studentName);
    console.log(`Student ${studentName} added to the class.`);
  }
}

addStudentToClass("sanaz");
addStudentToClass("Nilo");
addStudentToClass("sanaz"); // This should print an error message
addStudentToClass(""); // This should print an error message
addStudentToClass("Queen"); // This should add the Queen to the class
addStudentToClass("Dena"); // This should print an error message (class full)
