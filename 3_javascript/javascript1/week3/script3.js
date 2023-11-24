const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
}

function getNote(id) {
  if (typeof id !== 'number' || isNaN(id)) {
    console.error('Error: Please provide a valid numeric id.');
    return;
  }

  for (const note of notes) {
    if (note.id === id) {
      return note;
    }
  }

  console.error(`Error: No note found with id ${id}`);
}

function logOutNotesFormatted() {
  for (const note of notes) {
    console.log(`The note with id: ${note.id}, has the following note text: ${note.content}`);
  }
}

function deleteNote(id) {
  if (typeof id !== 'number' || isNaN(id)) {
    console.error('Error: Please provide a valid numeric id.');
    return;
  }

  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes.splice(index, 1);
    console.log(`Note with id ${id} has been deleted.`);
  } else {
    console.error(`Error: No note found with id ${id}`);
  }
}

// Example usage
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);

const firstNote = getNote(1);
console.log(firstNote);

logOutNotesFormatted();

deleteNote(1);
logOutNotesFormatted(); // Should log only the "Do laundry" note now