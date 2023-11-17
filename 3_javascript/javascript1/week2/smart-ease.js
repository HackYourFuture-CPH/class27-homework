   //Flight booking fullname function

const firstName = "Benjamin";
const surname = "Hughes";
getFullnameVercion1 = firstName+" "+surname;
console.log(getFullnameVercion1);

const fullname1 = getFullname("Benjamin", "Hughes", "male", true);
const fullname2 = getFullname("Viktoriia","Dembitska", "female", true);
const fullname3 = getFullname("Star","Pink", "other", true);

function getFullname(firstname, surname, sex, useFormalName = true){
    if (sex === "male"){
        return "Lord " + firstname + " " + surname;
    } else if (sex === "female") {
        return "Lady " + firstname + " " + surname;
    } else {
        return firstname + " " + surname;
    }
}
console.log(fullname1);
console.log(fullname2); 
console.log(fullname3);

//Event application

const weekdays = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturdat"];
const today = new Date();
const futureDay = new Date(today); 
function getEventDay(daysUntilEvent) {
    futureDay.setDate(today.getDate() + daysUntilEvent);
    const eventWeekday = weekdays[futureDay.getDay()];
    return eventWeekday;
}
console.log(getEventDay(8));

//Weather wear
const clothesToWear = [" jeans", " t-shirt", " and sneakers."];
function whatDoIHaveToWear(temperature) {
    if (temperature >= 15) {
      return "I should have my sunglasses" + clothesToWear;
    } else {
      return "Just stay home and hygge.";
    }
  }
const myOutfitForToday = (whatDoIHaveToWear(23));
console.log(myOutfitForToday);
const myOutfitForTodayTwo = (whatDoIHaveToWear(10));
console.log(myOutfitForTodayTwo);

//Student manager

const class07Students = [];
function addStudentToClass(studentName) {
    for (let i = 0; i < class07Students.length; i++) {
        if (class07Students[i] === studentName) {
          console.log("Student " + studentName + " is already in the class");
          return;}
    }
    if (class07Students.length <= 6 || studentName === "Queen") {
        class07Students.push(studentName);
        console.log("Dear " + studentName + ", there is always place for you in the class")
      } else if (studentName === "") {
        console.log("Please, enter your name")
      } else {
        console.log("Cannot add more students to class 07");
      } 
}
addStudentToClass("Emil");
addStudentToClass("Kate");
addStudentToClass("Anne");
addStudentToClass("Nick");
addStudentToClass("Sonya");
addStudentToClass("Peter");
addStudentToClass("Queen");
addStudentToClass("Lisa");

console.log(class07Students);


function getNumberOfStudents() {
  console.log(class07Students.length);
}
getNumberOfStudents(); 

// I tried to add value of class07Students.length max, 
//but it didn't work, and I can't figure out where to add it so it works, 
//and I'm not sure that it is useful also there - 
//class07Students.length = Math.max(7) 

//I also don't understand why I can't make "Queen" a special object in function, 
//and that requirement is applying to all other names..
//I need some advice so can improve it.  
