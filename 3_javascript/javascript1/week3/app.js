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

//-----------------------------
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
// //bar zakhireh dar note
const notes = [];

// to save a note
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
