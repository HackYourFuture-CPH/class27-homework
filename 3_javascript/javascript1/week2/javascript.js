//Flight booking fullname function

function getFullname(firstname, surname, gender, useFormalName = false) {
    if (!firstname.trim() && !surname.trim()) {
        return "Invalid name";
    }
    if (gender === "male") {
        return "Lord " + firstname +  " " + surname;
    } else if (gender === "female"){
        return "Lady " + firstname + " " + surname;
    } else {
        return firstname + surname;
    }
}

let fullname1 = getFullname("Benjamin", "Hughes", "male", true);
let fullname2 = getFullname("Anastasiia", "Humeniuk","female", false);
let fullname3 = getFullname( "", "", true );

console.log(fullname1); 
console.log(fullname2); 
console.log(fullname3);

//Event application

function getEventWeekday(daysToAdd){
    const daysOfWeek = ["Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"];
    const today = new Date().getDay();
    const futureDay = (today + daysToAdd) % 7;

    return daysOfWeek[futureDay];
}

    console.log(getEventWeekday(5));
    console.log(getEventWeekday(3));

    //Weather wear

    function whatClothesToWear(temperature) {
        if (temperature >=28) {
            return " Wear t-shirt, pants and sunglasses";
        } else if (temperature >=15) {
            return "Wear jeans and sweatshot";
        
        } else if (temperature >=5) {
            return "Wear jacket, pants and don't forget your hat";
        }
    }
const clothesTowear = whatClothesToWear(10);
console.log(clothesTowear);

//Student manager

const class07Student = [];

function addStudentToClass(studentName) {
    if (studentName === "" ) {
        console.log( "Please, type a valid student name.");
        return;
    }


if(class07Student.includes(studentName)) {
    console.log("Student " + studentName + " is already in the class.");
    return;
}

if(class07Student.length >=6 && studentName !== "Queen") {
    console.log("Cannot add more students to the class");
    return;
}

class07Student.push(studentName);
console.log("Student " + studentName + " succesfully added to the class.");
}

function getNumberOfStudents() {
    return class07Student.length;
}

addStudentToClass("Maria");
addStudentToClass("Anastasiia");
addStudentToClass("Soffia");
addStudentToClass("Alex");
addStudentToClass("Mariia");
addStudentToClass("Queen");
addStudentToClass("Eva");
addStudentToClass("Queen");

const numberOfStudents = getNumberOfStudents();

console.log("Number of students in the class: " + numberOfStudents + " .");

