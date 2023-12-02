const todayDate = new Date();
const todaysWeekDay = todayDate.getDay();
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getEventDay(day) {
  const someDay = todaysWeekDay + day;
  if (someDay > 7) {
    const thatDay = someDay % 7;

    console.log(weekDays[thatDay]);
  } else {
    console.log(someDay);
    console.log(weekDays[someDay]);
  }
}
getEventDay(200);