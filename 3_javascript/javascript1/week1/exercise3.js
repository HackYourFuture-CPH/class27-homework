const times = 24 * 55;
const myName = "Olesia";

const theFirstLetter = myName[0];
console.log("the first letter im my name", theFirstLetter);

const array = ["dog", 15, "cat", "bird", 12, 4, 1, true, true, false];
console.log(array[3]);

const theLastLetter = myName[myName.length - 1];
console.log("the last letter im my name", theLastLetter);

// DISCOUNT
let ticketPrice = 100;
const passengerAge = 66;
let discount = "";

if (passengerAge <= 2) {
  ticketPrice = 0;
  console.log("You have a free ride");
} else if (passengerAge >= 3 && passengerAge <= 18) {
  discount = "15";
  ticketPrice = ticketPrice * 0.85;
  console.log(`Your get ${discount}% discount, ticket price ${ticketPrice}`);
} else if (passengerAge >= 19 && passengerAge <= 26) {
  ticketPrice = ticketPrice * 0.9;
  discount = "10%";
  console.log(`Your get ${discount}% discount, ticket price ${ticketPrice}`);
} else if (passengerAge >= 60) {
  discount = "70%";
  ticketPrice = ticketPrice * 0.3;
  console.log(`Your get ${discount}% discount, ticket price ${ticketPrice}`);
} else {
  console.log("Full price");
}
