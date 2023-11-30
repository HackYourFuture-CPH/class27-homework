// Names

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
names.splice(1, 1);
console.log(names);

// travelInformation

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function travel(travelInformation) {
  let time =
    (travelInformation.destinationDistance / travelInformation.speed) * 60;
  let hr = Math.floor(time / 60);
  let min = Math.floor(time % 60);
  return `${hr} hours and ${min} minutes`;
}

const timeTravel = travel(travelInformation);
console.log(timeTravel); // 8 hours and 38 minutes

// Series duration of my life

// Game of thrones took 0.01% of my life
// Sopranos took 0.012% of my life
// The Wire took 0.007% of my life

// In total that is 0.2% of my life

const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "Suits",
    days: 3,
    hours: 21,
    minutes: 48,
  },
];

function logOutSeriesText() {
  let totalMinutesWatched = 0;
  const avLifespan = 80;
  seriesDurations.forEach((series) => {
    const seriesDurationInMinutes =
      series.days * 24 * 60 + series.hours * 60 + series.minutes;
    totalMinutesWatched += seriesDurationInMinutes;
    const seriesDurationInYears = seriesDurationInMinutes / (60 * 24 * 365);
    const percentageOfLifeForSeries =
      (seriesDurationInYears / avLifespan) * 100;
    console.log(
      `${series.title} took ${percentageOfLifeForSeries.toFixed(4)}% of my life`
    );
  });
  const totalYearsWatched = totalMinutesWatched / (60 * 24 * 365);
  const percentageOfLife = (totalYearsWatched / avLifespan) * 100;
  console.log(`In total that is ${percentageOfLife.toFixed(2)}% of my life`);
}

logOutSeriesText(); // logs out the text found above

// Save a note

const notes = [];

function saveNote(content, id) {
  notes.push({ content: content, id: id });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

// Get notes

function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }
  return error;
}
const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

// Log out notes

function logOutNotesFormatted() {
  for (let note of notes) {
    console.log(
      `The note with id: ${note.id}, has the following note text: ${note.content}.`
    );
  }
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry
