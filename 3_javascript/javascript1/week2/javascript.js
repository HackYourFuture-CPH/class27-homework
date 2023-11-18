//Welcome to my second experience in JAVASCRIPT :)

/* console.log("*******     Flight booking fullname function    *******");
 function getFullname(firstname, surname) {
     return `${firstname} ${surname}`;
}

 const fullname1 = getFullname("Helena", "Hashemi");
 const fullname2 = getFullname("Shahram", "Shokri");

 console.log(fullname1);
 console.log(fullname2); */

console.log("*******     Flight booking fullname function / ('Formal fullnam')     *******");
function getFullname(firstname, surname, gender, userFormalName) {

    if(gender === "male") {
    return `Lord ${firstname} ${surname}`;
}
if(gender === "female"){
    return `Lady ${firstname} ${surname}`;
}
if (gender === ""){
    return `${firstname} ${surname}`;
}
}

const userFormalName = getFullname("Soeren", "Sepehr", "");
const userFormalName1 = getFullname("Helena", "HME", "female");
const userFormalName2 = getFullname("Shahram", "S.K.Loo", "male");
const userFormalName3 = getFullname("Carl-Emil", "R.H.Hansen", "male" );

console.log(userFormalName);
console.log(userFormalName1);
console.log(userFormalName2);
console.log(userFormalName3);


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

//A comment for dear mentor:
/* The question was very complex.
Despite my extensive efforts to understand it
(searching on Google, checking educational websites, watching videos on YouTube,
looking at others' answers, and seeking help from ChatGPT)
I still found it challenging to grasp the issue.
I tried my best to comprehend it but wasn't very successful.
Please explain the solution to this problem in a simple manner. */

console.log("*******     Weather wear     *******");
// function outsideTempreture(tempreture) {
//     const wearInFrazing = "jacket and gloves";
//     const wearInCold = "sweater";
//     const wearInWarm = "top and shorts";

//     if(tempreture <= 10) {
//         return `Frazing...! Wear ${wearInFrazing}.`
//     }
//     if(tempreture > 10 && tempreture < 19) {
//         return `Almost cold...! Wear ${wearInCold}.`
//     } else {
//         return `Sun shine...! Wear ${wearInWarm} and remember suncream and sunglasses.`
//     }
// }
// const wearInWarm = outsideTempreture(27);
// console.log(wearInWarm);

const tempreture = 20;
switch(tempreture) {

    case(tempreture < 10 || tempreture === 10):
    console.log("Freezing...! Wear jacket and gloves.");
    break;

    case(tempreture > 10 && tempreture < 19 || tempreture === 19):
    console.log("Almost cold...! Wear sweater.");
    break;

    case(tempreture > 19 && tempreture < 39 || tempreture === 39):
    console.log("Sun shine...! Wear top, shorts and remember suncream and sunglasses.");
    break;

    default:
    console.log("Warning!... Risk of heatstroke");   
}

//In this case there is some problem. As you can see I have set the temprature on 20:
//here (const tempreture = 20;). So we should face with this sentence:
//(Sun shine...! Wear top, shorts and remember suncream and sunglasses.)
//but we have (Warning!... Risk of heatstroke) in the browser and I cant undrestand what is wrong with that :(
//please give me a clue!

console.log("*******     Weather wear     *******");
const class07Students = [];
function addStudentToClass(studentName) {
    if(studentName === "") {
        console.log("Add your name.");
    } else /*if(studentName = Number){ 
        console.log("Invalid request");
    } else*/ if(class07Students.includes(studentName)) {
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

function getNumberOfStudents(numberOfStudent){
return class07Students;
}

addStudentToClass("");
addStudentToClass("Helena");
addStudentToClass("Helena");
addStudentToClass("Carl-Emil");
//addStudentToClass(25);
addStudentToClass("Adel");
addStudentToClass("William");
addStudentToClass("Casper");
addStudentToClass("Niels");
addStudentToClass("Soren");
addStudentToClass("Queen");

//Dear mentor:
//this comment is my question
//please help me to figure it out

//The answer to the fifth question will be implemented along with the reforms.