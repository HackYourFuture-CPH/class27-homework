//Flight booking fullname function && Formal fullname
function getFullname(firstname, surname, sex, useFormalName = false) {
  if (useFormalName === true) {
    if (sex === "woman") {
      return `lady ${firstname} ${surname}`;
    } else if (sex === "man") {
      return `Lord ${firstname} ${surname}`;
    }
  } else {
    return `${firstname} ${surname}`;
  }
}
const fullname1 = getFullname("Benjamin", "Hughes", "woman", true);
const fullname2 = getFullname("hadis", "R", "man", false);
const fullname3 = getFullname("hadis", "R");

//Event application
const today = 3;
function getEventWeekday(days) {
  return (days % 7) + 3;
}
const eventAplication = getEventWeekday(3);
console.log(eventAplication);

//Weather wear
function weatherWear(temperature) {
  const clothesToWear = "jacket";
  if (temperature <= 15) {
    return `you should wear ${clothesToWear}`;
  } else {
    return `you should wear T-shirt`;
  }
}

//Student manager && addStudentToClass function

const class07Students = [];
function addStudentToClass(studentName) {
  if (studentName === "") {
    console.log("Please add someone to the class!");
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
    console.log(`welcome to the class my Queen `);
  } else {
    console.log("can not add more student");
  }
}
class07Students("reza");
class07Students("hadis");
class07Students("daisy");
class07Students("atefe");

function getNumberOfStudents() {
  return class07Students.length;
}

//Candy helper optional
const boughtCandyPrices = [];

const amountToSpend = Math.random() * 100;

const candyPriceTable = [
  {
    type: "Sweet",
    price: 0.5,
  },
  {
    type: "Chocolate",
    price: 0.7,
  },
  {
    type: "Toffee",
    price: 1.1,
  },
  {
    type: "Chewing-gum",
    price: 0.03,
  },
];
function addCandy(candyType, weight) {
  for (let i = 0; i < candyPriceTable.length; i++) {
    if (candyType === candyPriceTable[i].type) {
      boughtCandyPrices.push(candyPriceTable[i].price * weight);
      break;
    }
  }
}
function canBuyMoreCandy() {
  let sum = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    sum += boughtCandyPrices;
  }
  if (amountToSpend > sum) {
    console.log("You can buy more, so please do!");
  } else {
    console.log("sorry!you dont have money,Enough candy for you!");
  }
}
addCandy("Sweet", 20);
addCandy("Chocolate", 30);
addCandy("Toffee", 50);
