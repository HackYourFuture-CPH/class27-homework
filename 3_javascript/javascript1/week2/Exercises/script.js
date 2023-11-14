// Exercise one //

let myAge = 15;

if (myAge >= 18) {
  console.log(`You're an adult`);
} else {
  console.log(`You're not  an adult`);
}

// Exercise oneB //

let myUserAge = 20;
const hasAgreedTotermsAndconditions = true;
const name = "angel";

const namemessage = name === "angel" ? "amazing name" : "get another name";

const shouldShow = hasAgreedTotermsAndconditions ? "Great" : "too bad";
console.log(hasAgreedTotermsAndconditions);

// Exercise two //

let myTrainTicket = 100;
const passengerAge = 40;

if (passengerAge >= 0 && passengerAge <= 2) {
  myTrainTicket = 0;
} else if (passengerAge >= 3 && passengerAge <= 18) {
  myTrainTicket = myTrainTicket - (15 * myTrainTicket) / 100;
} else if (passengerAge >= 19 && passengerAge <= 26) {
  myTrainTicket = myTrainTicket - (10 * myTrainTicket) / 100;
} else if (passengerAge >= 60) {
  myTrainTicket = myTrainTicket - (70 * myTrainTicket) / 100;
}

console.log(myTrainTicket);

// Exercise three //

const number = 24 * 55;
console.log(number);

const myName = "name";
console.log(myName);

myName[0];

("n");

const mixedArray = ["a", "b", "c", 1, 2, 3, true, false, true];

console.log(mixedArray);
