//Javascript warmup

const names = ["Peter", "Ahmad", "Yana", "kristina", "Rasmus", "Samuel", "katrine", "Tala"];
const nameToRemove = "Ahmad";

for (let i = 0; i < names.length; i++) {
  if (names[i] === nameToRemove) {
    names.splice(i, 1);
  }
}
console.log(names);

//When will we be there??

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime);

function calculateTravelTime(travelInformation) {
  if (travelInformation.destinationDistance <= 0 || travelInformation.speed <= 0) {
    return "Distance and speed must be more than zero.";
  }

  const time = travelInformation.destinationDistance / travelInformation.speed;
  const hours = Math.floor(time);
  const minutes = Math.floor((time - hours) * 60);

  return `The travel time is ${hours} hours and ${minutes} minutes.`;
}

//Series duration of my life

const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "suits",
    days: 7,
    hours: 2,
    minutes: 0,
  },
  {
    title: "Breaking bad",
    days: 2,
    hours: 2,
    minutes: 0,
  },
];

let totalTimeMinutes = 0;

for (const item of seriesDurations) {
  const { days, hours, minutes } = item;
  const totalMinutes = days * 24 * 60 + hours * 60 + minutes;
  totalTimeMinutes += totalMinutes;
}

const totalMinutesInLifespan = 80 * 365 * 24 * 60;

const percentageOfLifespan = (totalTimeMinutes / totalMinutesInLifespan) * 100;

console.log(`Total time spent watching TV series: ${totalTimeMinutes} minutes`);
console.log(
  `Percentage of an 80-year lifespan spent watching TV series: ${percentageOfLifespan.toFixed(2)}%`
);

//NOnoN0nOYes (Note taking app)
const notes = [];

function saveNote(content, id) {
  const myWork = { id: id, content: content };
  notes.push(myWork);
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);

//Get a note
function getNote(id) {
  for (const item of notes) {
    if (item.id === id) {
      return item;
    }
  }
}

const firstNote = getNote(1);
console.log(firstNote);

//Log out notes

function logOutNotesFormatted(id) {
  for (const item of notes) {
    if (item.id === id) {
      console.log(`The note with ${item.id} has the following note text: ${item.content}`);
    }
  }
}

logOutNotesFormatted();

//CactusIO-interactive (Smart phone usage app) optional

const activities = [];

function addActivity(date, activity, duration) {
  const item = { date: date, activity: activity, duration: duration };
  activities.push(item);
}
addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "instagram", 20);
addActivity("23/7-18", "game", 50);

function showStatus() {
  if (activities.length === 0) {
    return "No activities planned for today.";
  }
  let totalActivities = activities.length;
  let totalDuration = 0;
  let limitDuration = 90;
  for (let i = 0; i < activities.length; i++) {
    totalDuration += activities[i].duration;
  }

  if (totalDuration > limitDuration) {
    return "You have reached your limit, no more smartphoning for you!";
  }

  return `You have added ${totalActivities} activities. They amount to ${totalDuration} min. of usage`;
}
const result = showStatus(activities);
console.log(result);
