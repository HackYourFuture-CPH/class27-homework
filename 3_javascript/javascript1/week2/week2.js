// Flight booking fullname function

function getFullname(firstname, surname, useFormalName) {
    if (useFormalName) {
        return ('Lord ' + firstname + " " + surname);

    } else {
        return (firstname + " " + surname);
    } 
}  

const fullname1 = getFullname("Benjamin", "Hughes", true);
const fullname2= getFullname("Benjamin", "Hughes", false);

console.log(fullname1, fullname2);


// Event application

function getEventWeekday(eventy) {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const dateNow = new Date();
    
    const numberDayNow = dateNow.getDay();
 
    const addDay=  eventy % 7;
 
    const nextDate = numberDayNow + addDay;
    console.log('event on', weekday[nextDate]);

}

getEventWeekday(9);

// Weather wear

function whatToWear(temp) {
    let weather;
    let clothes;
    if (temp<0) {
         weather = 'cold';
    } else if (temp>=0 && temp<=7) {
         weather = 'not very cold';
    } else if (temp>7 && temp<=15) {
         weather = 'warm';
    } else if (temp > 15 && temp<=25) {
         weather = 'hot';
    } else {
         weather = 'very hot';
    };

    switch (weather) {
        case 'cold': clothes= 'down jacket and hat';
        break;
        case 'not very cold': clothes= 'only jacket';
        break;
        case 'warm': clothes= 'jeans suit';
        break;
        case 'hot': clothes= 'shorts and a t-shirt';
        break;
        case 'very hot': clothes= 'do not forget swimming suit';
        break;
        default: clothes = 'do not forget wear shoes'
    }

    console.log ("The weather is ", weather, 'you need to wear ', clothes);
}

whatToWear(28);

// Student manager
let class07Students = [];
function addStudentToClass(studentName) {
    if (studentName !== '') {
        if (studentName === 'Queen') {
            class07Students.push(studentName);
            return;
        }  
        if (class07Students.includes(studentName)) {
            console.log(`Student ${studentName} is already in the class`);
          
        } else
        if (class07Students.length < 6) {
            class07Students.push(studentName);
      } else {
        console.log("Cannot add more students to class 07");
      }
    } else {
        console.log("Cannot add empty name");
    }
}

function getNumberOfStudents() {
    return class07Students.length;
    console.log(`The number of students is ${class07Students.length}`)
  // You write code here
}


addStudentToClass("N1");
addStudentToClass("N2");
addStudentToClass("N3");
addStudentToClass("N1");
addStudentToClass('Queen4');
addStudentToClass("Queen");
addStudentToClass("");
addStudentToClass("N6");
addStudentToClass("N7");
console.log(class07Students);

