//Event application //

let today = 6;
function getEventWeekday(days) {
  return (days % 7) + 6;
}
const eventAplication = getEventWeekday(6);
console.log(getEventWeekday(6));
