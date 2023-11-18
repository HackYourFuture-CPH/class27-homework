//Flight Booking Fullname
function fullName(firstName, surName) {
  return firstName + " " + surName;
}
const fullName1 = fullName("Anjali", "Kumari");
const fullName2 = fullName("Babul", "Raja");
console.log(fullName1);
console.log(fullName2);

//Formal Name
function getFullname(firstName, surName, useFormalName, isWoman) {
  if (useFormalName) {
    return "Lord" + " " + firstName + " " + surName;
  } else if (isWoman) {
    return "Miss" + " " + firstName + " " + surName;
  } else {
    return firstName + " " + surName;
  }
}
const formalName = getFullname("Anjali", "Kumari", false, true);
console.log(formalName);
//note: other way to solve the promblem is = isWoman ? 'Lady' : 'Lord';

//Weather Wear
function todayWeatherTemp(temp) {
  if (temp <= 10) {
    return "Long Winter Jacket";
  } else if (temp <= 20) {
    return "causual shirt and jeans";
  } else {
    return "shorts and tshirt";
  }
}
console.log(todayWeatherTemp(37));
