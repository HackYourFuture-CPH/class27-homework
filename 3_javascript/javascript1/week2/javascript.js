console.log("*******     Flight booking fullname function / ('Formal fullnam')     *******");
function getFullname(firstname, surname, userFormalName , genderIsFemale) {

    if( firstname !== "" && surname !== "" && userFormalName === false) {
    return `Lord ${firstname} ${surname}`;
} else if( firstname !== "" && surname !== "" && genderIsFemale === true){
    return `Lady ${firstname} ${surname}`;
} else {
    return `${firstname} ${surname}`;
}
}

const userFormalName = getFullname("Soeren", "", true);
const userFormalName1 = getFullname("", "", false);
const userFormalName2 = getFullname("Helena", "HME", true, true);
const userFormalName3 = getFullname("Shahram", "S.K.Loo", false );
const userFormalName4 = getFullname("Carl-Emil", "R.H.Hansen" );


console.log(userFormalName);
console.log(userFormalName1);
console.log(userFormalName2);
console.log(userFormalName3);
console.log(userFormalName4);




console.log("*******     Event application     *******");
function getEventWeekDay(howManyDaysUntilEvent) {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const todayDate = new Date();
    let dayIndex = todayDate.getDay();
    const eventIndex = (dayIndex + howManyDaysUntilEvent) % 7;

    return weekdays[eventIndex];
}

console.log(getEventWeekDay(5));
console.log(getEventWeekDay(11));



console.log("*******     Weather wear     *******");
function outsideTempreture(tempreture) {
    const wearInFrazing = "jacket and gloves";
    const wearInCold = "sweater";
    const wearInWarm = "top and shorts";

    if(tempreture <= 10) {
        return `Frazing... Wear ${wearInFrazing}.`
    } else if(tempreture > 10 && tempreture < 19) {
        return `Almost cold... Wear ${wearInCold}.`
    } else if (tempreture >=19 && tempreture < 39 ){
        return `Sun shine... Wear ${wearInWarm} and remember suncream and sunglasses.`
    } else {
        return "Warning!!!  Risk of heatstroke"
    }
}
const wearInWarm = outsideTempreture(27);
const wearInWarm1 = outsideTempreture(42);
const wearInWarm2 = outsideTempreture(10);
const wearInWarm3 = outsideTempreture(13);

console.log(wearInWarm);
console.log(wearInWarm1);
console.log(wearInWarm2);
console.log(wearInWarm3);


console.log("*******     Weather wear     *******");
const class07Students = [];
function addStudentToClass(studentName) {
    if(studentName === "") {
        console.log("Add your name.");
    } else if(class07Students.includes(studentName)) {
        console.log(`${studentName} has already applied`);
    } else if(class07Students.length >= 6 &&  studentName === "Queen" || studentName === "queen") {
        class07Students.push(studentName);
        console.log(`${studentName} you are welcome to the class.`);
    } else if(class07Students.length >= 6) {
        console.log("Capacity of the class is full.");
    } else if(class07Students.length <6){
        class07Students.push(studentName);
        console.log(`${studentName} added to the class.`);
    } else { 
        console.log("Error");
    }
}

addStudentToClass("");
addStudentToClass("Helena");
addStudentToClass("Helena");
addStudentToClass("Carl-Emil");
addStudentToClass("Adel");
addStudentToClass("William");
addStudentToClass("Casper");
addStudentToClass("Niels");
addStudentToClass("Soren");
addStudentToClass("Queen");

function getNumberOfStudents(numberOfStudent){
    const class07Students = ['Helena', 'Carl-Emil', 'Adel', 'William', 'Casper', 'Niels', 'Queen'];
return getNumberOfStudents = class07Students.length;
}

console.log(getNumberOfStudents());







console.log("*******     Candy helper     *******");

const candyType  = ['sweet', 'chocolate', 'toffee', 'chewing-gum'];
const pricePerGram = [0.5 , 0.7 , 1.1 , 0.03];

function addCandy(candyType , weight) {
const boughtCandyPrices = [];

switch(candyType){

    case 'sweet':
    pricePerGramOfCandy = 0.5;
    break;

    case 'chocolate':
    pricePerGramOfCandy = 0.7;
    break;

    case 'toffee':
    pricePerGramOfCandy = 1.1;
    break;
    
    case 'chewing-gum':
    pricePerGramOfCandy = 0.03;
    break;
    
    default:
    console.log("Invalid candy tipe");
    return;

}

const priceOfTheCandy = weight * pricePerGram;
boughtCandyPrices.push(priceOfTheCandy);
}

//------------------------Can i buy more------------------------

const amountToSpend = Math.random() * 100 ;
function canBuyMoreCandy(boughtCandy) {
    const totalPrice = 0;
    for(i = 0; i < totalPrice.length; i++) {
        totalPrice = boughtCandy[i];
    }
    if(totalPrice < amountToSpend){
        return true;
    } else {
        return false
    }
}

const boughtCandyPrices = [];
addCandy('sweet', 15);
addCandy('chocolate', 25);
addCandy('toffee', 32);

if(canBuyMoreCandy(boughtCandyPrices)) {
    console.log("possible for you to have more candy :) ") ;
} else {
    console.log("you are not allow to have more candy :(") ;
}
