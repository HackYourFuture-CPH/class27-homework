
// Train Ticket
function calculateTicketDiscount(age) {
    let discount = 0;
  
    if (age >= 0 && age <= 2) {
      discount = 100;
    } else if (age >= 3 && age <= 18) {
      discount = 15;
    } else if (age >= 19 && age <= 26) {
      discount = 10;
    } else if (age > 59) {
      discount = 70;
    }
  
    return discount;
  }
  
  const passengerAge = 60;
  const discountPercentage = calculateTicketDiscount(passengerAge);
  
  console.log(`Passenger aged ${passengerAge} gets a ${discountPercentage}% discount on the train ticket.`);