// Flight booking fullname function & Formal fullname


function getFullname(firstname , surname, sex=false, useformalname=false){
    if (useformalname && sex){
        return "Lady " + firstname + " " + surname;
    } else if (useformalname) {
        return "Lord " + firstname + " " + surname;
    } else {
        return firstname + " " + surname;
    }
}

const fullname1= getFullname("Youssef", "Topaji" ,false, true);
const fullname2= getFullname("Benjamin","Hughes", false, false);

console.log(fullname1);
console.log(fullname2);