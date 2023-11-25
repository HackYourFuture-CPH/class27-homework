//Javascript warmup (week3)

//Exercise 1 - Item array removal
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
  const index = names.indexOf("Ahmad");
  if (index !==-1) {
    names.splice(index, 1);
  }
  console.log(names);

//Exercise 2 - When will we be there??
  const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };

  function timeToDrive(travelInformation) {
    let timeTotal = (travelInformation.destinationDistance / travelInformation.speed) * 60;
    let hour = Math.floor(timeTotal / 60);
    let minute = Math.floor(timeTotal % 60);
    return `${hour} hours ${minute} minutes`;
  }
  
  const travelTime = timeToDrive(travelInformation);
  console.log(travelTime);
  
  //Exercise 3 - Series duration of my life
  const seriesDurations = [
    {
      title: "Friends",
      days: 3,
      hours: 23,
      minutes: 0,
    },
    {
      title: "Black Books",
      days: 4,
      hours: 6,
      minutes: 30,
    },
    {
      title: "The Good Doctor",
      days: 7,
      hours: 18,
      minutes: 21,
    },
  ];
    const averageLifespanYears = 80;
    const averageLifespanMinutes = averageLifespanYears * 365 * 24 * 60;
    let allSeriesDuration = 0;
    
    function logOutSeriesText() {
        for (let i = 0; i<seriesDurations.length; i++) {
        const seriesDurationInMinutes = ((seriesDurations[i].days*24)*60)+(seriesDurations[i].hours*60)+seriesDurations[i].minutes;
        const seriesPercentLifespan = seriesDurationInMinutes / averageLifespanMinutes * 100;
        allSeriesDuration += seriesPercentLifespan;
        console.log(`${seriesDurations[i].title} took ${seriesPercentLifespan.toFixed(3)}% of my life`);
        }
        console.log(`In total that is ${allSeriesDuration.toFixed(3)}% of my life`);       
    }
    logOutSeriesText(seriesDurations);

/* I tried to calculate sum of minutes for series by reduce method, 
and filter, but I could not figure it out unfortunately.
*/
 
  //NOnoN0nOYes (Note taking app-homework)

  //Save a note
  const notes = [];
  function saveNote(content, id) {
    const noteToDo = {content: content, id: id};
    notes.push(noteToDo);

  }
  saveNote("Pick up groceries", 1);
  saveNote("Do laundry", 2);
  saveNote("Feed fish", 3);
  saveNote("Walk with dog", 4);
  saveNote("Rest a little, read a book", 5);

  console.log(notes);

//Get a note
  function getNote(id) {
   for (const note of notes) {
    if (note.id === id) {
    return note;
  } else {
    return Error;
  }
  }
  }
  const firstNote = getNote(1);
  console.log(firstNote);
/* When I run that function, so I can console.log the result 
which shows in homework example like note with id(1), but 
when I want to find another note by id so I can't get it. 
I think, that I need to run function throught all notes.lenght,
and probably give more options, and I tried it but it didn't work..
*/ 

//Log out notes
  function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`);
    }
  };
  logOutNotesFormatted();

  //Unique feature
/* I was thinking to connect notes array with days of week,
when it shows what person need to do depends of day.
For example, to feed fish and walk with dog - do every day,
but laundry - on Wednesday and groceries - on Monday. I would appreciate if
you (mentor who's checking my work) could give me some tips how to create it, and
where to start. */ 