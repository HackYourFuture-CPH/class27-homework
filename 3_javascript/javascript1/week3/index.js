//Item array removal
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

  
  // Write some code here
  names.splice(1,1);
  // Code done
  
  console.log(names);

  //When will we be there??

function timeCalculator(speed, destinationDistance){
    const  timeHour = Math.floor((destinationDistance / speed)%60);
    const timeMin = Math.round((destinationDistance % speed) / speed * 60);
    console.log(timeHour + '  hours and '+ timeMin + ' minutes.');
}

console.log(timeCalculator(50, 432));
console.log(timeCalculator(60, 98));


//Series Duration of My Life

const seriesDurations = [
  {
    title:'SpongeBob Square Pants',
    days: 4,
    hours: 9,
    minutes: 58,
  },
  {
    title:'Vikings',
    days: 7,
    hours: 3,
    minutes: 14,
  },
  {
    title:'Rick & Morty',
    days: 8,
    hours: 5,
    minutes: 16,
  }
];


const expectedLife = 80;

function SeriesLifeRatio(seriesDurations){
  const lifeInMin = expectedLife*365*24*60;
  for (let i=0; i<seriesDurations.length; i++){
    const seriesInMin = seriesDurations[i].days*24*60 + seriesDurations[i].hours*24 + seriesDurations[i].minutes;
    const ratio = (seriesInMin/lifeInMin)*100;
    console.log(seriesDurations[i].title + ' took %' +  ' ' + ratio + ' of my life.')
  };
}

SeriesLifeRatio(seriesDurations)

//Smart-ease NOnoN0nOYes (Note taking app)

const notes = [];
function saveNote(content, id){
  notes.push({ content, id });
}


saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Remember to pamper cats", 3);
saveNote("Remember to buy food for 4 cats in Istanbul", 4);

console.log(notes);

function getNote(id){
  if (id === undefined || typeof id !== 'number') {
      console.log("Please type a valid ID.");
      return;
    }
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === id) {
        return notes[i];
      }
    }
}

function logOutNotesFormatted(){
  for (const note of notes){
    console.log('The note with id: ' + note.id + ', ' + ' has the following note text: ' + note.content)
  }
}

logOutNotesFormatted();

//Unique Feature
//I want to implement some category options for notes (it can be: Work, self, chores).
//I want to implement sort by date feature.