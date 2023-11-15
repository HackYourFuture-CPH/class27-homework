

//Event Application

function getEventWeekday(daysUntilEvent) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + daysUntilEvent);
    const eventWeekday = weekdays[futureDate.getDay()];
    return eventWeekday;
  }
  
  console.log(getEventWeekday(9));