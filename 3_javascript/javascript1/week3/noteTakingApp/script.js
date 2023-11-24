// Save a note
const notes = [];

function saveNote(content, id, important) {
  notes.push({
    id: id,
    content: content,
    important: important
  })
}
saveNote("Pick up groceries", 1 ,true);
saveNote("Do laundry", 2, false);
saveNote("Do Homeworks", 3, true);
console.log(notes); 

// get note
function getNote(id) {
    for(const note of notes){
        if(note.id === id)
        return note.content;
    }
  } 
const firstNote = getNote(1);
console.log(firstNote);

// Log out notes
function logOutNotesFormatted() {
    let allNotes = ""
    for(const note of notes){
        allNotes += `The note with id: ${note.id}, has the following note text: ${note.content}\n`
    }
    return allNotes;
  }
console.log(logOutNotesFormatted()); 

// Unique feature
const ShowImportantNotes = () =>{
    let importantNotes = ""
    for(const note of notes){
        if(note.important){
            importantNotes += `Don't forget to ${note.content}. It is important.\n`
        }
    }
    return importantNotes;
}
console.log(ShowImportantNotes())
