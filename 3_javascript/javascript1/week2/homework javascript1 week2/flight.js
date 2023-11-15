// Flight booking fullname function && Formal fullname //

function getFullname(firstname, surname, gender, useFormalName = false) {
  if (useFormalName === true) {
    if (gender === "female") {
      return `Woman ${firstname} ${surname}`;
    } else if (gender === "male") {
      return `Lord ${firstname} ${surname}`;
    }
  } else {
    return `${firstname} ${surname}`;
  }
}

const fullname1 = getFullname("Benjamin", "Hughes", "man", true);
const fullname2 = getFullname("Angel", "Aboah", "man", false);

console.log(getFullname("Benjamin", "Hughes"));
console.log(getFullname("Angel", "Aboah", "man", false));
console.log(getFullname("Lord Benjamin", "Hughes", "man", "true"));
