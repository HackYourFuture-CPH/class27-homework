//1-Remove the item in names that is equal to nameToRemove

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

const filteredNames = names.filter((name) => name !== nameToRemove);

console.log(filteredNames);

//2 -----------------------------
// Write a function where you speficy your speed in km/h and how far you have to go in km.
//The function has to return the time it will take to arrive at your destination.
//The time should be formatted like this: 3 hours and 34 minutes.
// const travelInformation = {
//   speed: 50,
//   destinationDistance: 432,
// };

function calculateTravelTime(travelInformation) {
  const timeInHours =
    travelInformation.destinationDistance / travelInformation.speed;

  // zaman ro be saat tabdil mikone.
  const hours = Math.floor(timeInHours);
  const minutes = Math.round((timeInHours - hours) * 60);

  //  string formated ro minevise
  const formattedTime = `${hours} hours and ${minutes} minutes`;

  return formattedTime;
}

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime); // : 8 hours and 38 minutes
//3
// How much time of my life have i been watching series on tv? Lets find out! Calculate how much time a tv series have taken as a percentage of an average lifespan of 80 years.

// Firstly change the seriesDurations array found above to include your favorite series. Find the duration of a series here: http://tiii.me/

// Create a function that logs out the following text using the seriesDurations array:

// Game of thrones took 0.01% of my life
// Sopranos took 0.012% of my life
// The Wire took 0.007% of my life

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

const averageLifespan = 80 * 365 * 24 * 60; // Convert years 2minutes

function logOutSeriesText() {
  let totalWatchedMinutes = 0;

  for (const series of seriesDurations) {
    const seriesDurationMinutes =
      series.days * 24 * 60 + series.hours * 60 + series.minutes;

    totalWatchedMinutes += seriesDurationMinutes;

    const percentageOfLife = (seriesDurationMinutes / averageLifespan) * 100;

    // Log out  text for each series
    console.log(
      `${series.title} took ${percentageOfLife.toFixed(3)}% of my life`
    );
  }

  // Calculate total percentage of life spent watching all series
  const totalPercentageOfLife = (totalWatchedMinutes / averageLifespan) * 100;

  // Log out total percentage
  console.log(
    `\nIn total that is ${totalPercentageOfLife.toFixed(3)}% of my life`
  );
}

// Call function 2 log out the series text
logOutSeriesText();

//homework3:
//create is the functionality to save a note:
//Create a variable called notes and assign it to an empty array.
// Create a function called saveNote. The saveNote has two parameters:
// content parameter is a string.
// id is a number.
// The saveNote function should push an object to the notes array with the keys content and id.
// Here is an example
// const notes = [];
// function saveNote(content, id) {
//   // write some code here
// }

// saveNote("Pick up groceries", 1);
// saveNote("Do laundry", 2);

// console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]
// Get a note
//--------------------------------------------
// Now a user can save a note, but what if a user wants to see a specific note, but only remembers the id? Lets create that functionality for him: Create a function called getNote. The function has one parameter called id. When calling this function with an id it should return the relevant note object that corresponds to the id. If no id is specified or if the id is not a number, log out an error string. Hint: Use a for loop.

// function getNote(id) {
//   // your code here
// }

// const firstNote = getNote(1);
// console.log(firstNote); // {content: 'Pick up groceries', id: 1}
// Log out notes

// Now a user can both save and get a note. What if the user just wants to read all his notes? Lets also create that functionality: Create a function logOutNotesFormatted. When calling the function it should log this string out for every note: "The note with id: 1, has the following note text: "some example note"."

// function logOutNotesFormatted() {
//   // your code here
// }

// logOutNotesFormatted(); // should log out the text below

// // The note with id: 1, has the following note text: Pick up groceries
// // The note with id: 2, has the following note text: Do laundry
// Unique feature

// Suddenly you get this great idea for making the note app even better!

// Come up with a unique feature you think would make this app better.
// Write down the idea and see if you can implement it.
//If not dont worry :) If it is too hard to implement try and ask in the slack channel :)

// Try an interactive version 💻 of your code here. Remember to insert your code in the top of the codepen :)

//part1
// //bara zakhireh dar note
const notes = [];

// f.to save a note
function saveNote(content, id) {
  // idi adadeh ya nah
  if (typeof id !== "number") {
    console.error("Error: ID must be a number.");
    return;
  }

  notes.push({ content, id });
}

// get a note by id
function getNoteById(id) {
  if (typeof id !== "number") {
    console.error("Error: ID must be a number.");
    return;
  }

  // loop 2 find the note with the specified id
  for (const note of notes) {
    if (note.id === id) {
      //vip
      return note;
    }
  }

  console.error(`Error: Note with ID ${id} not found.`);
}

// Function 2 log out notes formatted
function logOutNotesFormatted() {
  for (const note of notes) {
    console.log(
      `The note with id: ${note.id}, has the following note text: "${note.content}"`
    );
  }
}

// Save some notes
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

// Get and log out a specific note
const firstNote = getNoteById(1);
console.log(firstNote);

// Log out all notes
logOutNotesFormatted();

function updateNote(id, newContent) {
  if (typeof id !== "number") {
    console.error("Error: ID must be a number.");
    return;
  }

  for (const note of notes) {
    if (note.id === id) {
      note.content = newContent;
      console.log(`Note with ID ${id} updated successfully.`);
      return;
    }
  }

  console.error(`Error: Note with ID ${id} not found.`);
}

// Update content of first  note
updateNote(1, "Buy fresh vegetables");

logOutNotesFormatted();
