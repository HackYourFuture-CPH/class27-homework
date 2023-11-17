
//-------------------Flight booking fullname function - Formal fullname----------------------

function getFullname(firstName, surName, customerSex, useFormalName) {


    switch (useFormalName) {

        case customerSex === 'Female' && firstName.length !== 0 && surName.length !== 0:
            return `Lady ${firstName} ${surName}`;
            break;

        case customerSex === 'Male' && firstName.length !== 0 && surName.length !== 0:
            return `Lord ${firstName} ${surName}`;
            break;

        case firstName.length === 0 || surName.length === 0:
            alert(`First name or Last name can't be empty`);
            //Should I write another code instead of break??? :)
            break;

        default:
            return `${firstName} ${surName}`;
    }

}

let fullName = getFullname('katayoun', 'yousefzadeh', 'Female', true);
let fullName1 = getFullname('Robert', 'Asoo', 'Male', true);
let fullName2 = getFullname('Jorge', '', 'Male', true);
let fullName3 = getFullname('Gordon', 'Imoni');

console.log(fullName);
console.log(fullName1);
console.log(fullName2);
console.log(fullName3);


//-------------Calculating working days between two dates in Javascript excepts holidays---------------------

function getEventWeekday(EventWillBeHeldInDays) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const todayDate = new Date();

    const dayIndex = (todayDate.getDay() + EventWillBeHeldInDays + 7) % 7;

    return daysOfWeek[dayIndex];
}

const weekDay = getEventWeekday(4);
console.log(`The event will be held on ${weekDay}`);


//----------------------------------------Weather wear-------------------------------------------------

function clothesBasedOnTempreture(temprature) {

    switch (temprature) {
        case (temprature > 18 || temprature === 18):
            SuitableClothes = `The temprature is ${temprature} degree. The weather is fine to wear short and T-shirt :D`;
            break;
        case (temprature < 17 || temprature === 17 && temprature > 14 || temprature === 14):
            SuitableClothes = `The temprature is ${temprature} degree. Remember a sweetshirt ;)`;
            break;
        case temprature < 13,
            temprature === 13,
            temprature > 5,
            temprature === 5:
            SuitableClothes = `The temprature is ${temprature} degree. Oooh it is too cold :O`;
            break;
        default:
            SuitableClothes = `The temprature is ${temprature} degree. You will get freezed :(`;
            break;
    }

    return SuitableClothes;
}

const clothesToWear = clothesBasedOnTempreture(16);
console.log(clothesToWear);


//-------------------------- Student manager >>> addStudentToClass function-------------------------

//  class07Students = addStudentToClass(prompt("Enter the student name"));    ???

let class07Students = [];

function addStudentToClass(studentName) {

    if (studentName === '') {
        alert("The student name cannot be empty. Insert a name.");
    } else if (class07Students.length > 7 && studentName !== 'Qeen') {
        alert("The class can include max. 7 students => No more place to add students to the class 07");
    } else if (class07Students.includes(studentName)) {
        alert(`Student ${studentName} is already in the class`);
        return;
    } else {
        class07Students.push(studentName);
        return;
    }
}


/* switch (studentName) {

    case (studentName === ''):
        alert("The student name cannot be empty");
        break;

    case class07Students.includes(studentName):
        alert(`Student ${studentName} is already in the class`);
        break;

    case (class07Students.includes(studentName) === false && class07Students.length < 7):
        class07Students.push(studentName);

    case (class07Students.length > 7 && studentName !== 'Qeen'):
        alert("The class can include max. 7 students => No more place to add students to the class 07");

    case (studentName === 'Qeen'):
        class07Students.push('Qeen');
        break;
}

return studentName;
}*/

addStudentToClass('katayoun');
addStudentToClass('');
addStudentToClass('Amithis');
addStudentToClass('Ahoora');
addStudentToClass('katayoun');
addStudentToClass('Joolian');
addStudentToClass('Qeen');
addStudentToClass('Rose');
addStudentToClass('Robert');
addStudentToClass('Joolian');
addStudentToClass('Arnold');

console.log(class07Students);

// -----------Student manager >>> getNumberOfStudents function -----------

function getNumberOfStudents() {

    //const numberOfStudents= class07Students.indexOf;
    const numberOfStudents = class07Students.length;
    return numberOfStudents;
}

let numberOfStudentsInClass07 = getNumberOfStudents();
if (class07Students.includes('Qeen') === true) {
    numberOfStudentsInClass07 = numberOfStudentsInClass07 - 1;
    console.log(`The Total number of students in the class: ${numberOfStudentsInClass07}`);
} else {
    console.log(`The Total number of students in the class: ${numberOfStudentsInClass07}`);
}




// *******************************/// class excercise \\\*********************************

let ticketPrice = 200;
let age = 25;

switch (age) {
    case (0 < age < 2):
        console.log('free ride');
        break;
    case (3 < age < 18):
        ticketPrice = ticketPrice - ticketPrice * (15 / 100);
        console.log('You will get 15% discount, price ib dk ' + ticketPrice);
        break;
    default:
        ticketPrice = ticketPrice - ticketPrice * (70 / 100);
        console.log('no discount, price in dk ' + ticketPrice);
        break;

};





