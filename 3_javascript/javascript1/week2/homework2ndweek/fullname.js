const firstname1 = getFullName("Monika", "Marciniak");
const firstname2 = getFullName("John", "Smith");

function getFullName (firstName, surName, isWoman = true)  {
   if  (typeof firstName !== "string" || typeof surName !== "string")
   return "Provide first name and last name"
  if ( isWoman) {
    return "Lady " + firstName + " " + surName;
  } else {
    return "Lord " + firstName + " " + surName;
  }
}

console.log(firstname1);
console.log(firstname2);