//Flight booking fullname function

function getFullname(firstname, surname, useFormalName = false) {
    if (!firstname.trim() || !surname.trim()) {
        return "Invalid name";
    }
    let fullName = `${firstname} ${surname}`;

    if (useFormalName && firstname && surname) {
        fullName = `Lord ${fullName}`;
    }

    return fullName;
}

let fullname1 = getFullname("Benjamin", "Hughes", true);
let fullname2 = getFullname("Anastasiia", "Humeniuk", false);
let fullname3 = getFullname( "", "Hughes", true );

console.log(fullname1); 
console.log(fullname2); 
console.log(fullname3);

//Event application




