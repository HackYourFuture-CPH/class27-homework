const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const noteList = document.getElementById("noteList");
const searchInput = document.getElementById("sreachInput");
const searchBtn = document.getElementById("searchBtn");

let notes = [
  {
    id: 1,
    content: "Pickup grosseries",
  },
  {
    id: 2,
    content: "do the dishes",
  },
  {
    id: 3,
    content: "Do the homeworkes",
  },
];
// show Notes--------------------------
const showNotes = (filteredNotes = notes) => {
  noteList.innerHTML = "";
  for (const note of filteredNotes) {
    let li = document.createElement("li");
    li.textContent = `${note.id}.${note.content}`;
    noteList.appendChild(li);
  }
};
showNotes();

// add notes------------------------
addBtn.addEventListener("click", () => {
  let myNote = noteInput.value;
  if(myNote === "" || myNote.trim() === ""){
    alert("Please Enter a Note")
  }else{
    notes.push({
        id: notes.length + 1,
        content: myNote,
      });
      showNotes();
  }
  noteInput.value = "";
});

// searching------------------------
searchBtn.addEventListener("click", () => {
  let searchedId = parseInt(searchInput.value);
  if(searchedId > notes.length || searchedId <= 0){
    alert("invalid Id")
  }else{
    let filteredNotes = notes.filter((note) => note.id === searchedId);
    showNotes(filteredNotes);
  }
});
