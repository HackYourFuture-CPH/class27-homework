// Flight booking fullname function && Formal fullname //

function getFullname(firstname, surname, gender, useFormalName = false) {
  if (useFormalName) {
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
const fullname3 = getFullname(`"Lord Benjamin Hughes"`);

console.log(getFullname("Benjamin", "Hughes", "man", true));
console.log(getFullname("Angel", "Aboah", "man", false));
console.log(getFullname(`"Lord Benjamin Hughes"`));

// check inputs eg //

function getFullname(firstname, surname, gender, useFormalName = false) {
  if (("", "" === false)) {
    return "invalidName";
  }
}
