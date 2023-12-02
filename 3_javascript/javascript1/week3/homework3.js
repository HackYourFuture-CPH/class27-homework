//Item array removal
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
const index = names.indexOf(nameToRemove);

if (index !== -1) {
    names.splice(index, 1);
}
console.log(names);

//When will be there?

function CalculateTravelTime(travelInfo) {
    const time = travelInfo.destinationDistance / travelInfo.speed;
    const hours = Math.floor(time);
    const minutes = Math.floor((time - hours) * 60);
    return `${hours} hours and ${minutes} minutes`;
}
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

const travelTime = CalculateTravelTime(travelInformation);
console.log(travelTime);

//Series duration of my life
const seriesDurations = [
    {
        title: "Gameof Throne",
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Squid Game",
        days: 3,
        hours: 1,
        minutes: 30,
    },
    {
        title: "Breaking Bad",
        days: 15,
        hours: 4,
        minutes: 20,
    },
];

function logOutSeriesText(seriesDurations) {
    let totalPercentage = 0;
    const lifeSpanInMinutes = 80 * 365.25 *24 *60;

    for(let series of seriesDurations) {
        const durationInMinutes = (series.days * 24 *60) + (series.hours * 60) + series.minutes;
        const percentageOfLife = (durationInMinutes / lifeSpanInMinutes) * 100;
        console.log(`${series.title} took ${percentageOfLife.toFixed(3)}% of my life`);
        totalPercentage += percentageOfLife;

        console.log(`In total that is ${totalPercentage.toFixed(3)}% of my life`);
    }
}

logOutSeriesText(seriesDurations);

//Notes

const notes = [];
function saveNote(content, id, reminder) {
    const newNote = {content, id, reminder: new Date(reminder) };
    notes.push(newNote);
    setReminder(newNote);
}
function setReminder(note) {
    const now = new Date();
    const reminderTime = new Date(note.reminder);
    const delay = reminderTime.getTime() - now.getTime();

    if (delay > 0) {
        setTimeout (() => {
            console.log(`Reminder: ${note.content}`);
        }, delay)
    };
}

saveNote("Pick up groceries", 1, "2023-12-01T09:00:00");
saveNote("Do laundry", 2, "2023-12-02T10:00:00");

function getNote(id) {
    if (typeof id !== "number") {
        console.log("Error: id must be a number");
        return;
    }
    for (const note of notes) {
        if(note.id === id) {
            return note;
        }
    }
    console.log("Error: note not found");
}

const firstNote = getNote(1);
console.log(firstNote);

function logOutNotesFormatted() {
    for (const note of notes) {
        console.log(`The note with id: ${note.id} has the following note text: ${note.content}`);
    }
}

logOutNotesFormatted();

//CactusIO-interactive

//Add activity
const activities = [];
function addActivity(date, activity, duration) {
    activities.push({date, activity, duration});
}

//Show status

function showStatus() {
    if (activities.length === 0) {
        console.log("Add some activities before calling showStatus");
        return;
    }

    let totalDuration = 0;
    for (const activity of activities) {
        totalDuration += activity.duration;
    }
    console.log(`You have added ${activities.length} activities. They amount to ${totalDuration} min of usage`);
}

//Usage limit

let usageLimit = 60;

function showStatusWithLimit(){
    showStatus();
}
let totalDuration = activities.reduce((acc, activity) => acc + activity.duration, 0);
if (totalDuration > usageLimit) {
    console.log("You have reached your limit, no more smartphoning for you!");
}

//Extra feature

function mostUsedActivity() {
    const activityDurations = {};

    for (const activity of activities) {
        if (!activityDurations[activity.activity]) {
            activityDurations[activity.activity] = 0;
        }
        activityDurations[activity.activity] += activity.duration;
    }
    let maxActivity = null;
    let maxDuration = 0;

    for (const [activity, duration] of Object.entries(activityDurations)) {
        if (duration > maxDuration) {
            maxActivity = activity;
            maxDuration = duration;
        }
    }
    console.log(`The most used activity is ${maxActivity}, with a total of ${maxDuration} minutes.`);
}

//Optional Features

function activityWithAutoDates (activity, duration) {
    const today = new Date().toLocaleDateString("en-US");
    activities.push({ date: today, activity, duration });
}

//Show activities during the day

function showTodayStatus() {
    const today = new Date().toLocaleDateString("en-US");
    const todaysActivities = activities.filter(activity => activity.date === today);

    if(todaysActivities.length === 0) {
        console.log("No activities for today.");
        return;
    }
    let totalDuration = todaysActivities.reduce((acc, activity) => acc + activity.duration, 0);
    console.log(`You have added ${todaysActivities.length} activities today. They amount to ${totalDuration} min. of usage.`);
} 

addActivity("25/7-18" , "YouTube", 30);
activityWithAutoDates("Facebook", 20);
showStatus();
showTodayStatus();
showStatusWithLimit();
mostUsedActivity();