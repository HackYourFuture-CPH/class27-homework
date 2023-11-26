// Item array removal

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

const ind = names.indexOf(nameToRemove);
names.splice(ind,1)

console.log(names); 

// When will we be there??

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = travelInformation.destinationDistance/travelInformation.speed;
const hours = Math.floor(travelTime);
const minutes = Math.floor((travelTime - hours) * 60);
console.log(`travel Time is ${hours} hours and ${minutes} minutes`); // 8 hours and 38 minutes

// Series duration of my life

const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Friends",
    days: 3,
    hours: 23,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];


function logOutSeriesText() {
    const myAgeInMin = 80 * 365 * 24 * 60;
    let result = [];
    let total = 0;

    for (serie of seriesDurations) {
        const minSerie = serie.days * 24 * 60 + serie.hours * 60 + serie.minutes;
        const persatages = (minSerie / myAgeInMin * 100);
        total =total+persatages;
        console.log(`${serie.title} took ${persatages.toFixed(2)}% of my life`);
    }
    console.log(`In total that is ${total.toFixed(2)}% of my life`);
}
logOutSeriesText(); // logs out the text found above

// Smart-ease - Back to the basics!
// Save a note

let notes = []; 

function saveNote(content, id) {
    if (content != '') {
        notes.push({ content: content, id: id });
    } else {
        alert('Fill the content');
    }
    
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

// Get a note

function getNote(id) {
    for (note of notes) {
        if (note.id === id) {
            return (note.content);
      }
  }
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

// Log out notes

function logOutNotesFormatted() {
    let allNotes = "";
    for (const note of notes) {
       allNotes += `The note with id: ${note.id}, has the following note text: ${note.content} `;
    }
    return allNotes;
}

logOutNotesFormatted(); // should log out the text below
console.log(logOutNotesFormatted());
// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry


// CactusIO-interactive (Smart phone usage app) optional

let activities =[];

function addActivity(date, activity, duration) {
    if (date !== '' && activity !== '' && duration != 0) {
        activities.push({ 'date': date, 'activity': activity, 'duration':duration });
    } else {
        alert("Fill all fields");
    }
}

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Facebook", 60);
addActivity("23/7-18", "Instagram", 40);
console.log(activities);

function showStatus(activities) {
    const totalDuration = 0;
    const number = 0;
    if (activities === '') {
        console.log("Add some activities before calling showStatus");
    } else {
        activities.forEach(act => {
        //   totalDuration = totalDuration + act.duration;
            number += 1;
            console.log(number);
        });
        // for (act of activities) {
        //     totalDuration = totalDuration + act.duration;
        //     number += 1;
        // }
        console.log(`You have added ${number} activities. They amount to ${totalDuration} min. of usage"`
        )
    } 
}

// showStatus(activities);