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



// Weather Wear 

function temperatureOut(temperature){
    if (temperature > 40){
        return "Do not go outside if you don't want to be grilled"
    }
    else if (temperature > 20){
        return "You should wear t-shirt and remember to apply sunscreen";
    } else if (temperature < 20 && temperature > 15){
        return "You should wear a sweater";
    }else {
        return "You should wear a Jacket"
    }
}
const clothesToWear = temperatureOut(45);
console.log(clothesToWear);



// Student manager & get number of

const class07Students = [];
function addStudentToClass(studentName) {
    for (let i = 0; i < class07Students.length; i++) {
        if (class07Students[i] === studentName) {
          console.log("Student "+ studentName +" is already in the class");
          return;
        }
    }
   
    if (studentName !== ""){
        if (class07Students.length < 6 || studentName === "Queen") {
            class07Students.push(studentName);
        } else {
            console.log("no more students to be added");
        } 
    } else {
        console.log("please add a name.")
    }
}
   


addStudentToClass ("Youssef");
addStudentToClass ("Rene");
addStudentToClass("");
addStudentToClass("Ahmad");
addStudentToClass("Margret");
addStudentToClass("Saeed");
addStudentToClass("Saeed");
addStudentToClass("Wael");
addStudentToClass("Queen");
console.log(class07Students)


function getNumberOfStudents() {
  console.log(class07Students.length);
}
getNumberOfStudents();


// Event Application
const getEventDay = (daysUntilEvent) => {
    const today = new Date();
    const futureDate = today.getDay();
    const weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    const futureEvent = (futureDate + daysUntilEvent -1) % 7;
    return weekdays[futureEvent];
  };
  console.log(`The event will be held on a ${getEventDay(10)}`);