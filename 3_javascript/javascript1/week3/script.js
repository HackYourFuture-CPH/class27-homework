//--------------------------------------------------exercise 1
//Remove the item in names that is equal to nameToRemove

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
  let index = names.indexOf("Ahmad");
  console.log(index); //index "Ahmad" in the array 1
  if (index > 0){
    names.splice(index, 1);
  }
  
  console.log(names); 

//------------------------------------------------Exercise 2
//Write a function where you speficy your speed in km/h and how far you have to go in km

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function calculateTime(travelInformation){
    const travelTimeMinutes = travelInformation.destinationDistance / travelInformation.speed * 60;
    const hours = Math.floor(travelTimeMinutes / 60); 
    const minutes = Math.floor(travelTimeMinutes % 60);
  
    return hours + " hours and " + minutes + " minutes."; 
  }
  
  const travelTime = calculateTime(travelInformation);
  console.log(travelTime);


  //------------------------------------Series duration of my life

  const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Dexter",
      days: 3,
      hours: 16,
      minutes: 0,
    },
    {
      title: "Friends",
      days: 7,
      hours: 15,
      minutes: 0,
    },
  ];

function yourAge(age){
    let seriesResult = ""; //a variable to store the final result
    let totalPercentage = 0; // to store the total percentage of time spent

    for( const series of seriesDurations) {
        let ageInMinutes = age * 365 * 24 *60; //calculates the number of minutes in your age
        //converting the number of days of the series into min, hours into min, amount minutes of serial
        let seriesDurationsMinutes = (series.days * 24 * 60) + (series.hours * 60) + series.minutes;
        let spentLifePercentage = (seriesDurationsMinutes / ageInMinutes)*100; //% of time spent on the series relative to the total time of your life

        seriesResult = series.title + " has wasted " + spentLifePercentage.toFixed(2) + " % of your life";
        
console.log(seriesResult);


totalPercentage += spentLifePercentage;
}
console.log("In total you spend " + totalPercentage.toFixed(3) + " of your life.");
       
}
yourAge(80);



//----------------------------------NOnoN0nOYes (Note taking app)

// Function to save notes

const notes = [];
function saveNote(content, id) {
    notes.push ({
        content: content,
        id: id
    })

}
saveNote("Pick up groceries", 1);
saveNote("Do laundery", 2);
console.log(notes);

//Get a note

function getNote(id){
    //If no id is specified or if the id is not a number, log out an error string.
    if(typeof id !== "number"){
        console.log("Error: provide, a valid number as id" );
        return;
    }
//user want to see the note by id
    for (const note of notes){
        if(note.id===id){
            return note;
        }
        
    } 
    console.log("Error: Note with this id was not found.")
}
const firstNote = getNote(1);
console.log(firstNote);

//Log out notes

//func to read all the notes

function logOutNotesFormatted() {
for( const note of notes){
    console.log("The note with id: " + note.id  + "," + " has the following text: " + note.content);
}

}
logOutNotesFormatted();
