// warm up work item array removal //

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

// Write some code here

console.log(names.at(1));

// trying other parameters //

console.log(names.indexOf("Rasmus"));

console.log(names[names.length - 1]);

// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

//  When will we be there //

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const averageSpeedToArrive = function (num) {
  let hours = Math.floor(num / 60);
  if (hours.toString().length === 1) {
    hours = "0" + hours;
  }

  let minutes = num % 60;
  if (minutes.toString().length === 1) {
    minutes = "0" + minutes;
  }

  return `${hours}:${minutes}`;
};

const travelTime = averageSpeedToArrive(travelInformation);
console.log(averageSpeedToArrive(432)); // 8 hours and 38 minutes

// Series duration of my life //

const seriesDurations = [
  {
    title: "Friends",
    days: 3,
    hours: 23,
    minutes: 0,
  },
  {
    title: "Hannah Montana",
    days: 5,
    hours: 12,
    minutes: 57,
  },
  {
    title: "Harry Potter",
    days: 5,
    hours: 12,
    minutes: 57,
  },
];

const seriesDurationsOfMyLife = function (seriesDuration) {
  // write code here

  let output = "";
  for (seriesDuration of seriesDuration) {
    let totalMinutesOfSeries =
      seriesDuration.days * 24 * 60 +
      seriesDuration.hours * 60 +
      seriesDuration.minutes;
    const myAverageLifeInMinuets = 80 * 365 * 24 * 60;
    let percentage = (totalMinutesOfSeries / myAverageLifeInMinuets) * 100;
    output += `${seriesDuration.title} took ${percentage.toFixed(
      3
    )}% of my life.\n`;
  }
  return output;
};

console.log(seriesDurationsOfMyLife(seriesDurations)); // logs out the text found above

// NOnoN0nOYes (Note taking app) //

const notes = [];

function saveNote(content, id) {
  // write some code here
  notes.push({
    content: content,
    id: id,
  });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

// Get a note //

function getNote(id) {
  // your code here

  for (let note of notes) {
    if (id === note.id) return note.content;
  }
}
const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

// Log out notes //

function logOutNotesFormatted() {
  // your code here

  let allMyNotes = [
    "The note with id: 1, has the following note text: Pick up groceries",
    "The note with id: 2, has the following note text: Do laundry",
  ];
  for (let i = 0; i < allMyNotes.length; i++) {
    return allMyNotes;
  }
}

console.log(logOutNotesFormatted()); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

// Unique feature Of Users allowed to access Save Note //

let usersAge = [16, 10, 18, 20, 27];

const myNoteExpectedUserAge = 18;
const hasPermission = true;

if (myNoteExpectedUserAge >= 18) {
  console.log("AccessGranted");
} else {
  console.log("You are not allowed");
}

console.log(usersAge);

// Adding an activity //

const userActivities = [];

function addActivity(date, activity, duration) {
  userActivities.push({
    date: date,
    activity: activity,
    duration: duration,
  });
}
addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Facebook", 20);
addActivity("23/8-18", "Snapchat", 40);

console.log(addActivity());
/*
activities should now look like this
[{
    date: '23/7-18',
    activity: 'Youtube',
    duration: 30,
}]
*/

// show user Status //

function showStatus() {
  for (let i = 0; i < userActivities.length; i++) {
    if (userActivities === userActivities.duration);
  }
  return showStatus
    ? "Add some activities before calling showStatus"
    : `You have added ${userActivities} Activity. They amount to ${userActivities.duration} min. of usage`;
}

console.log(showStatus());

// Usage limit //
const limitedActivities = [
  {
    title: "Youtube",
    timeDuration: 30,
  },
  {
    title: "Facebook",
    timeDuration: 20,
  },
  {
    title: "Snapchat",
    timeDuration: 40,
  },
];
if (
  userActivities.activity === limitedActivities.title &&
  userActivities.duration < limitedActivities.time
) {
  console.log(showStatus());
} else {
  console.log("You have reached your limit, no more smartphoning for you!");
}
