console.log("-----------------------------When will we be there??-----------------------------")
const travelInformation = {
    speedT: 50, //km/h
    speed: 50 / 60, //km/min  ====>  speed = 5/6 km/min
    destinationDistance: 432, //min
  };

function timeCalculation(speed , displacement){
    travelTimeInMinute = 432 * 6 / 5 ; //min
    const houres = Math.floor (518.4 / 60) ;
    const minutes = travelTimeInMinute - (houres * 60);
    return `this journey will take ${houres} houres and ${minutes} minutes to arrive to the destination.`
}

  const travelTime = timeCalculation(5/6 , 432);
  console.log(travelTime);




console.log("-----------------------------Series duration of my life-----------------------------")
   const information = {
    avrageAge: 80, //years
    year: 365, //days
    day: 24, //hours
   }
   const ageAvrageInHoures= 80 * 365 * 24; //700800 hours aged.

  const seriesDurations = [
    {
      title: "Friends",
      days: 31,
      hours: 17,
      minutes: 0,
    },
    {
      title: "Prison Break",
      days: 11,
      hours: 5,
      minutes: 0,
    },
    {
      title: "Lost",
      days: 5,
      hours: 10,
      minutes: 0,
    },
  ];

  const seriesDurations1 = [
    {
      title: "Friends",
      days: 31,
      hours: 17,
      minutes: 0,
    },
  ];
  
  function logOutSeriesText(Friends) {

    const hoursOfWatchingSerial = (31 * 24) + 17 ;
    const theTimeSpendWatchingThisSerial1 = (761 * 100) / 700800 ;
    console.log(`${theTimeSpendWatchingThisSerial1}% of my life has spent  watching "Friends".`);

  }
  logOutSeriesText("Friends");


  const seriesDurations2 = [
    {
      title: "Prison Break",
      days: 11,
      hours: 5,
      minutes: 0,
    },
  ];
  
  function logOutSeriesText(prisonBreak) {

    const hoursOfWatchingSerial= (11 * 24) + 5;
    const theTimeSpendWatchingThisSeria2 = (269 * 100) / 700800;
    console.log(`${theTimeSpendWatchingThisSeria2}% of my life has spent  watching "Prison Break".`);

  }
  logOutSeriesText("Prison Break");


  const seriesDurations3 = [
    {
      title: "Lost",
      days: 5,
      hours: 10,
      minutes: 0,
    },
  ];
  
  function logOutSeriesText(Lost) {

    const hoursOfWatchingSerial= (5 * 24) + 10;
    const theTimeSpendWatchingThisSeria3 = (130 * 100) / 700800;
    console.log(`${theTimeSpendWatchingThisSeria3}% of my life has spent  watching "Lost".`);

  }
  logOutSeriesText("Lost");



console.log("-----------------------------NOnoN0nOYes (Note taking app)-----------------------------")
const notes = [];
function saveNote(content , id) {
    notes.push({content , id});
    return;
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);


function getNote(id) {

if(typeof id !== "number"){
    return "Error! This id is NOT valid... Try again with a NUMBER.";
}
for(let i = 0 ;  i < notes.length ; i++){
    if(notes[i].id === id) {
        return notes[i];
    }
}
console.log("Error... Note with id ${id} NOT founded...");
}

const firstNote = getNote(1);
console.log(firstNote); 

console.log(getNote(3));
console.log(getNote("number"));

function logOutNotesFormatted() {
    for(let i = 0 ; i < notes.length ; i++) {
   return `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}.` ;
  }
}
  
 console.log(logOutNotesFormatted());