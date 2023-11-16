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
