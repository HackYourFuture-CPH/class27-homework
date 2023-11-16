   //Flight booking fullname function

const firstName = "Benjamin";
const surname = "Hughes";
getFullnameVercion1 = firstName+" "+surname;
console.log(getFullnameVercion1);

const fullname1 = getFullname("Benjamin", "Hughes", "male", true);
const fullname2 = getFullname("Viktoriia","Dembitska", "female", true);
const fullname3 = getFullname("Star","Pink", "other", true);

function getFullname(firstname, surname, sex, useFormalName = true){
    if (sex === "male"){
        return "Lord " + firstname + " " + surname;
    } else if (sex === "female") {
        return "Lady " + firstname + " " + surname;
    } else {
        return firstname + " " + surname;
    }
}
console.log(fullname1);
console.log(fullname2); 
console.log(fullname3);


//Event application

const weekdays = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturdat"];
const today = new Date();
const futureDay = new Date(today); 
function getEventDay(daysUntilEvent) {
    futureDay.setDate(today.getDate() + daysUntilEvent);
    const eventWeekday = weekdays[futureDay.getDay()];
    return eventWeekday;
}
console.log(getEventDay(8));

//Weather wear
const clothesToWear = [" jeans", " t-shirt", " and sneakers."];
function whatDoIHaveToWear(temperature) {
    if (temperature >= 15) {
      return "I should have my sunglasses" + clothesToWear;
    } else {
      return "Just stay home and hygge.";
    }
  }
const myOutfitForToday = (whatDoIHaveToWear(23));
console.log(myOutfitForToday);
const myOutfitForTodayTwo = (whatDoIHaveToWear(10));
console.log(myOutfitForTodayTwo);

