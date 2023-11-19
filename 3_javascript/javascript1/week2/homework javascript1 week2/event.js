//Event application //

function getEventWeekday(daysIntoFuture) {
  const date = new Date();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const todaysDayOfTheWeek = date.getDay();

  const DayOfTheWeekNumber = (todaysDayOfTheWeek + daysIntoFuture) % 7;
  console.log(DayOfTheWeekNumber);
  const futureDayOfTheWeek = weekDays[DayOfTheWeekNumber];

  return futureDayOfTheWeek;
}

console.log(getEventWeekday(5));

//let today = 6;
//function getEventWeekday(days) {
// return (days % 7) + 6;
//}
//const eventAplication =(6);
//console.log(getEventWeekday(6));

//let getEventWeekday = [
// "Monday",
//"Tuesday",
//"Wednesday",
// "Thursday",
//"Friday",
//"Saturday",
// "Sunday",
//];
//const today = getEventWeekday;
//console.log(getEventWeekday[4]);
