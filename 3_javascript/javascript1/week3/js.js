// Item array removal



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
  
  const secondName = names.splice(1,1);
  
  // Code done
  
  console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']




//   When will we be there??



function timeCounter(speed, destinationDistance){
    let counter= destinationDistance/speed;
    let hour = Math.floor(counter);
    let minutes = Math.floor ((counter-hour)*60);
    
    if(hour<1){
    return `${minutes} minutes`
    } else {
        return `${hour} hours and ${minutes} minutes`
    }
}
  
  
  const travelTime = timeCounter(50, 432);
  console.log(travelTime); // 8 hours and 38 minutes



// Series duration of my life


const seriesDurations = [
    {
      title: "House M.D",
      days: 5,
      hours: 19,
      minutes: 18,
    },
    {
      title: "Friends",
      days: 3,
      hours: 23,
      minutes: 0,
    }
  ];

function yourAge(age) {
    
let result="";
let resultInTotal=0;
    for (const seriesDuration of seriesDurations){
        let ageInMinutes = age*365*24*60;
        let seriesDurationsInMinutes = (seriesDuration.days*24*60) + (seriesDuration.hours*60) + seriesDuration.minutes;
        let wastedLifePercentage = (seriesDurationsInMinutes/ageInMinutes)*100;

        result = `${seriesDuration.title} has wasted ${wastedLifePercentage.toFixed(3)} % of your life`;
        console.log (result);
        resultInTotal+=wastedLifePercentage;
    }
    console.log(`in total that is ${resultInTotal.toFixed(3)} of your life!`);

}

yourAge (70);

// Note taking app



const notes = [];

function saveNote(content, id) {
  notes.push({
    content: content,
    id: id
  })
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);


// GetNote


function getNote(id){
    for (const note of notes){
        if (note.id===id){
            console.log(note.content);
    }
}
}
getNote(1);



function logOutNotesFormatted() {
    for (const note of notes){
        console.log(`The note with id: ${note.id}, has the following note text: ${note.content} \n`)
    }
}
  
  logOutNotesFormatted(); // should log out the text below
  
  // The note with id: 1, has the following note text: Pick up groceries
  // The note with id: 2, has the following note text: Do laundry

function uniqueFeature(content){
    for (const note of notes){
        if (note.content === content)
        console.log(note.id)
    }   
}
const partOfContent= "Pick up groceries"
uniqueFeature(partOfContent);
// this feature is to know the id of an object by writing the array
// I was trying to find a way to search for the content by writing part of it, but unfortunately I didn't manage. But hopefully soon!