const notes = [];

function saveNote(content, id) {
  const note = {
    content: content,
    id: id
  };
  
  notes.push(note);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote('Habababa', 3);

console.log(notes); 

  function getNote(id) {
    if (typeof id !== 'number') {
      console.log("Incorrect id. Please provide a number.");
      return;
    }
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === id) {
        console.log(notes[i]); 
        return;
      } 
      } 
      console.log(`No note found with id ${id}`)
}
        const firstNote = getNote;
           firstNote(2);

    function logOutNotesFormatted() {
        let formatedNotes = '';

        for (let i = 0; i < notes.length; i++ ){
           
            formatedNotes += `Note with id ${notes[i].id}  ${notes[i].content}\n` 
        }
        return formatedNotes;
    }
  console.log(logOutNotesFormatted());
  