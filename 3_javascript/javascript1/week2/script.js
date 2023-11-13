// getFullName function
const getFullname = (
  firstname,
  surname,
  useFormalName = false,
  areYouMale = true
) => {
  if (
    (firstname !== "" && surname !== "" && firstname.trim() !== "",
    surname.trim() !== "")
  ) {
    if (useFormalName && areYouMale) {
      console.log("lord " + firstname + " " + surname);
    } else if (useFormalName && !areYouMale) {
      console.log("lady " + firstname + " " + surname);
    } else {
      console.log(firstname + " " + surname);
    }
  } else {
    console.log("provide a valid value for firstname and surname");
  }
};
getFullname("Niloufar", "Khaefi", true, false);
getFullname("Mohammad", "Basiri", true);
getFullname("Armin", "Basiri", false);
getFullname(" ", " ", true);

// Event Application
const getEventDay = (daysUntilEvent) => {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const dayIndex = today.getDay();
  const eventDayIndex = (dayIndex + daysUntilEvent) % 7;
  console.log(`The event will be held on a ${weekdays[eventDayIndex]}`);
};
getEventDay(9);
getEventDay(5);

// weather wear
const clothesToWear = (temperature) => {
  if (temperature >= 20) {
    console.log("It is very hot. shorts and T-shirt is a good choise");
  } else if (temperature >= 10) {
    console.log("It is warm. jeans and shirt is good");
  } else if (temperature >= 5) {
    console.log("It is cool .wear jeans and long sleeve");
  } else {
    console.log("It is cold. Make sure to have jacket with you");
  }
};
clothesToWear(15);
clothesToWear(2);
clothesToWear(25);

// Student Manager
const class07Students = [];
function addStudentToClass(studentName) {
    if(studentName !== ""){
        if (class07Students.includes(studentName)) {
            console.log(`Student ${studentName} is already in the class.`);
        }else if(class07Students.length < 6 || studentName === "Queen"){
            class07Students.push(studentName)
        }else{
            console.log("Cannot add more students to class 07");
        }
    }else{
        console.log("You cannot add an empty string to a class");
    }
}

function getNumberOfStudents() {
  console.log(class07Students.length)
}
addStudentToClass("Niloufar");
addStudentToClass("Armin");
addStudentToClass("sara");
addStudentToClass("");
addStudentToClass("Alex");
addStudentToClass("sara");
addStudentToClass("Mary");
addStudentToClass("Mino");
addStudentToClass("Hassan");
addStudentToClass("Queen");
console.log(class07Students);
getNumberOfStudents();

// candy helper
let boughtCandyPrices = [];
const addCandy = (candyType , weight) => {
    let pricePerGram;
    switch (candyType){
        case "Sweet":
            pricePerGram = 0.5;
            break;
        case "Chocolate":
            pricePerGram = 0.7;
            break;
        case "Toffee":
            pricePerGram = 1.1;
            break;
        case "Chewing-gum":
            pricePerGram = 0.03;
            break;    
    }
    let totalPrice = pricePerGram * weight
    boughtCandyPrices.push(totalPrice)
}
const canBuyMoreCandy = () => {
    let amountToSpend = Math.random() * 100;
    let sum = 0
    boughtCandyPrices.forEach((candyPrice) => {
        sum += candyPrice
    })
    if(sum < amountToSpend){
        console.log("You can buy more, so please do!");
    }else{
        console.log("Enough candy for you!")
    }
}
addCandy("Toffee", 20);
addCandy("Chocolate", 40);
addCandy("Chewing-gum", 100);
addCandy("Toffee",10);
addCandy("Sweet", 40);
console.log(boughtCandyPrices);
canBuyMoreCandy()