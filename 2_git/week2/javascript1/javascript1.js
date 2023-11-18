//Formal Fullname
function getFullname (firstname, surname, useFormalName){
    //Check if firstname or surname is empty
    if (!firstname.trim() || !surname.trim()) {
        console.error("Firstname or surname cannot be empty.");
        return "";
    }
//Check if useFormalName is true//
if (useFormalName) {
    return "Lord " + firstname + " " + surname;
}else {
    return firstname + " " + surname;
}
}
const fullname1 = getFullname("Maryam", "Homayounzadeh", false);
const fullname2 = getFullname("Mohammad", "Khooban", true);
console.log(fullname1);
console.log(fullname2);

//Event application
function getEventWeekday(daysFromToday) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    //Get the current day as a number
const today = new Date ().getDate();

//Calculate the index for the event's date

const eventDayIndex = (today + daysFromToday) % weekdays.length;
return weekdays[eventDayIndex];
}

console.log(getEventWeekday(6));
console.log(getEventWeekday(4));
console.log(getEventWeekday(9));
console.log(getEventWeekday(2));

//clothes to wear

function suggestClothing(temperature) {
    if (temperature <= 0) {
    return "a coat, jacket, scarf, gloves, and warm hat";
    } else if (temperature <= 10) {
        return "a coat and a sweater";
    } else if (temperature <= 15) {
        return "sweater and pants";
    } else if (temperature <= 20) {
        return "pants and a long-sleeve shirt";
    } else if (temperature <= 25) {
        return "shorts and a t-shirt";
    } else {
        return "shirts, t-shirt, and sandles"
    }
}

console.log (suggestClothing(7));
console.log (suggestClothing(3));
console.log(suggestClothing(14));
console.log(suggestClothing(2));

//Student manager

const class07Students = [];
function addStudentToClass(studentName) {
    if (!studentName) {
        console.log("You cannot add an empty string to a class");
    }else if (class07Students.includes(studentName)) {
        console.log("student ${studentName} is already in the class");
    }else if (class07Students.length >=6 && studentName !== "The Queen") {
        console.log("cannot add more students to class07");
    }else {
        class07Students.push(studentName);
    }if (studentName === "The Queen") {
        console.log("The Queen has been added to the class");
    }
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("Benjamin");
addStudentToClass("Benjamin");
addStudentToClass("");
addStudentToClass("Sara");
addStudentToClass("Tom");
addStudentToClass("Jerry");
addStudentToClass("Shrek");

for (let i = 0; i < 6; i++) {
    addStudentToClass("Student${i}");  
}
addStudentToClass("Another Student");
addStudentToClass("The Queen");

console.log(getNumberOfStudents());

//Candy helper
const boughtCandyPrices = [];
let amountToSpend = Math.random() * 100;

function addCandy(candyType, weight) {
    const candyPrices = {
        "sweet": 0.5,
        "chocolate": 0.7,
        "toffee": 1.1,
        "chewing-gum": 0.03  
    };
    if (candyPrices[candyType]) {
        const price = candyPrices[candyType] * weight;
        boughtCandyPrices.push(price);
    } else {
        console.log("unknown candy type");
    }
}
function canBuyMoreCandy() {
    let totalSpent = 0
    for (let i = 0; i < boughtCandyPrices.length; i++) {
        totalSpent += boughtCandyPrices[i];
    }
    if (totalSpent < amountToSpend) {
        console.log("You can buy can buy more, so please do!");
        return true;
    } else {
        console.log("Enough candy for you!");
        return false;
    }
}

addCandy("sweet", 20);
addCandy("chocolate", 15);
console.log(canBuyMoreCandy());
addCandy("toffee", 5);
