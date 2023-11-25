//------------Item array remove -----------
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
names.splice(names.indexOf(nameToRemove), 1); // we can used .indexOf() and .splice() or .filter()
console.log(names);

//----------When will we be there??-----------
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function formatTravelTime(hours, minutes) {
  return `${hours} hours and ${minutes} minutes`;
}
function calculateTravelTime(travelInformation) {
  const { speed, destinationDistance } = travelInformation;
  const timeInHours = destinationDistance / speed;
  const hours = Math.floor(timeInHours);
  const minutes = Math.round((timeInHours - hours) * 60);

  return formatTravelTime(hours, minutes);
}
const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime);

//----------Series duration of my life-------  5 days 14 hours 42min 42076800minin 80days
//4088
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
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function convertToMinutes(series) {
  const { days, hours, minutes } = series;
  const totalMinutes = days * 24 * 60 + hours * 60 + minutes; //total minutes watched
  return totalMinutes;
}

const avgLifespan = 80;
const totalLifeMinutes = (avgLifespan * 365 + 20) * 24 * 60; //total minutes in 80year
const percentageOfGot =
  (convertToMinutes(seriesDurations[0]) / totalLifeMinutes) * 100;

console.log(
  seriesDurations[0] +
    "took " +
    (convertToMinutes(seriesDurations[0]) / totalLifeMinutes) * 100 +
    "% of my life"
);
console.log(
  seriesDurations[1] +
    "took " +
    (convertToMinutes(seriesDurations[1]) / totalLifeMinutes) * 100 +
    "% of my life"
);
console.log(
  seriesDurations[2] +
    "took " +
    (convertToMinutes(seriesDurations[2]) / totalLifeMinutes) * 100 +
    "% of my life"
);

//----------Save a note---------

const notes = [];
function saveNote(content, id) {
  notes.push({ content: content, id: id });
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);

//----------get a note----------

function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }
  console.error("Error: No note found with id", id);
  return null;
}
const firstNote = getNote(1);
console.log(firstNote);

//----------Log out notes----------

function logOutNotesFormatted(note) {
  console.log(
    "The note with id: " +
      note.id +
      ", has the following note text: " +
      note.content
  );
}
notes.forEach(logOutNotesFormatted);
