let myDiscount; //undefined
const userAge = 27

//funcion definition
function calculateDiscount (age) {
    let discount;
    if (age >= 0 && age <= 2) {
        discount = "100%";
    } else if (age >= 3 && age <=18) {
        discount = "15%";
    } else if (age >= 19 && age <= 26) {
        discount = "10%";
    } else if (age >= 60) {
        discount = "70%";
    } else {
        discount = 0;
    }
    return discount
}

//funcion call
const calculetedDiscount = calculateDiscount(userAge)

console.log(calculetedDiscount);
