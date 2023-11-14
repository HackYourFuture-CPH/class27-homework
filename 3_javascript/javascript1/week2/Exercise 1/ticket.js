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
